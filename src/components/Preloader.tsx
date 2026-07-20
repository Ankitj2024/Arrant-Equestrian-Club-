import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = '';
          onComplete();
        }
      });

      // Initial state
      gsap.set(logoRef.current, { opacity: 0, scale: 0.9, filter: 'blur(5px)' });
      gsap.set(textRef.current, { opacity: 0, y: 10 });

      // 1. Reveal logo
      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: 'power3.out',
      })
      // 2. Reveal loading text
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }, "-=0.8")
      // 3. Hold for a moment with a subtle scale
      .to(logoRef.current, {
        scale: 1.03,
        duration: 1.2,
        ease: 'sine.inOut',
      })
      // 4. Fade out logo and text
      .to([logoRef.current, textRef.current], {
        opacity: 0,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.inOut',
      })
      // 5. Slide the whole container up
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1.2,
        ease: 'power4.inOut',
      });
    }, containerRef);

    return () => {
      document.body.style.overflow = '';
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf9f6]"
    >
      <div ref={logoRef} className="w-48 h-48 md:w-64 md:h-64 mb-8 text-[#121212]">
        <img src="/logo.jpg" alt="Arrant Equestrian Club" className="w-full h-full object-contain drop-shadow-md rounded-full" />
      </div>
      <div ref={textRef} className="text-[#121212] uppercase tracking-[0.3em] text-xs font-sans font-semibold">
        Premium Showjumping
      </div>
    </div>
  );
}

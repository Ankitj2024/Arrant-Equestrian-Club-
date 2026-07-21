import { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const circle1Ref = useRef<HTMLDivElement>(null);
  const circle2Ref = useRef<HTMLDivElement>(null);
  const circle3Ref = useRef<HTMLDivElement>(null);

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
      gsap.set([circle1Ref.current, circle2Ref.current, circle3Ref.current], { scale: 0, transformOrigin: 'center center' });

      // 1. Reveal logo
      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power3.out',
      })
      // 2. Reveal text (if any)
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
      }, "-=0.8")
      // 3. Hold for a moment with a subtle scale
      .to(logoRef.current, {
        scale: 1.05,
        duration: 0.8,
        ease: 'sine.inOut',
      })
      // 4. Concentric circles expand to cover the screen
      .to(circle1Ref.current, {
        scale: 1,
        duration: 0.8,
        ease: 'power3.inOut',
      }, "-=0.2")
      .to(circle2Ref.current, {
        scale: 1,
        duration: 0.8,
        ease: 'power3.inOut',
      }, "-=0.6")
      .to(circle3Ref.current, {
        scale: 1,
        duration: 0.8,
        ease: 'power3.inOut',
      }, "-=0.6")
      // Fade out logo as circles take over
      .to(logoRef.current, {
        opacity: 0,
        duration: 0.4,
      }, "-=0.8")
      // 5. Fade out the whole container to reveal the site smoothly
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.8,
        ease: 'power2.inOut',
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
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#faf9f6] overflow-hidden"
    >
      {/* Expanding Concentric Circles */}
      <div ref={circle1Ref} className="absolute w-[200vmax] h-[200vmax] rounded-full bg-equestrian-accent z-10 pointer-events-none scale-0"></div>
      <div ref={circle2Ref} className="absolute w-[200vmax] h-[200vmax] rounded-full bg-[#faf9f6] z-20 pointer-events-none scale-0"></div>
      <div ref={circle3Ref} className="absolute w-[200vmax] h-[200vmax] rounded-full bg-equestrian-dark z-30 pointer-events-none scale-0"></div>

      <div ref={logoRef} className="w-48 h-48 md:w-64 md:h-64 mb-8 text-[#121212] z-40 relative">
        <img src="/logo.jpg" alt="Arrant Equestrian Club" className="w-full h-full object-contain drop-shadow-md rounded-full bg-white" />
      </div>
    </div>
  );
}

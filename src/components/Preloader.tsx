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
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
          <defs>
            <path id="topArch" d="M 40, 100 a 60,60 0 1,1 120,0" fill="transparent" />
            <path id="bottomArch" d="M 40, 100 a 60,60 0 0,0 120,0" fill="transparent" />
          </defs>
          
          <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="1" />
          
          <text fill="currentColor" fontSize="13" fontWeight="800" letterSpacing="1.5" fontFamily="sans-serif">
            <textPath href="#topArch" startOffset="50%" textAnchor="middle">
              ARRANT EQUESTRIAN CLUB
            </textPath>
          </text>
          
          <text fill="currentColor" fontSize="14" fontWeight="800" letterSpacing="3" fontFamily="sans-serif">
            <textPath href="#bottomArch" startOffset="50%" textAnchor="middle">
              LUCKNOW
            </textPath>
          </text>

          <text x="100" y="132" fontSize="85" fontWeight="900" fontFamily="serif" fill="currentColor" textAnchor="middle">
            A
          </text>
          
          {/* Stylized Horse Silhouette cutting through the 'A' */}
          <path 
            d="M 85 95 C 100 85, 125 90, 130 105 C 135 120, 120 125, 110 115 C 105 110, 95 115, 85 110 Z" 
            fill="currentColor" 
          />
          <path 
            d="M 85 95 C 100 85, 125 90, 130 105 C 135 120, 120 125, 110 115 C 105 110, 95 115, 85 110 Z" 
            fill="#faf9f6" 
            stroke="#faf9f6"
            strokeWidth="3"
            transform="translate(-3, -3)"
          />
        </svg>
      </div>
      <div ref={textRef} className="text-[#121212] uppercase tracking-[0.3em] text-xs font-sans font-semibold">
        Premium Showjumping
      </div>
    </div>
  );
}

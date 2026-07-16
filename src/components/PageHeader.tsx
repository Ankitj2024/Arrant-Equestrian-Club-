import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageHeaderProps {
  title: string;
  image: string;
  subtitle?: string;
}

export default function PageHeader({ title, image, subtitle }: PageHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Title reveal with clip-path
      gsap.fromTo(
        titleRef.current,
        { clipPath: 'inset(0 0 100% 0)', opacity: 0, y: 30 },
        {
          clipPath: 'inset(0 0 0% 0)',
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: 'power3.out',
        }
      );

      // Subtitle fade
      gsap.fromTo(
        '.page-header-subtitle',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: 'power2.out' }
      );

      // Breadcrumb
      gsap.fromTo(
        '.page-header-breadcrumb',
        { opacity: 0 },
        { opacity: 1, duration: 0.6, delay: 0.7 }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={headerRef} className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>
      <div className="relative z-10 text-center px-6 mt-16">
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-serif text-white mb-4"
          style={{ opacity: 0 }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="page-header-subtitle text-white/70 text-sm md:text-base uppercase tracking-widest" style={{ opacity: 0 }}>
            {subtitle}
          </p>
        )}
        <div className="page-header-breadcrumb mt-6 text-xs uppercase tracking-widest text-white/40" style={{ opacity: 0 }}>
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="mx-2">/</span>
          <span className="text-equestrian-accent">{title}</span>
        </div>
      </div>
    </section>
  );
}

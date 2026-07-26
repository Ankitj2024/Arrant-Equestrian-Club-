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
    <section ref={headerRef} className="relative h-[65vh] min-h-[450px] w-full flex items-center justify-center overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform scale-105"
        style={{ backgroundImage: `url("${image}")` }}
      >
        {/* Multi-layer luxury overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-equestrian-dark/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/70"></div>
      </div>

      {/* Decorative ambient gold rings */}
      <div className="absolute top-1/4 left-10 w-72 h-72 rounded-full border border-[#C9A96E]/20 blur-[1px] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-12 w-96 h-96 rounded-full border border-[#C9A96E]/15 blur-sm pointer-events-none"></div>

      <div className="relative z-10 text-center px-6 mt-12 max-w-4xl mx-auto">
        {subtitle && (
          <div className="page-header-subtitle inline-flex items-center space-x-2.5 bg-black/40 backdrop-blur-md border border-[#C9A96E]/50 px-5 py-1.5 rounded-full mb-6 shadow-2xl" style={{ opacity: 0 }}>
            <span className="w-2 h-2 rounded-full bg-[#C9A96E] animate-pulse"></span>
            <span className="text-[#C9A96E] text-xs md:text-sm uppercase tracking-[0.2em] font-semibold">{subtitle}</span>
          </div>
        )}

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight drop-shadow-lg mb-4"
          style={{ opacity: 0 }}
        >
          {title}
        </h1>

        <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-[#C9A96E] to-transparent mx-auto my-6 opacity-80"></div>

        <div className="page-header-breadcrumb text-xs uppercase tracking-widest text-white/50 bg-black/20 backdrop-blur-sm inline-block px-4 py-1.5 rounded-full border border-white/10" style={{ opacity: 0 }}>
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span className="mx-2.5 text-[#C9A96E]">•</span>
          <span className="text-[#C9A96E] font-medium">{title}</span>
        </div>
      </div>

      {/* Smooth bottom transition gradient into dark theme */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-equestrian-dark via-equestrian-dark/60 to-transparent z-10 pointer-events-none"></div>
    </section>
  );
}

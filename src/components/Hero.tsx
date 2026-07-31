import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_ITEMS = [
  'Mohanlalganj, Lucknow',
  'Admission Open',
  'Basic to Advanced Riding',
  'Show Jumping',
  'Tent Pegging',
  'Trail Riding',
  'Instructor: Abhishek Kumar Singh',
  'General Horsemanship',
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Title split animation
      gsap.to('.hero-char', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.03,
        delay: 0.3,
        ease: 'power3.out',
      });

      // Subtitle fade
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: 'power2.out' }
      );

      // CTA button
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: 'power2.out' }
      );

      // Scroll indicator
      gsap.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.8 }
      );

      // Scroll indicator line animation
      gsap.to('.scroll-line-inner', {
        y: '200%',
        repeat: -1,
        duration: 1.5,
        ease: 'linear',
        yoyo: false,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 mt-16">
        <p
          ref={subtitleRef}
          className="text-equestrian-accent text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] mb-3 md:mb-4"
          style={{ opacity: 0 }}
        >
          It Runs In The Blood
        </p>
        <h1
          ref={titleRef}
          className="text-4xl md:text-7xl lg:text-8xl font-serif text-white mb-6 md:mb-8 leading-tight"
        >
          {[
            "Arrant Equestrian Club",
            "&",
            "Stud Farm"
          ].map((line, li) => (
            <div key={li} className={`block ${li === 1 ? 'text-3xl md:text-5xl lg:text-6xl' : ''}`}>
              {line.split(' ').map((word, wi) => (
                <span key={`${li}-${wi}`} style={{ display: 'inline-block', overflow: 'hidden', marginRight: '0.3em' }}>
                  {word.split('').map((char, ci) => (
                    <span
                      key={`${li}-${wi}-${ci}`}
                      className={`hero-char hero-char-${li}-${wi}`}
                      style={{ display: 'inline-block', transform: 'translateY(120%)', opacity: 0 }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </div>
          ))}
        </h1>
        <div ref={ctaRef} style={{ opacity: 0 }}>
          <Link
            to="/services"
            className="inline-block border border-white/50 px-6 py-3 md:px-8 md:py-4 text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm"
          >
            Discover Our Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ opacity: 0 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <div className="scroll-line-inner absolute top-0 w-full h-1/2 bg-white -translate-y-full"></div>
        </div>
      </div>

      {/* Marquee Stats Ticker */}
      <div className="absolute bottom-0 left-0 right-0 bg-equestrian-dark/70 backdrop-blur-md border-t border-white/10 py-4 z-10 overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="mx-8 text-xs uppercase tracking-[0.2em] text-white/60 flex items-center">
              <span className="w-1.5 h-1.5 bg-equestrian-accent rounded-full mr-4 inline-block"></span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

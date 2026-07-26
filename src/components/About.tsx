import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { value: 35, suffix: '+', label: 'Years of Excellence' },
  { value: 200, suffix: '+', label: 'Horses Trained' },
  { value: 50, suffix: '+', label: 'Competition Wins' },
  { value: 15, suffix: '', label: 'Expert Trainers' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [currentValue, setCurrentValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const obj = { val: 0 };
            gsap.to(obj, {
              val: value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: () => {
                setCurrentValue(Math.floor(obj.val));
              },
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [value, suffix, hasAnimated]);

  return (
    <div ref={containerRef} className="counter-number text-4xl md:text-5xl font-serif text-equestrian-accent inline-block">
      {currentValue}{suffix}
    </div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Image clip-path reveal
      gsap.fromTo(
        imageRef.current,
        { clipPath: 'inset(0 100% 0 0)' },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top 80%',
            end: 'top 30%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Text lines stagger
      gsap.fromTo(
        '.about-text-line',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Stats row stagger
      gsap.fromTo(
        '.stat-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.stats-row',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="the-estate" className="py-16 md:py-32 bg-[#faf9f6] text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div ref={textRef}>
            <h4 className="about-text-line text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
              About Us
            </h4>
            <h2 className="about-text-line text-3xl md:text-5xl font-serif mb-6 md:mb-8 leading-tight">
              Family Owned <br />& Operated
            </h2>
            <p className="about-text-line text-gray-600 text-sm md:text-base leading-relaxed mb-4 md:mb-6">
              The estate has been family owned and operated for generations and is an elite training ground for aspiring
              young riders, and decorated athletes and horses. Our team breeds, sources, develops and sells top young
              horses who go on to compete at the highest levels.
            </p>
            <p className="about-text-line text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
              Nestled in the English countryside, in Henley-on-Thames, Rosehill has been a haven for horses for
              generations. A stunning combination of old heritage and a new functional horse centric design, the farm is
              a paradigm of old english equestrianism. From sprawling green paddocks, to expansive cross country courses
              with iconic cottages sprinkled in between, it can feel like you're stepping into another period of time.
            </p>
            <Link
              to="/team"
              className="about-text-line inline-block border-b border-gray-900 pb-1 text-sm uppercase tracking-widest hover:text-equestrian-accent hover:border-equestrian-accent transition-colors"
            >
              Meet The Team
            </Link>
          </div>

          <div ref={imageRef} className="relative h-[350px] md:h-[600px] w-full">
            <img
              src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
              alt="Rosehill Estate rolling green pastures"
              className="absolute inset-0 w-full h-full object-cover rounded-sm"
              loading="lazy"
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-14 md:mt-20 pt-10 md:pt-12 border-t border-gray-200">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-item text-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

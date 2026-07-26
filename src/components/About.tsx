import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Navigation } from 'lucide-react';
import FloatingCircles from './FloatingCircles';

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
    <section ref={sectionRef} id="the-estate" className="py-16 md:py-32 bg-[#faf9f6] text-gray-900 relative overflow-hidden">
      <FloatingCircles />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
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
            <p className="about-text-line text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              Our club offers a premier, tranquil environment for riders of all levels. Under the expert guidance of instructor Abhishek Kumar Singh, we provide professional training from basic riding to advanced show jumping, tent pegging, and general horsemanship.
            </p>

            {/* Small Location Section */}
            <div className="about-text-line bg-white/95 border border-[#C9A96E]/40 rounded-lg p-4 md:p-5 mb-6 md:mb-8 shadow-sm flex items-start space-x-3.5 hover:border-[#C9A96E] hover:shadow-md transition-all duration-300">
              <div className="p-2.5 bg-[#C9A96E]/15 text-[#C9A96E] rounded-full flex-shrink-0 mt-0.5">
                <MapPin size={20} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h5 className="font-serif text-base font-semibold text-equestrian-dark">Our Club Location</h5>
                  <span className="text-[10px] uppercase tracking-wider bg-[#C9A96E]/20 text-equestrian-dark font-semibold px-2 py-0.5 rounded">Lucknow</span>
                </div>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-2.5">
                  Annapurna Eco Green City, Jaitikhera, Bani Road, Opp. BSF Camp, Mohanlalganj, Lucknow - 226301
                </p>
                <a
                  href="https://maps.google.com/?q=Annapurna+Eco+Green+City+Mohanlalganj+Lucknow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-equestrian-accent hover:text-equestrian-dark transition-colors"
                >
                  <Navigation size={13} className="rotate-45" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            <Link
              to="/team"
              className="about-text-line inline-block border-b border-gray-900 pb-1 text-sm uppercase tracking-widest hover:text-equestrian-accent hover:border-equestrian-accent transition-colors"
            >
              Meet The Team
            </Link>
          </div>

          <div ref={imageRef} className="relative h-[350px] md:h-[600px] w-full">
            <img
              src="/23.jpeg"
              alt="Arrant Equestrian Club Lucknow Founders with Emblem"
              className="absolute inset-0 w-full h-full object-cover object-top md:object-center rounded-sm shadow-xl"
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

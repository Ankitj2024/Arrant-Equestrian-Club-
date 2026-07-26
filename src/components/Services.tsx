import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: 'Horse Boarding',
    description: 'Indoor livery and roaming pastures in the heart of Henley-on-Thames. State-of-the-art stables with 24/7 care.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    icon: '🏠',
  },
  {
    title: 'Horse Sales',
    description: 'We breed, source, develop and sell top young horses who go on to compete at the highest levels worldwide.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    icon: '🏆',
  },
  {
    title: 'Advanced Training',
    description: 'For riders who want to reach the top of the sport with elite coaching from championship-level trainers.',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    icon: '🎯',
  },
  {
    title: 'Intensive Bootcamp',
    description: 'Custom intensive training series for clients to elevate their riding to the next competitive level.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80',
    icon: '⚡',
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title reveal
      gsap.fromTo(
        '.services-title',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-header',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards stagger entrance
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-32 bg-equestrian-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="services-header text-center mb-12 md:mb-20">
          <h4 className="services-title text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
            What We Offer
          </h4>
          <h2 className="services-title text-3xl md:text-5xl font-serif">Our Services</h2>
        </div>

        <div className="services-grid grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {SERVICES.map((service) => (
            <div key={service.title} className="service-card group cursor-pointer">
              <div className="relative h-56 md:h-80 overflow-hidden mb-4 md:mb-6 rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 group-hover:via-transparent transition-all duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 z-20 text-3xl">{service.icon}</div>
              </div>
              <h3 className="text-xl md:text-2xl font-serif mb-2 md:mb-3 group-hover:text-equestrian-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 md:mb-4 leading-relaxed">{service.description}</p>
              <span className="inline-flex items-center text-xs uppercase tracking-widest border-b border-white/30 pb-1 group-hover:border-equestrian-accent group-hover:text-equestrian-accent transition-colors">
                Learn More
                <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

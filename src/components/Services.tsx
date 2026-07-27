import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: 'Basic Riding',
    description: 'Learn the fundamentals of horse riding with expert guidance, from mounting to confident trotting and cantering.',
    icon: '🐴',
  },
  {
    title: 'Show Jumping',
    description: 'Train in the art of competitive show jumping with professionally designed courses and seasoned jumpers.',
    icon: '🏅',
  },
  {
    title: 'Trail Riding',
    description: 'Explore scenic countryside trails on horseback — a perfect blend of adventure and natural beauty.',
    icon: '🌿',
  },
  {
    title: 'Stabling Facilities',
    description: 'Premium stabling with round-the-clock care, spacious stalls, and top-quality feed and veterinary support.',
    icon: '🏠',
  },
  {
    title: 'Photoshoot',
    description: 'Capture stunning equestrian moments with our professional photography sessions at the estate.',
    icon: '📸',
  },
  {
    title: 'Tent Pegging',
    description: 'Experience the thrill of this ancient mounted sport — lance work, speed, and precision on horseback.',
    icon: '⚔️',
  },
  {
    title: 'Well Trained Riding Instructor',
    description: 'Our certified instructors bring years of championship-level experience to every lesson, for all skill levels.',
    icon: '🎓',
  },
  {
    title: 'General Horsemanship',
    description: 'Master the complete art of horse care — grooming, tacking, feeding, health management, and bonding.',
    icon: '🐎',
  },
];

interface ServicesProps {
  hideHeader?: boolean;
}

export default function Services({ hideHeader = false }: ServicesProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title reveal
      if (!hideHeader) {
        gsap.fromTo(
          '.services-title',
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.4,
            stagger: 0.07,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.services-header',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Cards stagger entrance
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.4,
          stagger: 0.07,
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
  }, [hideHeader]);

  return (
    <section ref={sectionRef} id="services" className="py-16 md:py-32 bg-equestrian-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {!hideHeader && (
          <div className="services-header text-center mb-12 md:mb-20">
            <h4 className="services-title text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
              What We Offer
            </h4>
            <h2 className="services-title text-3xl md:text-5xl font-serif">Our Services</h2>
          </div>
        )}

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="service-card group relative bg-white/[0.03] border border-white/10 rounded-xl p-6 md:p-8 hover:bg-white/[0.07] hover:border-equestrian-accent/40 transition-all duration-200 hover:-translate-y-1"
            >
              <div className="text-4xl md:text-5xl mb-5 transform group-hover:scale-110 transition-transform duration-150">
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-serif mb-3 group-hover:text-equestrian-accent transition-colors duration-150">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              <div className="absolute top-0 right-0 w-24 h-24 bg-equestrian-accent/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    title: 'Basic Riding',
    description: 'Learn the fundamentals of horse riding with expert guidance, from mounting to confident trotting and cantering.',
    image: '/basic riding.jpeg',
  },
  {
    title: 'Show Jumping',
    description: 'Train in the art of competitive show jumping with professionally designed courses and seasoned jumpers.',
    image: '/show jumping.jpeg',
    imagePosition: 'object-top',
  },
  {
    title: 'Trail Riding',
    description: 'Explore scenic countryside trails on horseback — a perfect blend of adventure and natural beauty.',
    image: '/trail riding.jpeg',
  },
  {
    title: 'Stabling Facilities',
    description: 'Premium stabling with round-the-clock care, spacious stalls, and top-quality feed and veterinary support.',
    image: '/stabiling facilities.jpeg',
  },
  {
    title: 'Photoshoot',
    description: 'Capture stunning equestrian moments with our professional photography sessions at the estate.',
    image: '/photoshoot.jpeg',
  },
  {
    title: 'Tent Pegging',
    description: 'Experience the thrill of this ancient mounted sport — lance work, speed, and precision on horseback.',
    image: '/tent pegging.jpeg',
  },
  {
    title: 'Well Trained Riding Instructor',
    description: 'Our certified instructors bring years of championship-level experience to every lesson, for all skill levels.',
    image: '/21.jpeg',
  },
  {
    title: 'General Horsemanship',
    description: 'Master the complete art of horse care — grooming, tacking, feeding, health management, and bonding.',
    image: '/general horsemanship.jpeg',
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

        <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="service-card group relative bg-white/[0.03] border border-white/10 rounded-xl overflow-hidden hover:bg-white/[0.07] hover:border-equestrian-accent/40 transition-all duration-300 hover:-translate-y-2 flex flex-col shadow-lg shadow-black/20"
            >
              <div className="w-full h-48 sm:h-56 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className={`w-full h-full object-cover ${service.imagePosition || 'object-center'} transform group-hover:scale-110 transition-transform duration-700 ease-in-out`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-equestrian-dark to-transparent opacity-80" />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow relative z-10 -mt-12">
                <h3 className="text-xl md:text-2xl font-serif mb-3 group-hover:text-equestrian-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-equestrian-accent/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

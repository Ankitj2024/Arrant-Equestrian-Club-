import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FACILITIES = [
  {
    title: 'Indoor Arena',
    description: 'Olympic-sized indoor arena with premium footing for year-round training.',
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Rolling Pastures',
    description: 'Over 100 acres of lush English countryside for your horse to roam freely.',
    image: 'https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Heritage Cottage',
    description: 'Charming period cottages available for riders visiting for bootcamps and clinics.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Cross Country Course',
    description: 'Championship-level cross country obstacles set across rolling terrain.',
    image: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
];

export default function Facilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current || !scrollContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        '.facilities-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.facilities-header',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Horizontal scroll
      const scrollContainer = scrollContainerRef.current!;
      const totalScrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

      gsap.to(scrollContainer, {
        scrollLeft: totalScrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 10%',
          end: `+=${totalScrollWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Cards parallax effect
      gsap.utils.toArray<HTMLElement>('.facility-card-img').forEach((img) => {
        gsap.fromTo(
          img,
          { scale: 1.15 },
          {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('.facility-card'),
              start: 'left right',
              end: 'right left',
              scrub: true,
              containerAnimation: undefined,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#faf9f6] text-gray-900 border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="facilities-header flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="facilities-title text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Explore Our Grounds
            </h4>
            <h2 className="facilities-title text-4xl md:text-5xl font-serif">Estate & Facilities</h2>
          </div>
          <p className="facilities-title text-gray-500 text-sm mt-4 md:mt-0 max-w-md text-right hidden md:block">
            Scroll through our world-class facilities nestled in the English countryside
          </p>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {FACILITIES.map((facility, index) => (
          <div
            key={facility.title}
            className="facility-card group cursor-pointer relative flex-shrink-0 w-[85vw] md:w-[45vw] lg:w-[35vw] h-[500px] overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-colors duration-500 z-10" />
            <img
              src={facility.image}
              alt={facility.title}
              className="facility-card-img absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
              <span className="text-[10px] text-white/80 uppercase tracking-widest">0{index + 1}</span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white">
              <h3 className="text-2xl md:text-3xl font-serif mb-2">{facility.title}</h3>
              <p className="text-white/70 text-sm max-w-sm">{facility.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import PageHeader from '../components/PageHeader';
import About from '../components/About';
import Facilities from '../components/Facilities';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TIMELINE = [
  { year: '1987', title: 'The Beginning', description: 'Rosehill Farm was established as a family equestrian centre in the heart of Henley-on-Thames.' },
  { year: '1995', title: 'First Competition Win', description: 'Our riders won their first national showjumping competition, putting Rosehill on the map.' },
  { year: '2005', title: 'Facility Expansion', description: 'Construction of the state-of-the-art indoor arena and modernized stable complex.' },
  { year: '2012', title: 'International Recognition', description: 'Tim Wilks competes internationally, representing Canada at Nations Cup level events.' },
  { year: '2020', title: 'New Era', description: 'Launch of the intensive bootcamp programme and expanded horse sales operation.' },
  { year: 'Today', title: 'Continuing the Legacy', description: 'Over 200 horses trained and a new generation of championship riders in the making.' },
];

export default function Estate() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline items stagger
      gsap.fromTo(
        '.timeline-item',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.timeline-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Timeline line draw
      gsap.fromTo(
        '.timeline-line',
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.timeline-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHeader
        title="The Estate"
        subtitle="A Heritage of Equestrian Excellence"
        image="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
      />
      <About />

      {/* Timeline Section */}
      <section ref={timelineRef} className="py-24 md:py-32 bg-equestrian-dark text-white border-t border-white/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h4 className="text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">Our Journey</h4>
            <h2 className="text-4xl md:text-5xl font-serif">A Rich History</h2>
          </div>

          <div className="timeline-grid relative">
            {/* Vertical line */}
            <div className="timeline-line absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-equestrian-accent/30 origin-top"></div>

            <div className="space-y-12">
              {TIMELINE.map((item, index) => (
                <div
                  key={item.year}
                  className={`timeline-item relative flex items-start gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-equestrian-accent rounded-full border-4 border-equestrian-dark z-10"></div>

                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <span className="text-equestrian-accent font-serif text-2xl">{item.year}</span>
                    <h3 className="text-xl font-serif mt-2 mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Facilities />
    </>
  );
}

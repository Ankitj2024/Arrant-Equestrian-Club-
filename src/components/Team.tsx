import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Beams from './Beams';

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    name: 'Abhishek Kumar Singh',
    role: 'Head Riding Instructor',
    description:
      'Abhishek is a well-trained and experienced riding instructor who leads all training programmes at Arrant Equestrian Club — from basic riding and trail riding to show jumping, tent pegging, and general horsemanship.',
    image: '/24.jpeg',
  },
];

interface TeamProps {
  hideHeader?: boolean;
}

export default function Team({ hideHeader = false }: TeamProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title
      if (!hideHeader) {
        gsap.fromTo(
          '.team-title',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.team-header',
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Team cards with stagger
      gsap.fromTo(
        '.team-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Image border animation
      gsap.fromTo(
        '.team-image-ring',
        { scale: 0.95, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );

      // CTA button
      gsap.fromTo(
        '.team-cta',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.team-cta',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [hideHeader]);

  return (
    <section ref={sectionRef} id="team" className="py-16 md:py-32 bg-equestrian-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-90 pointer-events-none">
        <Beams beamWidth={3} beamHeight={15} beamNumber={24} lightColor="#FFF7E6" speed={1.5} />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {!hideHeader && (
          <div className="team-header text-center mb-12 md:mb-20">
            <h4 className="team-title text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Meet The Team
            </h4>
            <h2 className="team-title text-3xl md:text-5xl font-serif">The Riders & Trainers</h2>
          </div>
        )}

        <div className="team-grid flex flex-col items-center">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card text-center w-full max-w-2xl mx-auto px-4">
              <div className="relative w-full aspect-video mx-auto mb-8 md:mb-10">
                {/* Decorative ring */}
                <div className="team-image-ring absolute -inset-2 md:-inset-3 rounded-2xl border border-equestrian-accent/30 opacity-0 pointer-events-none"></div>
                <div className="w-full h-full overflow-hidden rounded-xl border border-white/10 shadow-2xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-equestrian-accent text-xs uppercase tracking-widest mb-3">{member.role}</p>
              <h3 className="text-2xl md:text-4xl font-serif mb-5 text-white">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="team-cta mt-14 md:mt-20 text-center">
          <a
            href="https://wa.me/919031334581"
            target="_blank" rel="noopener noreferrer"
            className="inline-block border border-white/30 px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-equestrian-dark transition-colors duration-300 cursor-pointer"
          >
            Join the Team Today!
          </a>
        </div>
      </div>
    </section>
  );
}

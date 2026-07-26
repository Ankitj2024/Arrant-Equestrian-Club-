import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Beams from './Beams';

gsap.registerPlugin(ScrollTrigger);

const TEAM = [
  {
    name: 'Caroline Wilks',
    role: 'Head Trainer & Founder',
    description:
      'Caroline has been in horses for decades and has a passion for teaching all levels of students and sourcing and developing promising young horses.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    name: 'Anna Wilks',
    role: 'Senior Rider & Trainer',
    description:
      'Gold medal winner at the European Championships for Juniors in eventing, Anna transitioned to showjumping and is an incredible rider and trainer.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80',
  },
  {
    name: 'Tim Wilks',
    role: 'International Showjumper',
    description:
      'Canadian Nations Cup final rider, Tim has achieved a top ranking of 100 in the world and aspires to represent his team in the Olympics.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80',
  },
];

export default function Team() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title
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
        { rotate: -90, opacity: 0 },
        {
          rotate: 0,
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
  }, []);

  return (
    <section ref={sectionRef} id="team" className="py-16 md:py-32 bg-equestrian-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Beams beamWidth={2} beamHeight={15} beamNumber={20} lightColor="#C9A96E" speed={1.5} />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="team-header text-center mb-12 md:mb-20">
          <h4 className="team-title text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
            Meet The Team
          </h4>
          <h2 className="team-title text-3xl md:text-5xl font-serif">The Riders & Trainers</h2>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card group text-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-6 md:mb-8">
                {/* Decorative ring */}
                <div className="team-image-ring absolute inset-0 rounded-full border-2 border-equestrian-accent/30 scale-110"></div>
                <div className="w-full h-full overflow-hidden rounded-full border-4 border-white/5 group-hover:border-equestrian-accent/40 transition-colors duration-500">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-700"
                    loading="lazy"
                  />
                </div>
              </div>
              <p className="text-equestrian-accent text-xs uppercase tracking-widest mb-2">{member.role}</p>
              <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-equestrian-accent transition-colors">
                {member.name}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="team-cta mt-14 md:mt-20 text-center">
          <a
            href="/contact"
            className="inline-block border border-white/30 px-8 py-4 md:px-10 md:py-5 text-xs md:text-sm uppercase tracking-widest hover:bg-white hover:text-equestrian-dark transition-colors duration-300 cursor-pointer"
          >
            Join the Team Today!
          </a>
        </div>
      </div>
    </section>
  );
}

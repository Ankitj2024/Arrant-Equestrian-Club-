import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import FloatingCircles from './FloatingCircles';

gsap.registerPlugin(ScrollTrigger);

const TESTIMONIALS = [
  {
    name: 'Ananya Chauhan',
    role: 'National Showjumping Competitor',
    quote:
      'Training at Arrant Equestrian Club under Captain A.K. Singh transformed my riding technique. The level of personal attention and tactical coaching in show jumping is unmatched anywhere in India. Within just one season, I was winning ribbons at national EFI championships.',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Vikramaditya Rathore',
    role: 'Tent Pegging & Showjumping Rider',
    quote:
      'The bootcamp programme at Arrant Equestrian was an incredible experience. Instructor Abhishek’s guidance on horse harmony, balance, and precision riding is extraordinary. The facilities here in Mohanlalganj are truly world-class.',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Dr. Radhika Sharma',
    role: 'Horse Owner & Club Member',
    quote:
      'Arrant Equestrian Club sourced the most wonderful thoroughbred for our family. Their knowledge of bloodlines and stud farm excellence is phenomenal. We felt guided and supported throughout the entire process.',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Kabir Singhania',
    role: 'Dressage & Eventing Competitor',
    quote:
      'The training arena and stabling facilities at Arrant Equestrian Club set a new benchmark for equestrian sports in Uttar Pradesh. Every detail, from the footing to the obstacle courses, makes it the ultimate destination for serious riders.',
    stars: 5,
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-header',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonial-card',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const goTo = (index: number) => {
    if (slideRef.current) {
      gsap.to(slideRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.3,
        onComplete: () => {
          setCurrentIndex(index);
          gsap.fromTo(
            slideRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
          );
        },
      });
    } else {
      setCurrentIndex(index);
    }
  };

  const next = () => goTo((currentIndex + 1) % TESTIMONIALS.length);
  const prev = () => goTo((currentIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const current = TESTIMONIALS[currentIndex];

  return (
    <section ref={sectionRef} className="py-16 md:py-32 bg-[#faf9f6] text-gray-900 border-t border-gray-200 relative overflow-hidden">
      <FloatingCircles />
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="testimonials-header text-center mb-10 md:mb-16">
          <h4 className="testimonials-title text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
            What They Say
          </h4>
          <h2 className="testimonials-title text-3xl md:text-5xl font-serif">Client Testimonials</h2>
        </div>

        <div className="testimonial-card max-w-4xl mx-auto">
          <div
            ref={slideRef}
            className="bg-white p-6 md:p-16 shadow-lg border border-gray-100 rounded-sm text-center"
          >
            <div className="flex justify-center mb-6">
              {Array.from({ length: current.stars }).map((_, i) => (
                <Star key={i} size={18} className="text-equestrian-accent fill-equestrian-accent mx-0.5" />
              ))}
            </div>
            <blockquote className="text-base md:text-2xl font-serif text-gray-800 leading-relaxed mb-6 md:mb-8 italic">
              "{current.quote}"
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <img
                src={current.image}
                alt={current.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-equestrian-accent/30"
                loading="lazy"
              />
              <div className="text-left">
                <p className="font-serif text-lg">{current.name}</p>
                <p className="text-gray-500 text-xs uppercase tracking-widest">{current.role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prev}
              className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-equestrian-dark hover:text-white hover:border-equestrian-dark transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex space-x-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'bg-equestrian-accent w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full hover:bg-equestrian-dark hover:text-white hover:border-equestrian-dark transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

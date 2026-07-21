import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GALLERY_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    alt: 'Showjumper clearing a fence at competition',
    category: 'Competition',
  },
  {
    src: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    alt: 'White horse portrait in golden light',
    category: 'Horses',
  },
  {
    src: 'https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    alt: 'Horses grazing on rolling green pastures',
    category: 'Estate',
  },
  {
    src: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    alt: 'Rider training in the indoor arena',
    category: 'Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80',
    alt: 'Close-up of a horse during dressage',
    category: 'Training',
  },
  {
    src: 'https://images.unsplash.com/photo-1508974239320-0a029497e820?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    alt: 'Horse and rider silhouette at sunset',
    category: 'Estate',
  },
  {
    src: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    alt: 'Modern stable interiors',
    category: 'Facilities',
  },
  {
    src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    alt: 'Heritage cottage on the estate grounds',
    category: 'Estate',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Title
      gsap.fromTo(
        '.gallery-title',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gallery-header',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Masonry grid stagger
      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex + 1) % GALLERY_IMAGES.length);
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((lightboxIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-equestrian-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="gallery-header text-center mb-16">
          <h4 className="gallery-title text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
            Our Gallery
          </h4>
          <h2 className="gallery-title text-4xl md:text-5xl font-serif">Life at the Estate</h2>
        </div>

        {/* Grid Gallery */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              className={`gallery-item group cursor-zoom-in relative overflow-hidden rounded-sm ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              onClick={() => setLightboxIndex(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover aspect-square transform group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-equestrian-dark/0 group-hover:bg-equestrian-dark/40 transition-colors duration-300 flex items-end">
                <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] uppercase tracking-widest bg-equestrian-accent/80 px-2 py-1 rounded-full">
                    {img.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-110"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>
          <img
            src={GALLERY_IMAGES[lightboxIndex].src}
            alt={GALLERY_IMAGES[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain cursor-default"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-xs uppercase tracking-widest">
            {lightboxIndex + 1} / {GALLERY_IMAGES.length} — Use arrow keys to navigate
          </div>
        </div>
      )}
    </section>
  );
}

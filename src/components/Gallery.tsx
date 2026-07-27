import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// 23 local images (1–6 are .png, 7–23 are .jpeg)
const GALLERY_IMAGES: { src: string; alt: string }[] = [];
for (let i = 1; i <= 23; i++) {
  const ext = i <= 6 ? 'png' : 'jpeg';
  GALLERY_IMAGES.push({
    src: `/${i}.${ext}`,
    alt: `Arrant Equestrian Club — Photo ${i}`,
  });
}

// Premium masonry layout pattern for 23 images
// Each entry: [colSpan, rowSpan] on md+ screens
const LAYOUT: [number, number][] = [
  [2, 2], // 1 — hero feature
  [1, 1], // 2
  [1, 1], // 3
  [1, 2], // 4 — tall
  [1, 1], // 5
  [1, 1], // 6
  [2, 1], // 7 — wide
  [1, 1], // 8
  [1, 1], // 9
  [1, 1], // 10
  [1, 2], // 11 — tall
  [2, 1], // 12 — wide
  [1, 1], // 13
  [1, 1], // 14
  [1, 1], // 15
  [2, 1], // 16 — wide
  [1, 2], // 17 — tall
  [1, 1], // 18
  [1, 1], // 19
  [1, 1], // 20
  [1, 1], // 21
  [1, 1], // 22
  [1, 1], // 23
];

export default function Gallery({ hideHeader = false, limit }: { hideHeader?: boolean; limit?: number } = {}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = limit ? GALLERY_IMAGES.slice(0, limit) : GALLERY_IMAGES;
  const layout = limit ? LAYOUT.slice(0, limit) : LAYOUT;

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Heading entrance
      gsap.fromTo(
        '.gallery-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gallery-heading-wrap',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Grid items
      gsap.fromTo(
        '.gallery-item',
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.05,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Keyboard nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null)
        setLightboxIndex((lightboxIndex + 1) % images.length);
      if (e.key === 'ArrowLeft' && lightboxIndex !== null)
        setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, images.length]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    document.body.style.overflow = lightboxIndex !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxIndex]);

  const goPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + images.length) % images.length);
  };
  const goNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % images.length);
  };

  return (
    <section ref={sectionRef} className={`pb-20 md:pb-32 bg-equestrian-dark text-white min-h-screen relative overflow-hidden ${hideHeader ? 'pt-12 md:pt-16' : 'pt-28 md:pt-36'}`}>
      {/* ── Background Image Behind Header ── */}
      {!hideHeader && (
        <div className="absolute top-0 left-0 right-0 h-[550px] z-0 overflow-hidden pointer-events-none">
          <div
            className="w-full h-full bg-cover bg-center opacity-30 transform scale-105"
            style={{ backgroundImage: 'url("/2.png")' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-equestrian-dark/90 via-equestrian-dark/60 to-equestrian-dark" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* ── Single Premium Header ── */}
        {!hideHeader && (
          <div className="gallery-heading-wrap text-center mb-14 md:mb-20">
            <span className="gallery-heading inline-block text-equestrian-accent text-[11px] font-semibold uppercase tracking-[0.3em] mb-4">
              Gallery
            </span>
            <h1 className="gallery-heading text-4xl md:text-6xl font-serif leading-tight">
              Moments from Our<br className="hidden md:block" /> Equestrian World
            </h1>
            <div className="gallery-heading mx-auto mt-6 w-16 h-px bg-gradient-to-r from-transparent via-equestrian-accent to-transparent" />
          </div>
        )}

        {/* ── Premium Masonry Grid ── */}
        <div className="gallery-grid grid grid-cols-2 md:grid-cols-4 grid-flow-dense auto-rows-[180px] md:auto-rows-[220px] gap-2.5 md:gap-3">
          {images.map((img, i) => {
            const [colSpan, rowSpan] = layout[i];
            return (
              <div
                key={i}
                className={`gallery-item group cursor-zoom-in relative overflow-hidden rounded-xl
                  ${colSpan === 2 ? 'md:col-span-2' : ''}
                  ${rowSpan === 2 ? 'md:row-span-2' : ''}
                `}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end justify-between p-4">
                  <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/90 font-light">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-equestrian-accent/60 transition-colors duration-300">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── See More / Full Gallery CTA ── */}
        {limit && (
          <div className="mt-14 md:mt-20 text-center">
            <p className="text-gray-400 text-sm md:text-base font-light mb-6">
              Want to see more moments captured at Arrant Equestrian Club?
            </p>
            <Link
              to="/gallery"
              className="group inline-flex items-center gap-3 border border-[#C9A96E]/60 bg-[#C9A96E]/10 hover:bg-[#C9A96E] hover:text-black px-8 py-4 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A96E] transition-all duration-500 rounded-full shadow-[0_0_20px_rgba(201,169,110,0.15)] hover:shadow-[0_0_30px_rgba(201,169,110,0.6)] transform hover:-translate-y-0.5 backdrop-blur-sm"
            >
              <span>See More Photos</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110] bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full p-2"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all z-[110] bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2.5"
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            aria-label="Previous image"
          >
            <ChevronLeft size={26} />
          </button>

          {/* Next */}
          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/60 hover:text-white transition-all z-[110] bg-black/20 hover:bg-black/40 backdrop-blur-sm rounded-full p-2.5"
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            aria-label="Next image"
          >
            <ChevronRight size={26} />
          </button>

          {/* Image */}
          <img
            src={images[lightboxIndex].src}
            alt={images[lightboxIndex].alt}
            className="max-w-[92vw] max-h-[88vh] object-contain cursor-default rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-[11px] uppercase tracking-[0.25em] font-light">
            {String(lightboxIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </div>
      )}
    </section>
  );
}

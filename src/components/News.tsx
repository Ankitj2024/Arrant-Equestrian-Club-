import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NEWS = [
  {
    category: 'News',
    title: 'Canadian Show Jumpers Compete in Barcelona',
    description: 'Tim Wilks competes at the Nations Cup Finals in Barcelona, representing Canada on the international stage.',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
  {
    category: 'Press Release',
    title: 'Announcing the Sale of Melvin VD Bisschop',
    description:
      'IN Showjumpers, the stable of Anna and Tim Wilks, announced the sale of their top horse Melvin VD Bisschop.',
    date: 'Sep 28, 2023',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
  },
  {
    category: 'News',
    title: 'Spain 2023 Season Highlights',
    description:
      "Another successful year in Spain with our upcoming stars at the Montemedio Winter Circuit in Vejer de la Frontera.",
    date: 'Mar 15, 2023',
    image: 'https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
  },
];

export default function News() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Header
      gsap.fromTo(
        '.news-header-text',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.news-header',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Cards stagger
      gsap.fromTo(
        '.news-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.news-grid',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="news" className="py-24 md:py-32 bg-equestrian-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="news-header flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h4 className="news-header-text text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
              Stay Up To Date
            </h4>
            <h2 className="news-header-text text-4xl md:text-5xl font-serif">Latest News & Updates</h2>
          </div>
          <div className="news-header-text hidden md:inline-block mt-8 md:mt-0">
            <Link
              to="/news"
              className="border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-equestrian-accent hover:border-equestrian-accent transition-colors"
            >
              See All Articles
            </Link>
          </div>
        </div>

        <div className="news-grid grid md:grid-cols-3 gap-8">
          {NEWS.map((article) => (
            <div key={article.title} className="news-card group cursor-pointer flex flex-col">
              <div className="relative h-64 overflow-hidden mb-6 w-full rounded-sm">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent group-hover:from-black/20 transition-all duration-500 z-10" />
                <img
                  src={article.image}
                  alt={article.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4 z-20 bg-equestrian-accent/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-widest text-white font-medium">
                  {article.category}
                </div>
              </div>
              <p className="text-equestrian-accent text-xs mb-3 uppercase tracking-wider">{article.date}</p>
              <h3 className="text-xl font-serif mb-3 group-hover:text-equestrian-accent transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{article.description}</p>
              <span className="inline-flex items-center text-xs uppercase tracking-widest text-white/70 group-hover:text-equestrian-accent transition-colors mt-auto w-max border-b border-transparent group-hover:border-equestrian-accent pb-1">
                Read Article
                <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link
            to="/news"
            className="inline-block border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-equestrian-accent hover:border-equestrian-accent transition-colors"
          >
            See All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}

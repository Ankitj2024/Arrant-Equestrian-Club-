import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!footerRef.current) return;

    const ctx = gsap.context(() => {
      // Footer columns stagger
      gsap.fromTo(
        '.footer-col',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Bottom bar
      gsap.fromTo(
        '.footer-bottom',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          scrollTrigger: {
            trigger: '.footer-bottom',
            start: 'top 95%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { scrollTo: { y: 0 }, duration: 1.5, ease: 'power3.inOut' });
    // Fallback for browsers
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer ref={footerRef} className="bg-black text-white pt-16 md:pt-24 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-20">
          <div className="footer-col sm:col-span-2">
            <Link to="/" className="text-2xl md:text-3xl font-serif font-semibold tracking-widest text-white uppercase block mb-4 md:mb-6">
              Arrant <span className="font-light text-equestrian-accent">Equestrian</span>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-6">
              Elevating equestrian excellence through expert horse riding training, from beginners to advanced, at Mohanlalganj, Lucknow. Admissions open.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full text-white/50 hover:text-white hover:border-equestrian-accent hover:bg-equestrian-accent/10 transition-all duration-300 text-sm">
                IG
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full text-white/50 hover:text-white hover:border-equestrian-accent hover:bg-equestrian-accent/10 transition-all duration-300 text-sm">
                FB
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full text-white/50 hover:text-white hover:border-equestrian-accent hover:bg-equestrian-accent/10 transition-all duration-300 text-sm">
                YT
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-6">Menu</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-equestrian-accent transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-equestrian-accent transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-sm text-gray-300 hover:text-equestrian-accent transition-colors">Team</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-equestrian-accent transition-colors">Contact Us</Link></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-equestrian-accent transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-equestrian-accent transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Arrant Equestrian Club. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <span>Mohanlalganj, Lucknow</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full text-white/50 hover:text-white hover:border-equestrian-accent hover:bg-equestrian-accent/10 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

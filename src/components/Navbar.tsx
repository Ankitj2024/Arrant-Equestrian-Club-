import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';

const LINKS = [
  { name: 'The Estate', path: '/estate' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navbar entrance animation
  useEffect(() => {
    if (!navRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 0.1, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.nav-link',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.5, ease: 'power2.out' }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-equestrian-dark/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}
      style={{ opacity: 0 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-semibold tracking-widest text-white uppercase">
          Arrant <span className="font-light text-equestrian-accent">Equestrian</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {LINKS.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-sm uppercase tracking-widest transition-colors relative group ${
                location.pathname === link.path ? 'text-equestrian-accent' : 'hover:text-equestrian-accent'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-equestrian-accent transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
          <div className="nav-link relative group">
            <Link
              to="/horses"
              className={`flex items-center space-x-1 text-sm uppercase tracking-widest transition-colors ${
                location.pathname === '/horses' ? 'text-equestrian-accent' : 'hover:text-equestrian-accent'
              }`}
            >
              <span>Horses</span>
              <ChevronDown size={14} className="transform group-hover:rotate-180 transition-transform duration-300" />
            </Link>
            <div className="absolute top-full right-0 mt-4 w-48 bg-equestrian-dark/95 backdrop-blur-md border border-white/10 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <Link to="/horses" className="block px-6 py-3 text-sm hover:bg-white/5 hover:text-equestrian-accent transition-colors">
                For Sale
              </Link>
              <Link to="/horses" className="block px-6 py-3 text-sm hover:bg-white/5 hover:text-equestrian-accent transition-colors">
                Sold
              </Link>
              <Link to="/horses" className="block px-6 py-3 text-sm text-equestrian-accent hover:bg-white/5 transition-colors">
                Show All
              </Link>
            </div>
          </div>
          {LINKS.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`nav-link text-sm uppercase tracking-widest transition-colors relative group ${
                location.pathname === link.path ? 'text-equestrian-accent' : 'hover:text-equestrian-accent'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-px bg-equestrian-accent transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-equestrian-dark/98 backdrop-blur-md border-t border-white/10 transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="flex flex-col px-6 py-4 space-y-4">
          {LINKS.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm uppercase tracking-widest ${
                location.pathname === link.path ? 'text-equestrian-accent' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/horses"
            className={`text-sm uppercase tracking-widest ${
              location.pathname === '/horses' ? 'text-equestrian-accent' : 'text-white/80 hover:text-white'
            }`}
            onClick={() => setMobileMenuOpen(false)}
          >
            Horses
          </Link>
          {LINKS.slice(2).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm uppercase tracking-widest ${
                location.pathname === link.path ? 'text-equestrian-accent' : 'text-white/80 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

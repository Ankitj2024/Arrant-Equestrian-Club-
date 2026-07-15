import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

const LINKS = [
  { name: 'The Estate', path: '/estate' },
  { name: 'Services', path: '/services' },
  { name: 'Team', path: '/team' },
  { name: 'News', path: '/news' },
  { name: 'Contact', path: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-equestrian-dark/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-semibold tracking-widest text-white uppercase">
          IN <span className="font-light">Showjumpers</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {LINKS.slice(0, 2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-sm uppercase tracking-widest hover:text-equestrian-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="relative group">
            <Link to="/horses" className="flex items-center space-x-1 text-sm uppercase tracking-widest hover:text-equestrian-accent transition-colors">
              <span>Horses</span>
              <ChevronDown size={14} />
            </Link>
            <div className="absolute top-full right-0 mt-4 w-48 bg-equestrian-dark border border-white/10 rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <Link to="/horses" className="block px-6 py-3 text-sm hover:bg-white/5">For Sale</Link>
              <Link to="/horses" className="block px-6 py-3 text-sm hover:bg-white/5">Sold</Link>
              <Link to="/horses" className="block px-6 py-3 text-sm hover:bg-white/5 text-equestrian-accent">Show All</Link>
            </div>
          </div>
          {LINKS.slice(2).map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className="text-sm uppercase tracking-widest hover:text-equestrian-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-equestrian-dark border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {LINKS.slice(0, 2).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-white/80 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/horses" className="text-sm uppercase tracking-widest text-white/80 hover:text-white" onClick={() => setMobileMenuOpen(false)}>
                Horses
              </Link>
              {LINKS.slice(2).map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm uppercase tracking-widest text-white/80 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

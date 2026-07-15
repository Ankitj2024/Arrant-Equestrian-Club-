import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image (Using a stunning placeholder for a showjumper) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 text-center px-6 mt-16">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-equestrian-accent text-sm md:text-base uppercase tracking-[0.3em] mb-4"
        >
          In Runs In The Blood
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8"
        >
          IN Showjumpers
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/services" className="inline-block border border-white/50 px-8 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
            Discover Our Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] uppercase tracking-widest text-white/50 mb-2">Scroll</span>
        <div className="w-px h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}

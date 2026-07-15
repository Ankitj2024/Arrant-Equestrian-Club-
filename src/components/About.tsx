import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section id="the-estate" className="py-24 md:py-32 bg-[#faf9f6] text-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">About Us</h4>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              Family Owned <br />& Operated
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The estate has been family owned and operated for generations and is an elite training ground for aspiring young riders, and decorated athletes and horses. Our team breeds, sources, develops and sells top young horses who go on to compete at the highest levels.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nestled in the English countryside, in Henley-on-Thames, Rosehill has been a haven for horses for generations. A stunning combination of old heritage and a new functional horse centric design, the farm is a paradigm of old english equestrianism. From sprawling green paddocks, to expansive cross country courses with iconic cottages sprinkled in between, it can feel like you're stepping into another period of time. The perfect escape from the motion and noise of urban London.
            </p>
            <Link to="/team" className="inline-block border-b border-gray-900 pb-1 text-sm uppercase tracking-widest hover:text-equestrian-accent hover:border-equestrian-accent transition-colors">
              Meet The Team
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full"
          >
            <img 
              src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
              alt="Rosehill Estate" 
              className="absolute inset-0 w-full h-full object-cover rounded-sm"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

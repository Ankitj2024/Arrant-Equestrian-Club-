import { motion } from 'motion/react';

const SERVICES = [
  {
    title: 'Horse Boarding',
    description: 'Indoor livery and roaming pastures in the heart of Henley-on-Thames.',
    image: 'https://images.unsplash.com/photo-1599385960416-2c9b4e34f89d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Horse Sales',
    description: 'We breed, source, develop and sell top young horses who go on to compete at the highest levels.',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80'
  },
  {
    title: 'Advanced Training',
    description: 'For riders who want to reach the top of the sport with elite coaching.',
    image: 'https://images.unsplash.com/photo-1522064104273-500b1d033a00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Intensive Bootcamp',
    description: 'Custom intensive training series for clients to elevate their riding to the next level.',
    image: 'https://images.unsplash.com/photo-1549447291-5374465b6f3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1738&q=80'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-equestrian-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4"
          >
            What We Offer
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif"
          >
            Our Services
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {SERVICES.map((service, index) => (
            <motion.div 
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden mb-6">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <h3 className="text-2xl font-serif mb-3 group-hover:text-equestrian-accent transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <span className="text-xs uppercase tracking-widest border-b border-white/30 pb-1 group-hover:border-equestrian-accent transition-colors">
                Learn More
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';

const FACILITIES = [
  {
    title: 'Indoor Stables',
    image: 'https://images.unsplash.com/photo-1596701258287-2efc2e0b5efd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Rolling Pastures',
    image: 'https://images.unsplash.com/photo-1518174415518-e3da3422079f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    title: 'Weekend Cottage',
    image: 'https://images.unsplash.com/photo-1504961812423-fb94e1d1f0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  }
];

export default function Facilities() {
  return (
    <section className="py-24 md:py-32 bg-[#faf9f6] text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">Explore Services</h4>
            <h2 className="text-4xl md:text-5xl font-serif">Estate & Facilities</h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FACILITIES.map((facility, index) => (
            <motion.div 
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer relative h-[500px] overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
              <img 
                src={facility.image} 
                alt={facility.title} 
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 text-white flex justify-between items-end">
                <h3 className="text-2xl font-serif">{facility.title}</h3>
                <span className="text-xs uppercase tracking-widest border-b border-transparent group-hover:border-white pb-1 transition-colors">
                  Learn More
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

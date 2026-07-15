import PageHeader from '../components/PageHeader';
import { motion } from 'motion/react';

const HORSES = [
  {
    name: 'Casper',
    age: '8 years',
    level: '1.40m',
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    status: 'For Sale'
  },
  {
    name: 'Luna',
    age: '6 years',
    level: '1.30m',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80',
    status: 'For Sale'
  },
  {
    name: 'Melvin VD Bisschop',
    age: '11 years',
    level: '1.60m',
    image: 'https://images.unsplash.com/photo-1518174415518-e3da3422079f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80',
    status: 'Sold'
  }
];

export default function Horses() {
  return (
    <>
      <PageHeader 
        title="Horses" 
        image="https://images.unsplash.com/photo-1504961812423-fb94e1d1f0ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80" 
      />
      <section className="py-24 bg-[#faf9f6] text-gray-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {HORSES.map((horse, index) => (
              <motion.div 
                key={horse.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group cursor-pointer bg-white border border-gray-100 shadow-sm"
              >
                <div className="relative h-72 overflow-hidden w-full">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={horse.image} 
                    alt={horse.name} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className={`absolute top-4 left-4 z-20 px-3 py-1 text-[10px] uppercase tracking-widest text-white backdrop-blur-md ${horse.status === 'Sold' ? 'bg-red-900/60' : 'bg-green-900/60'}`}>
                    {horse.status}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif mb-2">{horse.name}</h3>
                  <div className="text-gray-500 text-sm flex space-x-4 mb-4">
                    <span>{horse.age}</span>
                    <span>•</span>
                    <span>{horse.level}</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest border-b border-gray-900 pb-1 hover:text-equestrian-accent hover:border-equestrian-accent transition-colors">
                    View Details
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

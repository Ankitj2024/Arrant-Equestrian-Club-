import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const NEWS = [
  {
    category: 'News',
    title: 'Canadian Show Jumpers Compete in Barcelona',
    description: 'Tim Wilks competes at the Nations Cup Finals in Barcelona.',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1598974357801-cbca100e65d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    category: 'Press Releases',
    title: 'Tim Wilks announces the sale of Melvin VD Bisschop',
    description: 'IN Showjumpers, the stable of Anna and Tim Wilks, announced the sale of Melvin VD Bisschop.',
    date: 'Sep 28, 2023',
    image: 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1742&q=80'
  },
  {
    category: 'News',
    title: 'Spain 2023 in photos',
    description: 'Another successful year in Spain with INSHOWJUMPING\'s upcoming stars in Vejer de la Frontera at the Montemedio Winter Circuit.',
    date: 'Mar 15, 2023',
    image: 'https://images.unsplash.com/photo-1518174415518-e3da3422079f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  }
];

export default function News() {
  return (
    <section id="news" className="py-24 md:py-32 bg-equestrian-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">Stay Up To Date</h4>
            <h2 className="text-4xl md:text-5xl font-serif">Our latest News & Blog Posts</h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden md:inline-block mt-8 md:mt-0"
          >
            <Link 
              to="/news"
              className="border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-equestrian-accent hover:border-equestrian-accent transition-colors"
            >
              See All Articles
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {NEWS.map((article, index) => (
            <motion.div 
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative h-64 overflow-hidden mb-6 w-full">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                  {article.category}
                </div>
              </div>
              <p className="text-equestrian-accent text-xs mb-3">{article.date}</p>
              <h3 className="text-xl font-serif mb-3 group-hover:text-equestrian-accent transition-colors line-clamp-2">{article.title}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-3">{article.description}</p>
              <span className="text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors mt-auto inline-block border-b border-transparent group-hover:border-white pb-1 w-max">
                Read Article
              </span>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
            <Link to="/news" className="inline-block border-b border-white pb-1 text-sm uppercase tracking-widest hover:text-equestrian-accent hover:border-equestrian-accent transition-colors">
                See All Articles
            </Link>
        </div>
      </div>
    </section>
  );
}

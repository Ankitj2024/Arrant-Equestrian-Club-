import { motion } from 'motion/react';

const TEAM = [
  {
    name: 'Caroline Wilks',
    description: 'Caroline has been in horses for decades and has a passion for teaching all levels of students and sourcing and developing promising young horses',
    image: 'https://images.unsplash.com/photo-1579541592065-da8a15e49bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80'
  },
  {
    name: 'Anna Wilks',
    description: 'Gold medal winner at the European Championships for Juniors in eventing, Anna transitioned to showjumping and is an incredible rider and trainer.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1064&q=80'
  },
  {
    name: 'Tim Wilks',
    description: 'Canadian Nations Cup final rider, Tim has achieved a top ranking of 100 in the world and aspires to represent his team in the Olympics.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80'
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 bg-equestrian-dark text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Meet The Team
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif"
          >
            The Riders & Trainers
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {TEAM.map((member, index) => (
            <motion.div 
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group text-center"
            >
              <div className="relative w-64 h-64 mx-auto mb-8 overflow-hidden rounded-full border-4 border-white/5 group-hover:border-equestrian-accent/30 transition-colors duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h3 className="text-2xl font-serif mb-4 text-white group-hover:text-equestrian-accent transition-colors">{member.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block border border-white/30 px-10 py-5 text-sm uppercase tracking-widest hover:bg-white hover:text-equestrian-dark transition-colors duration-300 cursor-pointer"
          >
            Join the Team Today!
          </motion.div>
        </div>
      </div>
    </section>
  );
}

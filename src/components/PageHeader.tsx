import { motion } from 'motion/react';

interface PageHeaderProps {
  title: string;
  image: string;
}

export default function PageHeader({ title, image }: PageHeaderProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${image}")` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="relative z-10 text-center px-6 mt-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif text-white"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}

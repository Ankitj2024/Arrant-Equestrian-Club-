import { motion } from 'motion/react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#faf9f6] text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">Reach Out</h4>
          <h2 className="text-4xl md:text-5xl font-serif mb-8">Request More Information</h2>
          <p className="text-gray-600 mb-12">
            Whether you are looking for advanced training, leasing a horse, or interested in our sales, our team is ready to assist you.
          </p>

          <div className="space-y-6">
            <a href="tel:+447725216164" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full group-hover:bg-equestrian-dark group-hover:text-white transition-all">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                <p className="font-serif">+44 7725 216164</p>
              </div>
            </a>
            <a href="mailto:contact@inshowjumpers.com" className="flex items-center space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full group-hover:bg-equestrian-dark group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</p>
                <p className="font-serif">Email Us</p>
              </div>
            </a>
          </div>

          <div className="flex space-x-4 mt-12">
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Facebook size={20} /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white p-8 md:p-12 shadow-sm border border-gray-100 rounded-sm"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                <input type="text" className="w-full bg-gray-50 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-equestrian-dark transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                <input type="text" className="w-full bg-gray-50 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-equestrian-dark transition-colors" />
              </div>
            </div>
            
            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
              <input type="email" className="w-full bg-gray-50 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-equestrian-dark transition-colors" />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Inquiry Type</label>
              <select className="w-full bg-gray-50 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-equestrian-dark transition-colors appearance-none">
                <option>Select one...</option>
                <option>Learning to Ride</option>
                <option>Buying a Horse</option>
                <option>Advanced Training</option>
                <option>Bootcamp</option>
                <option>Careers</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">How did you hear about us?</label>
              <select className="w-full bg-gray-50 border-b border-gray-300 px-0 py-2 focus:outline-none focus:border-equestrian-dark transition-colors appearance-none">
                <option>Select one...</option>
                <option>Google Search</option>
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Friend / Referral</option>
                <option>Other</option>
              </select>
            </div>

            <button className="w-full bg-equestrian-dark text-white text-xs uppercase tracking-widest py-4 mt-4 hover:bg-black transition-colors">
              Submit Request
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

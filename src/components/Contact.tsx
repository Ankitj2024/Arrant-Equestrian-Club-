import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Instagram, Facebook, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Left info panel
      gsap.fromTo(
        '.contact-info-item',
        { opacity: 0, x: -40 },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Form fields reveal
      gsap.fromTo(
        '.form-field',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-32 bg-[#faf9f6] text-gray-900 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Contact Info */}
        <div className="contact-info">
          <h4 className="contact-info-item text-equestrian-accent text-xs font-semibold uppercase tracking-widest mb-4">
            Reach Out
          </h4>
          <h2 className="contact-info-item text-3xl md:text-5xl font-serif mb-6 md:mb-8">Request More Information</h2>
          <p className="contact-info-item text-gray-600 text-sm md:text-base mb-8 md:mb-12 leading-relaxed">
            Whether you are looking for advanced training, leasing a horse, or interested in our sales, our team is ready
            to assist you.
          </p>

          <div className="space-y-6">
            <a href="tel:+447725216164" className="contact-info-item flex items-center space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full group-hover:bg-equestrian-dark group-hover:text-white group-hover:border-equestrian-dark transition-all duration-300">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</p>
                <p className="font-serif">+44 7725 216164</p>
              </div>
            </a>
            <a href="mailto:contact@arrantequestrian.com" className="contact-info-item flex items-center space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full group-hover:bg-equestrian-dark group-hover:text-white group-hover:border-equestrian-dark transition-all duration-300">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Email</p>
                <p className="font-serif">contact@arrantequestrian.com</p>
              </div>
            </a>
            <div className="contact-info-item flex items-center space-x-4 group">
              <div className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded-full group-hover:bg-equestrian-dark group-hover:text-white group-hover:border-equestrian-dark transition-all duration-300">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">Location</p>
                <p className="font-serif">Rosehill Farm, Henley-on-Thames, UK</p>
              </div>
            </div>
          </div>

          <div className="contact-info-item flex space-x-4 mt-12">
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-400 hover:text-white hover:bg-equestrian-dark hover:border-equestrian-dark transition-all duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 flex items-center justify-center border border-gray-300 rounded-full text-gray-400 hover:text-white hover:bg-equestrian-dark hover:border-equestrian-dark transition-all duration-300"
            >
              <Facebook size={16} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-white p-6 md:p-12 shadow-lg border border-gray-100 rounded-sm">
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-serif mb-2">Thank You!</h3>
              <p className="text-gray-500">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="form-field grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border-b-2 border-gray-300 px-0 py-3 focus:outline-none focus:border-equestrian-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-gray-50 border-b-2 border-gray-300 px-0 py-3 focus:outline-none focus:border-equestrian-accent transition-colors"
                  />
                </div>
              </div>

              <div className="form-field">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-gray-50 border-b-2 border-gray-300 px-0 py-3 focus:outline-none focus:border-equestrian-accent transition-colors"
                />
              </div>

              <div className="form-field">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Inquiry Type</label>
                <select className="w-full bg-gray-50 border-b-2 border-gray-300 px-0 py-3 focus:outline-none focus:border-equestrian-accent transition-colors appearance-none">
                  <option>Select one...</option>
                  <option>Learning to Ride</option>
                  <option>Buying a Horse</option>
                  <option>Advanced Training</option>
                  <option>Bootcamp</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-field">
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-gray-50 border-b-2 border-gray-300 px-0 py-3 focus:outline-none focus:border-equestrian-accent transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>

              <button className="form-field w-full bg-equestrian-dark text-white text-xs uppercase tracking-widest py-4 mt-4 hover:bg-black transition-colors duration-300 rounded-sm">
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

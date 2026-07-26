import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Facilities from '../components/Facilities';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Team />
      <Services />
      <Facilities />

      {/* Contact CTA Section */}
      <section className="py-16 md:py-24 bg-equestrian-dark border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-2xl md:text-5xl font-serif text-white mb-4 md:mb-6">Want to get in touch?</h2>
          <p className="text-gray-400 mb-8 md:mb-10 text-sm md:text-base">
            Reach out to our team for inquiries about our services, boarding, or scheduling a visit.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-white/50 px-6 py-3 md:px-8 md:py-4 text-[10px] md:text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Testimonials />
    </>
  );
}

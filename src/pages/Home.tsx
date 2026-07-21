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
      <Services />
      <Facilities />
      <Team />
      <Testimonials />
      <Gallery />

      {/* Contact CTA Section */}
      <section className="py-24 bg-equestrian-dark border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Want to get in touch?</h2>
          <p className="text-gray-400 mb-10 text-sm md:text-base">
            Reach out to our team for inquiries about our services, boarding, or scheduling a visit.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-white/50 px-8 py-4 text-xs uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}

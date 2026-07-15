import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-equestrian-dark text-white pt-24 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <Link to="/" className="text-3xl font-serif font-semibold tracking-widest text-white uppercase block mb-6">
              IN <span className="font-light">Showjumpers</span>
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              Elevating equestrian excellence through world-class training, breeding, and sales at the historic Rosehill estate in Henley-on-Thames.
            </p>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-6">Menu</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-sm text-gray-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/estate" className="text-sm text-gray-300 hover:text-white transition-colors">The Estate</Link></li>
              <li><Link to="/team" className="text-sm text-gray-300 hover:text-white transition-colors">Team</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-white/50 mb-6">Connect</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} IN Showjumpers. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Powered by INSHOWJUMPERS</p>
        </div>
      </div>
    </footer>
  );
}

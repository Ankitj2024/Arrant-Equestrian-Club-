/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Estate from './pages/Estate';
import Services from './pages/Services';
import Horses from './pages/Horses';
import TeamPage from './pages/TeamPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-equestrian-dark font-sans text-gray-100 selection:bg-equestrian-accent selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/estate" element={<Estate />} />
          <Route path="/services" element={<Services />} />
          <Route path="/horses" element={<Horses />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

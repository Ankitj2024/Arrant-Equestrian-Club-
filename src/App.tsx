/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import ScrollToTop from './components/ScrollToTop';
import Preloader from './components/Preloader';
import SocialSidebar from './components/SocialSidebar';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div className="min-h-screen bg-equestrian-dark bg-pattern font-sans text-gray-100 selection:bg-equestrian-accent selection:text-white">
        <Navbar />
        <SocialSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

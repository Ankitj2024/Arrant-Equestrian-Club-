import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable smooth scrolling temporarily to prevent "black screen" void
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    
    // Restore smooth scrolling and refresh GSAP triggers for the new page layout
    setTimeout(() => {
      document.documentElement.style.scrollBehavior = '';
      ScrollTrigger.refresh();
    }, 50);
  }, [pathname]);

  return null;
}

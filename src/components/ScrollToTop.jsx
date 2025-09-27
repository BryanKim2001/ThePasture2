import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


export default function ScrollToTop({ smooth = false }) {
  const location = useLocation();

  useEffect(() => {
    const { pathname, hash } = location;

    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
      const t = setTimeout(() => {
        const el2 = document.getElementById(id);
        if (el2) el2.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
      return () => clearTimeout(t);
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? 'smooth' : 'auto',
    });
  }, [location.pathname, location.hash, smooth]);

  return null;
}

import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Youtube } from '../components/Icons';
import { motion, AnimatePresence } from 'framer-motion';

function navClasses(isActive) {
  return [
    'px-3 py-2 text-sm font-medium transition-colors',
    isActive ? 'text-brand' : 'text-ink/70 hover:text-ink'
  ].join(' ');
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close mobile menu when route changes
  useEffect(() => { setOpen(false); }, [pathname]);

  const nav = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/sermons', label: 'Sermons' },      // keep; you can remove if you’ve disabled route
    { to: '/ministries', label: 'Gatherings' },
    { to: '/connect', label: 'Contact' },
    { to: '/give', label: 'Give' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur border-b border-line">
      <div className="container flex items-center justify-between py-4">
        {/* Logo + tagline */}
        <Link to="/" className="inline-flex items-center gap-3">
          <img
            src="/pasture_logo.png"
            alt="The Pasture Logo"
            className="h-16 w-16 object-contain rounded-full bg-paper ring-1 ring-line"
          />
          <div className="leading-tight">
            <p className="text-xs text-ink/60">Remember · Reflect · Rest</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className={({ isActive }) => navClasses(isActive)}>
              {n.label}
            </NavLink>
          ))}

          <Link
            to="/visit"
            className="ml-2 inline-flex items-center rounded-full bg-brand text-white px-4 py-2 text-sm font-semibold hover:bg-brand-dark transition"
          >
            Plan a Visit
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl text-ink hover:bg-ink/5 transition"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-t border-line bg-paper/95 backdrop-blur"
          >
            <div className="container py-3">
              <div className="flex flex-col">
                {nav.map((n) => (
                  <NavLink
                    key={n.to}
                    to={n.to}
                    className={({ isActive }) =>
                      [
                        'py-3 text-sm border-b border-line/60 last:border-b-0',
                        isActive ? 'text-brand' : 'text-ink/80 hover:text-ink'
                      ].join(' ')
                    }
                  >
                    {n.label}
                  </NavLink>
                ))}

                <Link
                  to="/visit"
                  className="mt-3 inline-flex items-center justify-center rounded-full bg-brand text-white px-4 py-2 text-sm font-semibold hover:bg-brand-dark transition"
                >
                  Plan a Visit
                </Link>

                {/* Socials (optional but handy on mobile) */}
                <div className="flex items-center gap-5 mt-4">
                  <a
                    href="https://instagram.com/yourhandle"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="text-ink/70 hover:text-brand transition"
                  >
                    <Instagram size={22} />
                  </a>
                  <a
                    href="https://youtube.com/@yourchannel"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                    className="text-ink/70 hover:text-brand transition"
                  >
                    <Youtube size={24} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

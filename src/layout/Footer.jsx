import React from 'react';
import { Instagram, Youtube } from '../components/Icons';

const INSTAGRAM_URL = 'https://www.instagram.com/thepastureministry/';
const YOUTUBE_URL = 'https://www.youtube.com/@christcovenantfellowshippc8686';

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper/90">
      <div className="container grid gap-8 md:grid-cols-3 py-10">
        {/* Logo + tagline */}
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/pasture_logo_3.png"
              alt="The Pasture Logo"
              className="h-20 w-20 rounded-full object-contain bg-paper"
            />
            <div>
              <p className="font-semibold">The Pasture</p>
              <p className="text-sm text-ink/70">Remember, Reflect, and Rest in Christ</p>
            </div>
          </div>
        </div>

        {/* Address + times */}
        <div className="text-sm text-ink/80">
          <p>6633 Beach Blvd, Buena Park, CA 90621</p>
          <p>Sunday Service: 12:30 PM · Hesed Chapel Room 2</p>
        </div>

        {/* Social media (Connect With Us) */}
        <div className="flex flex-col gap-3 md:items-end">
          <p className="font-semibold text-ink">Connect With Us</p>
          <div className="flex items-center gap-4">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="text-ink/70 hover:text-brand transition"
              title="Instagram"
            >
              <Instagram size={22} />
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="text-ink/70 hover:text-brand transition"
              title="YouTube"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-ink/60 py-4">
        © {new Date().getFullYear()} The Pasture. All rights reserved.
      </div>
    </footer>
  );
}

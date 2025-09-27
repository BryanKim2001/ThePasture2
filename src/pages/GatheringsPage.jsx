import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import { MapPin, Clock } from 'lucide-react';
import PrettySeparator from '../components/PrettySeparator';
import Button from '../components/Button';

export default function GatheringsPage() {
  return (
    <div className="container py-16">
      <SectionHeader
        eyebrow="Gatherings"
        title="When We’re Gathering"
        subtitle="Less programs, more presence. Here’s when we meet together."
      />

      <div className="grid gap-8 max-w-5xl mx-auto">
        {/* Sunday Service */}
        <Reveal>
          <Card className="overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold">Sunday Worship Gathering</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><Clock size={18} className="text-brand" /><span>Sundays · 12:30 PM</span></div>
                <div className="flex items-center gap-2"><MapPin size={18} className="text-brand" /><span>Hesed Chapel Room 2</span></div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">What happens on Sundays</h4>
                  <p className="muted leading-relaxed">
                    Our Sunday service is centered on God and shaped by the richness of the <strong>Reformed tradition</strong>. Together we lift our voices in songs of praise, pray as one body, and hear Scripture proclaimed through <strong>Christ-centered preaching</strong>. Each week concludes with a shared meal, where fellowship naturally flows.

                    <br /><br />Want to know more about our Sundays?
                  </p>
                  <Button className="mt-3" onClick={() => window.location.assign('/visit')}>
                    Visitors Information
                  </Button>
                </div>
                <div className="aspect-[16/9] rounded-xl2 border border-line bg-white/70 grid place-items-center overflow-hidden">
                  <img src="/gatherings-sunday.jpg" alt="Sunday Gathering" className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.innerHTML = '<div class=\"text-sm text-ink/60\">Photo coming soon</div>'; }} />
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

       <PrettySeparator />

        {/* Friday Bible Study */}
        <Reveal delay={0.05}>
          <Card className="overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold">Friday Night Bible Study</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><Clock size={18} className="text-brand" /><span>Fridays · 7:30 PM</span></div>
                <div className="flex items-center gap-2"><MapPin size={18} className="text-brand" /><span>Hesed Chapel Room 3</span></div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">What happens on Fridays</h4>
                  <p className="muted leading-relaxed">
                    On Friday nights we gather for a deeper, more intellectual dive into our faith. These studies are designed to help us not only understand what we believe but also why we believe it—and how to faithfully defend our hope in Christ.

                    We're currently working through the <strong>Westminster Shorter Catechism</strong>, and each 90-minute session offers rich discussion, thoughtful questions, and opportunities to grow together in knowledge and love of God.
                  </p>
                </div>
                <div className="aspect-[16/9] rounded-xl2 border border-line bg-white/70 grid place-items-center overflow-hidden">
                  <img src="/gatherings-friday.jpg" alt="Friday Bible Study" className="h-full w-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement.innerHTML = '<div class=\"text-sm text-ink/60\">Photo coming soon</div>'; }} />
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}

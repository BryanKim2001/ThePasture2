import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import { MapPin, Clock } from 'lucide-react';
import PrettySeparator from '../components/PrettySeparator';

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
                <div className="flex items-center gap-2"><Clock size={18} className="text-brand"/><span>Sundays · 11:00 AM</span></div>
                <div className="flex items-center gap-2"><MapPin size={18} className="text-brand"/><span>1234 Hope St, Irvine, CA</span></div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">What happens on Sundays</h4>
                  <p className="muted leading-relaxed">
                    <em>Placeholder:</em> flow (welcome, worship, Scripture, prayer), childcare, coffee & fellowship, dress, parking tips, etc.
                  </p>
                </div>
                <div className="aspect-[16/9] rounded-xl2 border border-line bg-white/70 grid place-items-center overflow-hidden">
                  <img src="/gatherings-sunday.jpg" alt="Sunday Gathering" className="h-full w-full object-cover"
                       onError={(e)=>{ e.currentTarget.style.display='none'; e.currentTarget.parentElement.innerHTML='<div class=\"text-sm text-ink/60\">Photo coming soon</div>'; }}/>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>

        <PrettySeparator className='my-2'/>

        {/* Friday Bible Study */}
        <Reveal delay={0.05}>
          <Card className="overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold">Friday Night Bible Study</h3>
              <div className="mt-3 grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2"><Clock size={18} className="text-brand"/><span>Fridays · 7:30 PM</span></div>
                <div className="flex items-center gap-2"><MapPin size={18} className="text-brand"/><span>Education Hall · 1234 Hope St</span></div>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">What happens on Fridays</h4>
                  <p className="muted leading-relaxed">
                    <em>Placeholder:</em> meal/snacks, study format, discussion groups, prayer, who it’s for, how to join.
                  </p>
                </div>
                <div className="aspect-[16/9] rounded-xl2 border border-line bg-white/70 grid place-items-center overflow-hidden">
                  <img src="/gatherings-friday.jpg" alt="Friday Bible Study" className="h-full w-full object-cover"
                       onError={(e)=>{ e.currentTarget.style.display='none'; e.currentTarget.parentElement.innerHTML='<div class=\"text-sm text-ink/60\">Photo coming soon</div>'; }}/>
                </div>
              </div>
            </div>
          </Card>
        </Reveal>
      </div>
    </div>
  );
}

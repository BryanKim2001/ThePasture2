import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import PrettySeparator from '../components/PrettySeparator';

const VENMO_HANDLE = '@ILSHINCHURCH'; 

export default function GivePage() {
  return (
    <div className="container py-16 space-y-12">
      <SectionHeader
        eyebrow="Give"
        title="Give Joyfully"
        subtitle="Your generosity supports gospel ministry at The Pasture."
      />

      <Reveal>
        <Card className="p-8 max-w-2xl mx-auto text-center"> { /* TODO: Resize venmo image */}
          <img
            src="/venmo.png" 
            alt="Venmo Logo"
            className="mx-auto h-auto w-auto object-contain"
          />

          <p className="mt-3 text-xl font-semibold">{VENMO_HANDLE}</p>

          <p className="mt-7 text-ink/70"> 
            Your giving helps us invest in <strong>discipleship</strong> (teaching & training),
            <strong> missions</strong> (local & global partnerships), and <strong>fellowship</strong>
            (hospitality & care).
          </p>

        </Card>
      </Reveal>

      <PrettySeparator />

      <div className="text-center text-sm text-ink/70">
        Prefer checks or bank transfer? Contact us on the <a className="underline hover:text-brand" href="/connect">Contact</a> page.
      </div>
    </div>
  );
}

import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import PrettySeparator from '../components/PrettySeparator';

const VENMO_HANDLE = '@ThePastureChurch'; // TODO: update to your real Venmo tag

export default function GivePage() {
  return (
    <div className="container py-16 space-y-12">
      <SectionHeader
        eyebrow="Give"
        title="Give Joyfully"
        subtitle="Your generosity supports gospel ministry at The Pasture."
      />

      <Reveal>
        <Card className="p-6 max-w-xl mx-auto text-center">
          {/* Venmo Logo */}
          <img
            src="/venmo.png"  // place your downloaded Venmo logo here
            alt="Venmo Logo"
            className="mx-auto h-auto w-auto object-contain"
          />

          {/* Venmo Tag under logo */}
          <p className="mt-3 text-xl font-semibold">{VENMO_HANDLE}</p>

          {/* Giving Purpose */}
          <p className="mt-6 text-ink/80">
            Your giving helps us invest in <strong>discipleship</strong> (teaching & training),
            <strong> missions</strong> (local & global partnerships), and <strong>fellowship</strong>
            (hospitality & care).
          </p>

          {/* Verse */}
          <p className="mt-6 text-ink/70 italic">
            “Come to me, all who labor and are heavy laden, and I will give you rest.” — Matthew 11:28 (ESV)
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

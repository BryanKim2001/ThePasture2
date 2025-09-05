import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import PrettySeparator from '../components/PrettySeparator';
import { Instagram, Youtube } from '../components/Icons';

const INSTAGRAM_URL = 'https://instagram.com/yourhandle'; // TODO: replace
const YOUTUBE_URL = 'https://youtube.com/@yourchannel';   // TODO: replace

export default function VisitPage() {
  return (
    <div className="container py-16 space-y-12">
      <SectionHeader
        eyebrow="Plan Your Visit"
        title="We’d love to meet you"
        subtitle="Here’s what you can expect when you visit The Pasture."
      />

      {/* Service Details */}
      <Reveal>
        <Card className="p-6">
          <h3 className="text-2xl font-semibold">Service Details</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="space-y-2 text-sm">
              <p><strong>Location:</strong> 1234 Hope St, Irvine, CA</p>
              <p><strong>Times:</strong> Sundays · 11:00 AM</p>
              <p>
                <strong>What to expect:</strong> Casual, friendly, 60–75 minutes. Coffee and fellowship afterwards.
              </p>
              <p>
                <strong>Covenant Worship:</strong> We gather as one family in Christ—children, youth, and adults worshiping together.
              </p>
              <Button className="mt-3" onClick={() => window.location.assign('/connect')}>
                Ask a Question
              </Button>
            </div>

            <div className="md:col-span-2">
              <div className="aspect-video rounded-xl2 overflow-hidden ring-1 ring-line">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps?q=Irvine%20CA&output=embed"
                  title="Map"
                  loading="lazy"
                />
              </div>
              <p className="text-sm text-ink/70 mt-3">
                Parking available on-site. Greeters will meet you at the entrance.
              </p>
            </div>
          </div>
        </Card>
      </Reveal>

      <PrettySeparator />

      {/* Next Steps */}
      <section>
        <SectionHeader
          eyebrow="Next Steps"
          title="Before You Come"
          subtitle="See when we gather and connect with us online."
          align="center"
        />

        <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {/* Gatherings CTA */}
          <Reveal>
            <Card className="p-6 text-center">
              <h4 className="text-xl font-semibold">Join a Gathering</h4>
              <p className="muted mt-2">
                We keep things simple: Sunday worship and a Friday night Bible study.
              </p>
              <div className="mt-4">
                <Button onClick={() => window.location.assign('/gatherings')}>See Gatherings</Button>
              </div>
            </Card>
          </Reveal>

          {/* Social Media Icons */}
          <Reveal delay={0.05}>
            <Card className="p-6 text-center">
              <h4 className="text-xl font-semibold">See What We're Up To</h4>
              <p className="muted mt-2">Follow along during the week:</p>
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink/70 hover:text-brand transition"
                  aria-label="Instagram"
                >
                  <Instagram size={28} />
                </a>
                <a
                  href={YOUTUBE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink/70 hover:text-brand transition"
                  aria-label="YouTube"
                >
                  <Youtube size={30} />
                </a>
              </div>
            </Card>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

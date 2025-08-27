import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import Reveal from '../components/Reveal';

export default function VisitPage() {
  return (
    <div className="container py-16">
      <SectionHeader
        eyebrow="Plan Your Visit"
        title="We’d love to meet you"
        subtitle="Here’s what you can expect when you visit The Pasture."
      />

      <Reveal>
        <Card className="p-6">
          <h3 className="text-2xl font-semibold">Service Details</h3>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            <div className="space-y-2 text-sm">
              <p>
                <strong>Location:</strong> 6633 Beach Blvd, Buena Park, CA
              </p>
              <p>
                <strong>Time:</strong> Sundays · 12:30 PM
              </p>
              <p>
                <strong>What to expect:</strong> Casual, friendly, 60-75 minutes. Lunch and fellowship afterwards.
              </p>
              <Button
                className="mt-3"
                onClick={() => window.location.assign('/connect#contact')}
              >
                Ask a Question
              </Button>
            </div>
            <div className="md:col-span-2">
              <div className="aspect-video rounded-xl2 overflow-hidden ring-1 ring-line">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6626.01186165072!2d-118.00118642342863!3d33.8637380276589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cd5d1d367ee7%3A0x3cc82a1e04a0c217!2zSWwgU2hpbiBQcmVzYnl0ZXJpYW4gQ2h1cmNoKOydvOyLoOyepeuhnOq1kO2ajCk!5e0!3m2!1sen!2sus!4v1756255002926!5m2!1sen!2sus"
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
    </div>
  );
}

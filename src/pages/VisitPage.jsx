import React from 'react';

import SectionHeader from '../components/SectionHeader';

import Card from '../components/Card';

import Button from '../components/Button';

import Reveal from '../components/Reveal';

import PrettySeparator from '../components/PrettySeparator';

import { Instagram, Youtube } from '../components/Icons';


const INSTAGRAM_URL = 'https://www.instagram.com/thepastureministry/';
const YOUTUBE_URL = 'https://www.youtube.com/@christcovenantfellowshippc8686';



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

                            <p><strong>Location:</strong> 6633 Beach Blvd, Buena Park, CA</p>

                            <p><strong>Times:</strong> Sundays · 12:30 PM</p>

                            <p>

                                <strong>What to expect:</strong> Casual, friendly, 60–75 minutes. Coffee and fellowship afterwards.

                            </p>

                            <br />

                            <p>

                                <strong>Connect With Us:</strong> <br />Fill out our <a href="https://thepasture.churchcenter.com/people/forms/207027" target="_blank"><u>Connect Card</u></a> to let us know more about you!

                            </p>

                            <br />              <br />              <br />              <br />

                            <p>

                                Have a question?

                            </p>

                            <Button className="mt-3" onClick={() => window.location.assign('/connect')}>

                                Ask Us

                            </Button>

                        </div>



                        <div className="md:col-span-2">

                            <div className="aspect-video rounded-xl2 overflow-hidden ring-1 ring-line">

                                <iframe

                                    className="w-full h-full"

                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6625.9968651342215!2d-117.99837497490721!3d33.86393127003118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2cd5d1d367ee7%3A0x3cc82a1e04a0c217!2zSWwgU2hpbiBQcmVzYnl0ZXJpYW4gQ2h1cmNoKOydvOyLoOyepeuhnOq1kO2ajCk!5e0!3m2!1sen!2sus!4v1757203900344!5m2!1sen!2sus"

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
            <Card className="p-6 text-center h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold">Join a Gathering</h4>
                <p className="muted mt-2">
                 Learn about what our group does together.
                </p>
              </div>
              <div className="mt-6">
                <Button onClick={() => window.location.assign('/gatherings')}>
                  When We Meet
                </Button>
              </div>
            </Card>
          </Reveal>

          {/* Social Media */}
          <Reveal delay={0.05}>
            <Card className="p-6 text-center h-full flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-semibold">See What We're Up To</h4>
                <p className="muted mt-2">Follow us throughout the week:</p>
              </div>
              <div className="flex justify-center gap-6 mt-6">
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
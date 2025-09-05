import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Reveal from '../components/Reveal';
import PrettySeparator from '../components/PrettySeparator';

export default function AboutPage() {
  return (
    <div className="container py-16 space-y-20">
      {/* 1) WHO WE ARE */}
      <section className="text-center">
        <SectionHeader
          eyebrow="About Us"
          title="Who We Are"
          subtitle="To Remember, Reflect, and Rest in Christ"
          align="center"
        />

        {/* Story / Vision / Mission — clean editorial tiles with tiny photo accents (optional) */}
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          <Reveal>
            <Card className="p-6 h-full text-left">
              {/* tiny photo accent (optional) */}
              <div className="aspect-[3/2] overflow-hidden rounded-xl2 border border-line mb-4">
                <img
                  src="/about-story.jpg"        /* optional placeholder in /public */
                  alt="Our Story"
                  className="w-full h-full object-cover"
                  onError={(e)=>{ e.currentTarget.style.display='none' }}
                />
              </div>
              <h3 className="font-semibold text-lg">Our Story</h3>
              <p className="muted mt-2 leading-relaxed first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-2 first-letter:leading-none">
                Background of <strong>Ilshin Presbyterian Church</strong> & <strong>The Pasture</strong>.
                We’re a community rooted in the gospel, growing out of the heritage and ministry of Ilshin,
                and gathering as The Pasture to be a place of rest in Christ for our neighbors.
              </p>
            </Card>
          </Reveal>

          <Reveal delay={0.05}>
            <Card className="p-6 h-full text-left">
              <div className="aspect-[3/2] overflow-hidden rounded-xl2 border border-line mb-4">
                <img
                  src="/about-vision.jpg"       /* optional placeholder in /public */
                  alt="Vision"
                  className="w-full h-full object-cover"
                  onError={(e)=>{ e.currentTarget.style.display='none' }}
                />
              </div>
              <h3 className="font-semibold text-lg">Vision</h3>
              <p className="muted mt-2 leading-relaxed">
                We envision to <strong>Bring</strong> the lost, the weak, and the restless, to <strong>Build</strong> confidence
                and comfort in Christ, and to <strong>Become</strong> a culture of Christ to our <strong>Community</strong> and beyond.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li><span className="font-semibold">Bring</span> — invitation and hospitality</li>
                <li><span className="font-semibold">Build</span> — confidence and comfort in Christ</li>
                <li><span className="font-semibold">Become</span> — embody a gospel culture for our community</li>
              </ul>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-6 h-full text-left">
              <div className="aspect-[3/2] overflow-hidden rounded-xl2 border border-line mb-4">
                <img
                  src="/about-mission.jpg"      /* optional placeholder in /public */
                  alt="Mission"
                  className="w-full h-full object-cover"
                  onError={(e)=>{ e.currentTarget.style.display='none' }}
                />
              </div>
              <h3 className="font-semibold text-lg">Mission</h3>
              <p className="muted mt-2 leading-relaxed">
                Focusing on <strong>Worship</strong>, leading to <strong>Discipleship</strong>, producing <strong>Fellowship</strong>.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                <li><span className="font-semibold">Worship</span> — gather around Word and Sacrament</li>
                <li><span className="font-semibold">Discipleship</span> — grow through Scripture and prayer</li>
                <li><span className="font-semibold">Fellowship</span> — share life together in love</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </section>

      <PrettySeparator />


      {/* 2) OUR BELIEFS — single centered card + tasteful link button */}
      <section className="text-center">
        <SectionHeader
          eyebrow="Beliefs"
          title="Our Beliefs"
          subtitle="We belong to the Presbyterian Church in America (PCA)."
          align="center"
        />
        <Reveal>
          <Card className="p-8 max-w-3xl mx-auto text-left">
            <p className="leading-relaxed muted">
              Our denomination is the PCA, whose beliefs are summarized in the Westminster Confession of Faith and Catechisms.
              We gladly confess Christ, submit to Scripture, and seek to live out the gospel together.
            </p>
            <div className="mt-5">
              <a
                href="https://www.pcaac.org/resources/wcf/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-line bg-white px-4 py-2 text-sm font-medium hover:bg-ink/5 transition"
              >
                Read the Westminster Standards →
              </a>
            </div>
          </Card>
        </Reveal>
      </section>

      <PrettySeparator />


      {/* 3) OUR PASTOR — soft gradient panel with pull-quote line */}
      <section className="text-center">
        <SectionHeader
          eyebrow="Leadership"
          title="Our Pastor"
          subtitle="Meet Issac Oh"
          align="center"
        />

        <Reveal>
          <Card className="p-6 md:p-8 max-w-4xl mx-auto bg-gradient-to-br from-white to-brand-light/20">
            <div className="grid gap-6 md:grid-cols-3 items-start">
              <div className="md:col-span-1 flex justify-center">
                <img
                  src="/pastor_photo.jpg"             
                  alt="Rev. Issac Oh"
                  className="h-48 w-48 rounded-full object-cover ring-2 ring-line"
                />
              </div>
              <div className="md:col-span-2 text-left">
                <p className="leading-relaxed muted">
                  Issac Oh was born and raised in Southern California, spending his early years in Orange,
                  Los Angeles, and San Bernardino Counties. After high school, he moved to Las Vegas, Nevada,
                  where he pursued a career in the hospitality and entertainment industry for nearly a decade.
                  During that time, the Lord called him into ministry, leading him back to California to
                  continue his education and prepare for pastoral service.
                </p>
                <p className="leading-relaxed muted mt-4 border-l-2 border-brand/40 pl-4">
                  Issac earned a B.A. in Christian Ministries from The Master’s University and went on to
                  receive his Master of Divinity from Westminster Seminary California. He is now an ordained
                  minister in the Presbyterian Church in America (PCA) and joyfully serves Christ and His
                  church through preaching, teaching, and shepherding God’s people.
                </p>
              </div>
            </div>
          </Card>
        </Reveal>
      </section>
    </div>
  );
}

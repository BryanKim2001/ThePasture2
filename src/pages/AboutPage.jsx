import React from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Reveal from '../components/Reveal';

export default function AboutPage() {
  return (
    <div className="container py-16 space-y-20">
      {/* Who We Are + Staff */}
      <section className="text-center">
        <SectionHeader
          eyebrow="Who We Are"
          title="Meet Our Staff"
          subtitle="A community of believers finding rest in Jesus together."
          align="center"
        />

        <Reveal>
          <p className="muted max-w-2xl mx-auto leading-relaxed">
            We are a small, predominantly Korean/Asian community of believers who
            gather to worship, share meals, pray, and serve together. Our heart
            is to create a place of rest where people can encounter Christ and
            be part of a spiritual family.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4 max-w-5xl mx-auto">
          {[
            { name: 'Rev. Issac Oh', role: 'Lead Pastor', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop' },
            { name: 'Priscilla An', role: 'Leader', img: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop' },
            { name: 'Eliana Kim', role: 'Leader', img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop' },
            { name: 'Bryan Kim', role: 'Leader', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop' }
          ].map((s, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <Card className="overflow-hidden text-center p-6">
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-40 w-40 mx-auto rounded-full object-cover ring-2 ring-line"
                />
                <div className="mt-4">
                  <h4 className="font-semibold">{s.name}</h4>
                  <p className="text-sm text-ink/60">{s.role}</p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Separator */}
      <div className="border-t border-line mx-auto max-w-4xl" />

      {/* What We Believe */}
      <section className="text-center">
        <SectionHeader
          eyebrow="Beliefs"
          title="What We Believe"
          subtitle="Our faith is rooted in Scripture and centered on Christ."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
          {[
            {
              title: 'God',
              desc: 'We believe in one God, eternally existing in three persons: Father, Son, and Holy Spirit.',
            },
            {
              title: 'Scripture',
              desc: 'We believe the Bible is God’s Word—true, inspired, and authoritative for faith and life.',
            },
            {
              title: 'Salvation',
              desc: 'We believe salvation is by grace alone, through faith alone, in Christ alone.',
            },
            {
              title: 'The Church',
              desc: 'We believe the Church is the body of Christ, called to worship, discipleship, and mission.',
            },
            {
              title: 'The Sacraments',
              desc: 'We practice baptism and the Lord’s Supper as visible signs of God’s covenant promises.',
            },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <Card className="p-6 text-center">
                <h4 className="font-semibold text-lg">{b.title}</h4>
                <p className="muted mt-2 leading-relaxed">{b.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}

import React from 'react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SermonEmbed from '../components/SermonEmbed'
import MasonryGallery from '../components/MasonryGallery'
import PrettySeparator from '../components/PrettySeparator';

export default function HomePage() {
    return (
        <>
            <Hero onPlan={() => window.location.assign('/connect#visit')} />


            <section className="container py-16">
                <SectionHeader  /* TODO: Fix */
                    eyebrow="Welcome to The Pasture"
                    title="Bring, Build, and Become"  /* TODO: change font to eyebrow */
                    subtitle="BRING the lost, weak, and the restless.
                     BUILD confidence and comfort in Christ.
                     BECOME a culture of Christ to our community and beyond."
                />
                <div className="grid gap-6 md:grid-cols-3">
                    {[{
                        title: 'What We Believe', img: '/pasture_pnp.jpg', linkTo: '/about'
                    }, {
                        title: 'Connect With Us', img: '/pasture_picnic.jpg', linkTo: '/ministries'
                    }, {
                        title: 'Leave Us A Note', img: '/pasture_retreat.jpg', linkTo: '/connect'
                    }].map((c, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <Card>
                                <div className="h-56 overflow-hidden rounded-t-xl2">
                                    <img src={c.img} alt="feature" className="h-full w-full object-cover hover:scale-[1.02] transition-transform" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold">{c.title}</h3>
                                    <Button variant="ghost" className="mt-3" onClick={() => window.location.assign(c.linkTo)}>Learn more →</Button>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>
            <PrettySeparator />
            {/* 
            <section className="container py-12">
                <SectionHeader eyebrow="This Week" title="Latest Sermon" subtitle="Watch the most recent message or browse the archive." />
                <Reveal>
                    <SermonEmbed id="dQw4w9WgXcQ" title="Sermon" />
                </Reveal>
            </section> */}


            <section className="container py-16">
                <SectionHeader eyebrow="Life Together" title="Moments from our community" subtitle="Meals, prayer, worship, and rest." />
                <MasonryGallery images={[
                    '/pasture_beach.JPG',
                    '/pasture_ordination3.jpg',
                    '/pasture_retreat_prayer.jpg',
                    '/pasture_retreat_ian.jpg',
                    '/pasture_aura_farming.JPG'
                ]} />
            </section>

            <PrettySeparator />
            <section className="container py-12">
                <Card className="p-8 text-center">
                    <h3 className="text-2xl font-semibold">Plan your first visit in 60 seconds</h3>
                    <p className="muted mt-2">Let us know you're coming—parking, greeting, and coffee are on us.</p>
                    <Button className="mt-5" onClick={() => window.location.assign('/visit')}>
                        Plan a Visit
                    </Button>

                </Card>
            </section>
        </>
    )
}
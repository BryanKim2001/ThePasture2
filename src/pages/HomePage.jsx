import React from 'react'
import Hero from '../components/Hero'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import SermonEmbed from '../components/SermonEmbed'
import MasonryGallery from '../components/MasonryGallery'


export default function HomePage() {
    return (
        <>
            <Hero onPlan={() => window.location.assign('/connect#visit')} />


            <section className="container py-16">
                <SectionHeader
                    eyebrow="Welcome"
                    title="Remember Christ, Reflect Christ, Rest in Christ"
                    subtitle="Join a small, welcoming community that practices rest together—around the Word, prayer, and shared meals."
                />
                <div className="grid gap-6 md:grid-cols-3">
                    {[{
                        title: 'Meet Our Pastors', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop'
                    }, {
                        title: 'What We Believe', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
                    }, {
                        title: 'Come Fellowship', img: 'https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1200&auto=format&fit=crop'
                    }].map((c, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <Card>
                                <div className="h-56 overflow-hidden rounded-t-xl2">
                                    <img src={c.img} alt="feature" className="h-full w-full object-cover hover:scale-[1.02] transition-transform" />
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-semibold">{c.title}</h3>
                                    <Button variant="ghost" className="mt-3">Learn more →</Button>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </section>


            <section className="container py-12">
                <SectionHeader eyebrow="This Week" title="Latest Sermon" subtitle="Watch the most recent message or browse the archive." />
                <Reveal>
                    <SermonEmbed id="dQw4w9WgXcQ" title="Sermon" />
                </Reveal>
            </section>


            <section className="container py-16">
                <SectionHeader eyebrow="Life Together" title="Moments from our community" subtitle="Meals, prayer, worship, and rest." />
                <MasonryGallery images={[
                    'https://images.unsplash.com/photo-1521335629791-ce4aec67dd53?q=80&w=1400&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1516542076529-1ea3854896e1?q=80&w=1400&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1400&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1521335629791-6f1c7c3d7c5f?q=80&w=1400&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop',
                    'https://images.unsplash.com/photo-1525161494435-0f4d6e6ac0b3?q=80&w=1400&auto=format&fit=crop',
                ]} />
            </section>


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
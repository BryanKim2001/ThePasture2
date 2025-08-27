import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Reveal from '../components/Reveal'


export default function AboutPage() {
    return (
        <div className="container py-16">
            <SectionHeader eyebrow="About Us" title="Who We Are" subtitle="A small Korean/Asian community finding rest in Jesus together." />


            <div className="grid gap-8 md:grid-cols-2 items-start">
                <Reveal>
                    <Card className="p-6">
                        <h3 className="text-xl font-semibold">Our Beliefs</h3>
                        <p className="muted mt-2 leading-relaxed">We believe the Bible is God’s Word and that salvation is by grace through faith in Jesus. We exist to remember the gospel, reflect His character, and rest in His finished work.</p>
                    </Card>
                </Reveal>
                <Reveal delay={0.05}>
                    <Card className="p-6">
                        <h3 className="text-xl font-semibold">Who We Are</h3>
                        <p className="muted mt-2 leading-relaxed">We’re a 15-person, predominantly Korean group that gathers for worship, meals, small groups, and mission. Whether new to faith or returning, there’s space for you here.</p>
                    </Card>
                </Reveal>
            </div>


            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {["Pastor / Staff", "Elders & Deacons", "Ministry Leads"].map((t, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                        <Card className="p-6">
                            <h4 className="font-semibold text-lg">{t}</h4>
                            <p className="muted mt-2 leading-relaxed">Our leaders serve by praying, teaching, and caring for the body with humility.</p>
                        </Card>
                    </Reveal>
                ))}
            </div>


            <div className="mt-12">
                <SectionHeader eyebrow="Stories" title="What people say" />
                <div className="grid md:grid-cols-3 gap-6">
                    {["I found rest here.", "It feels like family.", "Jesus keeps meeting me in this community."].map((q, i) => (
                        <Reveal key={i} delay={i * 0.05}>
                            <Card className="p-6">
                                <p className="italic">“{q}”</p>
                                <p className="mt-2 text-sm text-ink/60">— Member</p>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
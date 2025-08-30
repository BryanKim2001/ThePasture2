import React from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { Church, Users, Heart, BookOpen } from '../components/Icons'


const MINISTRIES = [
    {
        name: 'English Ministry (EM)',
        img: '/pasture_ordination.jpg',
        desc: 'Our primary gathering for worship and teaching in English. All ages welcome—come as you are and meet Jesus here.',
        icon: Church,
    },
    {
        name: 'Men’s Small Group',
        img: '/dudes.JPG',
        desc: 'Brotherhood around Scripture and prayer. We pursue integrity, accountability, and servant leadership together.',
        icon: Users,
    },
    {
        name: 'Women’s Small Group',
        img: '/pasture_beach2.JPG',
        desc: 'A safe, encouraging space to share life, study the Word, and pray for one another through every season.',
        icon: Heart,
    },
    {
        name: 'Missions',
        img: 'https://images.unsplash.com/photo-1525161494435-0f4d6e6ac0b3?q=80&w=1600&auto=format&fit=crop',
        desc: 'We partner locally and globally—including Thailand—to proclaim the gospel, serve the vulnerable, and make disciples.',
        icon: BookOpen,
    },
]


export default function MinistriesPage() {
    return (
        <div className="container py-16">
            <SectionHeader eyebrow="Ministries" title="Find Your Place to Grow" subtitle="Four ministries, one mission: to follow Jesus together." />
            <div className="grid gap-8">
                {MINISTRIES.map((m, i) => (
                    <Reveal key={i} delay={i * 0.05}>
                        <Card className="overflow-hidden">
                            <div className={`grid md:grid-cols-5 ${i % 2 ? '' : ''}`}>
                                <div className="md:col-span-2 h-60 md:h-80">
                                    <img src={m.img} alt={m.name} className="h-full w-full object-cover" />
                                </div>
                                <div className="md:col-span-3 p-6">
                                    <div className="flex items-center gap-2 text-brand">
                                        <m.icon size={20} />
                                        <h3 className="text-xl font-semibold">{m.name}</h3>
                                    </div>
                                    <p className="mt-3 muted leading-relaxed">{m.desc}</p>
                                </div>
                            </div>
                        </Card>
                    </Reveal>
                ))}
            </div>
        </div>
    )
}
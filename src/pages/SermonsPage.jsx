import React, { useMemo, useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import SermonEmbed from '../components/SermonEmbed'
import Reveal from '../components/Reveal'


const SERMONS = [
    { id: 'dQw4w9WgXcQ', title: 'Abide in Christ', passage: 'John 15:1–11', preacher: 'Rev. Jane Doe', date: '2024-11-02', series: 'Life in the Vine' },
    { id: 'Zi_XLOBDo_Y', title: 'Grace That Restores', passage: 'Ephesians 2:1–10', preacher: 'Rev. John Park', date: '2024-10-27', series: 'By Grace' },
    { id: '9bZkp7q19f0', title: 'The Good Shepherd', passage: 'Psalm 23', preacher: 'Rev. Jane Doe', date: '2024-10-20', series: 'Shepherd' }
]


export default function SermonsPage() {
    const [q, setQ] = useState('')
    const filtered = useMemo(() => SERMONS.filter(s => (s.title + s.passage + s.preacher + s.series).toLowerCase().includes(q.toLowerCase())), [q])


    return (
        <div className="container py-16">
            <SectionHeader eyebrow="Sermons" title="Weekly Messages" subtitle="Catch up on the latest sermon or browse the archive." />


            <Reveal>
                <div className="grid lg:grid-cols-2 gap-6">
                    <SermonEmbed id={SERMONS[0].id} title={SERMONS[0].title} />
                    <Card className="p-6">
                        <h3 className="text-2xl font-semibold">{SERMONS[0].title}</h3>
                        <p className="muted mt-1">Passage: {SERMONS[0].passage}</p>
                        <p className="muted mt-4 leading-relaxed">Abiding in Christ bears lasting fruit. This week we explore what it means to remain in Jesus and experience His joy.</p>
                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                            <Card className="p-4"><p className="text-sm muted">Preacher: {SERMONS[0].preacher}</p></Card>
                            <Card className="p-4"><p className="text-sm muted">Series: {SERMONS[0].series}</p></Card>
                        </div>
                    </Card>
                </div>
            </Reveal>


            <div className="mt-12">
                <div className="flex items-center justify-between gap-3">
                    <h4 className="text-xl font-semibold">Archive</h4>
                    <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search…" className="rounded-full border border-line px-4 py-2 text-sm bg-white" />
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-4">
                    {filtered.map((s, i) => (
                        <Reveal key={s.id} delay={i * 0.03}>
                            <Card>
                                <div className="aspect-video overflow-hidden rounded-t-xl2">
                                    <img src={`https://i.ytimg.com/vi/${s.id}/maxresdefault.jpg`} alt={s.title} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <h5 className="font-semibold">{s.title}</h5>
                                    <p className="text-sm muted">{s.passage}</p>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
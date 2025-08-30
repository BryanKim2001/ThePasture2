import React, { useState } from 'react'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const prayerSchema = z.object({
    name: z.string().optional(),
    email: z.string().email('Please enter a valid email.').optional(),
    request: z.string().min(5, 'Please share a few words.').max(1000)
})


const contactSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    subject: z.string().min(2),
    message: z.string().min(5)
})

export default function ConnectPage() {
    const [prayerSuccess, setPrayerSuccess] = useState(false)
    const [contactSuccess, setContactSuccess] = useState(false)


    const prayerForm = useForm({ resolver: zodResolver(prayerSchema), defaultValues: { name: '', email: '', request: '' } })
    const contactForm = useForm({ resolver: zodResolver(contactSchema), defaultValues: { name: '', email: '', subject: '', message: '' } })


    const submitPrayer = (data) => { setPrayerSuccess(true) /* TODO: send to email/db */ }
    const submitContact = (data) => { setContactSuccess(true) /* TODO: send to email/db */ }

    return (
        <div className="container py-16">
            <SectionHeader eyebrow="Connect" title="Take Your Next Step" subtitle="Request prayer, explore membership and baptism, give, or contact us." />

            <div id="prayer" className="mt-12 scroll-mt-24">
                <Reveal>
                    <Card className="p-6">
                        <h3 className="text-2xl font-semibold">Prayer Request</h3>
                        {!prayerSuccess ? (
                            <form className="mt-4 grid md:grid-cols-2 gap-4" onSubmit={prayerForm.handleSubmit(submitPrayer)}>
                                <input {...prayerForm.register('name')} placeholder="Your Name (optional)" className="rounded-xl border border-line bg-white px-4 py-2" />
                                <input {...prayerForm.register('email')} placeholder="Email (optional)" className="rounded-xl border border-line bg-white px-4 py-2" />
                                <div className="md:col-span-2">
                                    <textarea {...prayerForm.register('request')} rows={4} placeholder="How can we pray for you?" className="w-full rounded-xl border border-line bg-white px-4 py-3" />
                                    {prayerForm.formState.errors.request && <p className="text-sm text-red-600 mt-1">{prayerForm.formState.errors.request.message}</p>}
                                </div>
                                <div className="md:col-span-2"><Button type="submit">Submit Request</Button></div>
                            </form>
                        ) : (
                            <div className="mt-4 text-green-700">Thanks for sharing—our team will be praying for you. 💛</div>
                        )}
                    </Card>
                </Reveal>
            </div>

                        
            <div id="membership" className="mt-12 scroll-mt-24">
                <Reveal>
                    <Card className="p-6">
                        <h3 className="text-2xl font-semibold">Membership & Baptism</h3>
                        <p className="muted mt-2">Learn about covenant membership and baptism. We host a two‑week class covering our beliefs and vision.</p>
                        <div className="mt-4 flex gap-3 flex-wrap">
                            <Button onClick={() => window.location.assign('#contact')}>Ask About Membership</Button>
                            <Button variant="ghost" onClick={() => window.location.assign('#contact')}>Ask About Baptism</Button>
                        </div>
                    </Card>
                </Reveal>
            </div>


            <div id="give" className="mt-12 scroll-mt-24">
                <Reveal>
                    <Card className="p-6">
                        <h3 className="text-2xl font-semibold">Give</h3>
                        <p className="muted mt-2">We give as an act of worship and trust in God’s provision.</p>
                        <Button className="mt-4" onClick={(e) => e.preventDefault()}>Open Giving Portal</Button>
                    </Card>
                </Reveal>
            </div>


            <div id="contact" className="mt-12 scroll-mt-24">
                <Reveal>
                    <Card className="p-6">
                        <h3 className="text-2xl font-semibold">Contact Us</h3>
                        {!contactSuccess ? (
                            <form className="mt-4 grid md:grid-cols-2 gap-4" onSubmit={contactForm.handleSubmit(submitContact)}>
                                <input {...contactForm.register('name')} placeholder="Full Name" className="rounded-xl border border-line bg-white px-4 py-2" />
                                <input {...contactForm.register('email')} placeholder="Email" className="rounded-xl border border-line bg-white px-4 py-2" />
                                <input {...contactForm.register('subject')} placeholder="Subject" className="rounded-xl border border-line bg-white px-4 py-2 md:col-span-2" />
                                <textarea {...contactForm.register('message')} rows={5} placeholder="Message" className="w-full rounded-xl border border-line bg-white px-4 py-3 md:col-span-2" />
                                <div className="md:col-span-2 flex items-center gap-3">
                                    <Button type="submit">Send Message</Button>
                                    <p className="text-xs text-ink/60">We typically reply within 24–48 hours.</p>
                                </div>
                            </form>
                        ) : (
                            <div className="mt-4 text-green-700">Thanks! We’ll be in touch soon.</div>
                        )}
                    </Card>
                </Reveal>
            </div>
        </div>
    )
}
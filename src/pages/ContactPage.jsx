import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'


export default function ContactPage() {
    return (
        <div className="bg-sand-50 min-h-screen">
            <SiteHeader />
            <Container className="py-16">
                <SectionHeader eyebrow="Reach Out" title="Contact Us" subtitle="We'd love to hear from you." />
                <Card className="p-6 mt-6">
                    <form className="grid gap-4 max-w-xl">
                        <label className="grid gap-1">
                            <span className="text-sm text-sepia-700">Name</span>
                            <input className="rounded-xl border border-sand-200 bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400/40" />
                        </label>
                        <label className="grid gap-1">
                            <span className="text-sm text-sepia-700">Email</span>
                            <input type="email" className="rounded-xl border border-sand-200 bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400/40" />
                        </label>
                        <label className="grid gap-1">
                            <span className="text-sm text-sepia-700">Message</span>
                            <textarea rows="5" className="rounded-xl border border-sand-200 bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-brand-400/40" />
                        </label>
                        <button className="mt-2 inline-flex items-center justify-center rounded-full bg-sepia-800 text-sand-50 px-6 py-2 font-semibold hover:bg-sepia-700">Send</button>
                    </form>
                </Card>
            </Container>
            <Footer />
        </div>
    )
}
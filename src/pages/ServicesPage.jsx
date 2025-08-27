import SiteHeader from '../components/SiteHeader'
import Footer from '../components/Footer'
import Container from '../components/Container'
import SectionHeader from '../components/SectionHeader'
import Card from '../components/Card'


export default function ServicesPage() {
    return (
        <div className="bg-sand-50 min-h-screen">
            <SiteHeader />
            <Container className="py-16">
                <SectionHeader eyebrow="Gatherings" title="Service Times" subtitle="Join us weekly." />
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <Card className="p-6">
                        <h3 className="font-semibold text-sepia-800">Sunday Service</h3>
                        <p className="text-sepia-700">11:00 AM – 12:30 PM</p>
                    </Card>
                    <Card className="p-6">
                        <h3 className="font-semibold text-sepia-800">Prayer Night</h3>
                        <p className="text-sepia-700">Wednesdays 7:30 PM</p>
                    </Card>
                </div>
            </Container>
            <Footer />
        </div>
    )
}
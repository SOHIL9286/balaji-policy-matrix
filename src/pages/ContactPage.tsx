import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import ContactForm from '@/components/contact/ContactForm'
import Map from '@/components/contact/Map'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

export function ContactPage() {
  return (
    <>
      <Seo title={`Contact — ${siteConfig.title}`} description={`Contact ${siteConfig.name}`} />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold">Get in touch</h1>
            <p className="mt-3 text-muted">We're here to help — send us a message or reach out directly.</p>
          </header>

          <div className="grid gap-8 md:grid-cols-2">
            <ContactForm />
            <aside className="space-y-6">
              <div className="glass-panel p-6 rounded-2xl">
                <h3 className="text-xl font-semibold">Office</h3>
                <p className="mt-2 text-muted">{siteConfig.name}</p>
                <p className="mt-2 text-muted">Email: {siteConfig.contact.email}</p>
                <p className="mt-2 text-muted">Phone: {siteConfig.contact.phone}</p>
                <div className="mt-4">
                  <a className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg mr-2" href={`https://wa.me/${siteConfig.contact.phone.replace(/\D/g, '')}`}>WhatsApp</a>
                  <a className="inline-block px-4 py-2 bg-brand-primary text-white rounded-lg" href={`tel:${siteConfig.contact.phone}`}>Call</a>
                </div>
              </div>
              <div>
                <Map address={siteConfig.contact.address} lat={siteConfig.contact.lat} lng={siteConfig.contact.lng} />
              </div>
            </aside>
          </div>
        </div>
      </main>
      <WhatsAppButton />
    </>
  )
}

export default ContactPage

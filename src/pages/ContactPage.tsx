import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import ContactForm from '@/components/contact/ContactForm'
import Map from '@/components/contact/Map'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { motion } from 'framer-motion'
import { Building, Mail, Phone, MapPin } from 'lucide-react'

export function ContactPage() {
  return (
    <>
      <Seo title={`Contact — ${siteConfig.title}`} description={`Contact ${siteConfig.name}`} />
      <main className="py-24 hero-gradient-bg relative">
        <div className="animated-hero">
          <div className="float-orb orb-large" style={{ left: '-8%', top: '-12%' }} />
          <div className="float-orb orb-medium" style={{ right: '6%', top: '-6%', opacity: 0.5 }} />
          <div className="float-orb orb-small" style={{ left: '50%', bottom: '8%', opacity: 0.4 }} />
          <div className="light-beam" style={{ transform: 'rotate(10deg)' }} />
          <div className="particle-layer">
            <div className="particle" style={{ left: '12%', top: '30%' }} />
            <div className="particle" style={{ left: '40%', top: '60%' }} />
            <div className="particle" style={{ left: '70%', top: '22%' }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative">
          <header className="mb-12 text-center relative">
            <div className="absolute -top-20 left-6 w-48 h-48 rounded-full bg-gradient-to-br from-brand-secondary/30 to-blue-900/20 blur-3xl opacity-60 pointer-events-none" />
            <div className="absolute -top-28 right-6 w-36 h-36 rounded-full bg-gradient-to-br from-white/20 to-brand-primary/10 blur-3xl opacity-40 pointer-events-none" />

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white">Get in <span className="text-gradient-brand">touch</span></h1>
              <p className="mt-4 text-white/80 max-w-2xl mx-auto">We're here to help — send us a message or reach out directly.</p>
              <div className="absolute -inset-y-8 -inset-x-12 -z-10">
                <div className="float-orb orb-small" style={{ left: '10%', top: '10%', opacity: 0.12 }} />
              </div>
            </motion.div>
          </header>

          <div className="grid gap-8 md:grid-cols-2 items-start relative">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
              <div className="card-3d p-6">
                <ContactForm />
              </div>
            </motion.div>

            <aside className="space-y-6">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.12 }} viewport={{ once: true }} className="card-3d p-6">
                <h3 className="text-xl font-semibold">Office</h3>
                <p className="mt-2 text-muted text-white/80">{siteConfig.name}</p>
                <div className="mt-3 space-y-2 text-white">
                  <div className="flex items-center gap-3"><Mail className="icon-float" size={18} /> <a className="underline" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></div>
                  <div className="flex items-center gap-3"><Phone className="icon-float" size={18} /> <a className="underline" href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}>{siteConfig.contact.phone}</a></div>
                  <div className="flex items-start gap-3"><Building className="icon-float mt-1" size={18} /> <div>{siteConfig.contact.address.split('\n').map((line, idx) => (<p key={idx}>{line}</p>))}</div></div>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.18 }} viewport={{ once: true }} className="map-3d">
                <Map address={siteConfig.contact.address} lat={siteConfig.contact.lat} lng={siteConfig.contact.lng} />
              </motion.div>
            </aside>
            
            {/* subtle connection line */}
            <div className="hidden md:block absolute left-1/2 top-48 h-60 w-px">
              <div className="connection-line h-full mx-auto" />
            </div>
          </div>
        </div>
      </main>
      <WhatsAppButton />
    </>
  )
}

export default ContactPage

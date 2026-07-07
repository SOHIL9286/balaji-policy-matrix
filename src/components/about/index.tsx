import { motion } from 'framer-motion'
import { siteConfig } from '@/config/site'

const sectionFade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

function Hero() {
  return (
    <motion.section variants={sectionFade} className="hero-gradient-bg py-24 text-white">
      <div className="container mx-auto px-6">
        <motion.div variants={sectionFade} className="glass-panel p-10 rounded-3xl max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold">About {siteConfig.name}</h1>
          <p className="mt-4 text-lg text-white/85">Trusted partners for insurance, finance and RTO services — protecting what matters for over 25 years.</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function MissionVision() {
  return (
    <motion.section variants={sectionFade} className="py-20">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 items-start">
        <motion.div variants={sectionFade} className="glass-panel p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold">Our Mission</h3>
          <p className="mt-3 text-muted">To provide accessible, reliable and tailored insurance and financial solutions that secure families and businesses across India.</p>
        </motion.div>
        <motion.div variants={sectionFade} className="glass-panel p-8 rounded-2xl">
          <h3 className="text-2xl font-semibold">Our Vision</h3>
          <p className="mt-3 text-muted">To be the most trusted advisory partner delivering innovative, transparent and customer-first financial protection.</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function Values() {
  const values = ['Integrity', 'Customer Centricity', 'Transparency', 'Expertise', 'Innovation']
  return (
    <motion.section variants={sectionFade} className="py-12">
      <div className="container mx-auto px-6">
        <h4 className="text-3xl font-semibold">Our Values</h4>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {values.map((v) => (
            <motion.div key={v} variants={sectionFade} whileHover={{ scale: 1.03 }} className="glass-panel p-6 rounded-xl">
              <strong className="block text-lg">{v}</strong>
              <p className="mt-2 text-muted text-sm">Committed to {v.toLowerCase()} in everything we do.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function WhyTrust() {
  return (
    <motion.section variants={sectionFade} className="py-12 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto px-6 grid gap-8 md:grid-cols-2 items-center">
        <div>
          <h4 className="text-3xl font-semibold">Why Customers Trust Us</h4>
          <ul className="mt-4 space-y-3 text-muted">
            <li>25+ years of proven experience</li>
            <li>Transparent pricing and clear advice</li>
            <li>Dedicated claims support and advisory</li>
            <li>Wide network across India</li>
          </ul>
        </div>
        <motion.div className="glass-panel p-8 rounded-xl" variants={sectionFade} initial={{ scale: 0.98, opacity: 0.8 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}>
          <h5 className="text-xl font-semibold">Company Introduction</h5>
          <p className="mt-3 text-muted">{siteConfig.name} provides end-to-end insurance, finance and RTO services with a relentless focus on protecting customers' livelihoods and future.</p>
        </motion.div>
      </div>
    </motion.section>
  )
}

function Timeline() {
  const events = [
    { year: '1998', title: 'Founded', desc: 'Established to serve local communities with insurance advice.' },
    { year: '2005', title: 'Expanded Services', desc: 'Added RTO and mutual funds services.' },
    { year: '2015', title: 'Technology Investing', desc: 'Invested in digital systems to improve client service.' },
    { year: '2022', title: 'National Reach', desc: 'Expanded operations across multiple states.' },
  ]
  return (
    <motion.section variants={sectionFade} className="py-12">
      <div className="container mx-auto px-6">
        <h4 className="text-3xl font-semibold">Our Journey</h4>
        <div className="mt-6 space-y-6">
          {events.map((e) => (
            <motion.div key={e.year} className="flex items-start gap-6" variants={sectionFade}>
              <div className="w-20 text-brand-primary font-bold">{e.year}</div>
              <div className="glass-panel p-4 rounded-xl">
                <h5 className="font-semibold">{e.title}</h5>
                <p className="mt-2 text-muted text-sm">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function Achievements() {
  const badges = ['ISO Compliant', '100k+ Policies', 'Trusted Partner Awards', 'Industry Leader 2023']
  return (
    <motion.section variants={sectionFade} className="py-12 bg-gradient-to-b from-transparent to-white/2">
      <div className="container mx-auto px-6">
        <h4 className="text-3xl font-semibold">Achievements</h4>
        <div className="mt-6 flex flex-wrap gap-4">
          {badges.map((b) => (
            <div key={b} className="glass-panel px-4 py-3 rounded-full text-sm font-medium">{b}</div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function Team() {
  const members = [
    { name: 'Mr. Balaji', role: 'Founder & MD' },
    { name: 'Ms. Priya', role: 'Head - Operations' },
    { name: 'Mr. Ramesh', role: 'Chief Advisor' },
  ]
  return (
    <motion.section variants={sectionFade} className="py-12">
      <div className="container mx-auto px-6">
        <h4 className="text-3xl font-semibold">Professional Team</h4>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {members.map((m) => (
            <motion.div key={m.name} variants={sectionFade} className="glass-panel p-6 rounded-xl text-center" whileHover={{ translateY: -6 }}>
              <div className="h-24 w-24 bg-white/10 rounded-full mx-auto"></div>
              <h5 className="mt-4 font-semibold">{m.name}</h5>
              <p className="text-muted text-sm">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function Stats() {
  const stats = [
    { label: 'Years', value: '25+' },
    { label: 'Customers', value: '100k+' },
    { label: 'Claims Assisted', value: '50k+' },
  ]
  return (
    <motion.section variants={sectionFade} className="py-12 bg-gradient-to-r from-white/3 to-transparent">
      <div className="container mx-auto px-6 flex gap-6 justify-center">
        {stats.map((s) => (
          <motion.div key={s.label} variants={sectionFade} className="glass-panel p-6 rounded-xl text-center">
            <div className="text-3xl font-bold">{s.value}</div>
            <div className="text-muted mt-1">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

function CTA() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-6 text-center">
        <motion.div className="glass-panel p-8 rounded-2xl inline-block" whileHover={{ scale: 1.02 }}>
          <h4 className="text-2xl font-semibold">Ready to secure your future?</h4>
          <p className="mt-2 text-muted">Contact our experts for a free consultation.</p>
          <div className="mt-4">
            <a href={`mailto:${siteConfig.contact.email}`} className="inline-block px-6 py-3 bg-brand-primary text-white rounded-lg">Get in Touch</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function AboutSections() {
  return (
    <motion.main initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }} variants={containerVariants}>
      <Hero />
      <WhyTrust />
      <MissionVision />
      <Values />
      <Timeline />
      <Achievements />
      <Team />
      <Stats />
      <CTA />
    </motion.main>
  )
}

export default AboutSections

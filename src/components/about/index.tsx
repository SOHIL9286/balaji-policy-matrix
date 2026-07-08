import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileSearch2,
  HeartPulse,
  Lock,
  ShieldCheck,
  ShieldUser,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react'
import { siteConfig } from '@/config/site'

const sectionFade = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const features = [
  {
    icon: ShieldCheck,
    title: 'Trusted Insurance Advisor',
    description: 'Personalized recommendations shaped by deep product knowledge and genuine care.',
  },
  {
    icon: Clock3,
    title: 'Fast Claim Assistance',
    description: 'Urgent support for every stage of your claim, from filing to closure.',
  },
  {
    icon: TrendingUp,
    title: 'Best Premium Comparison',
    description: 'Side-by-side policy comparisons that surface the smartest option for you.',
  },
  {
    icon: Users,
    title: '25+ Years Experience',
    description: 'A proven legacy of service, credibility, and client-first insurance advice.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Experts',
    description: 'Licensed advisors who ensure compliance, clarity, and confidence.',
  },
  {
    icon: Sparkles,
    title: 'Transparent Process',
    description: 'Clear pricing, visible terms, and a no-surprise service approach.',
  },
  {
    icon: FileSearch2,
    title: 'Quick Documentation',
    description: 'Streamlined paperwork and rapid submission for faster approvals.',
  },
  {
    icon: HeartPulse,
    title: 'Customer First Support',
    description: 'Dedicated care that keeps your needs top of mind, every step of the way.',
  },
]

const partners = [
  'ICICI Lombard',
  'HDFC ERGO',
  'Tata AIG',
  'Reliance General',
  'SBI General',
  'Bajaj Allianz',
  'New India Assurance',
  'Oriental Insurance',
  'United India Insurance',
  'National Insurance',
  'Future Generali',
  'IFFCO Tokio',
  'Liberty General',
  'Cholamandalam MS',
  'Star Health',
  'Care Health',
  'Niva Bupa',
  'Aditya Birla Health',
]

const achievementMetrics = [
  { value: '25+', label: 'Years Experience' },
  { value: '10,000+', label: 'Happy Clients' },
  { value: '50,000+', label: 'Policies Issued' },
  { value: '98%', label: 'Claim Support' },
  { value: '500+', label: 'Corporate Clients' },
]

const testimonials = [
  {
    name: 'Anita S.',
    title: 'Home Insurance Client',
    quote: 'Responsive advisors made my renewal smooth and transparent. I felt secure every step of the way.',
    initials: 'AS',
  },
  {
    name: 'Rohan K.',
    title: 'Business Policy Holder',
    quote: 'The team simplified my claim and delivered clear guidance. Premium experience with premium care.',
    initials: 'RK',
  },
  {
    name: 'Meena P.',
    title: 'Health Insurance Client',
    quote: 'Fast documentation, honest advice, and a human-centered process. I highly recommend them.',
    initials: 'MP',
  },
]

const trustBadges = [
  { icon: ShieldCheck, label: 'IRDAI Compliance' },
  { icon: ShieldUser, label: 'Trusted Advisor' },
  { icon: Lock, label: 'Secure Process' },
  { icon: CheckCircle2, label: 'Fast Claim Support' },
  { icon: HeartPulse, label: 'Customer Satisfaction' },
]

const galleryItems = [
  { title: 'Modern Workspace', description: 'Professional environment designed for client meetings.', gradient: 'from-sky-500 to-cyan-400' },
  { title: 'Client Lounge', description: 'Comfortable and welcoming consultation areas.', gradient: 'from-violet-500 to-fuchsia-500' },
  { title: 'Strategy Hub', description: 'Collaborative space for planning your protection journey.', gradient: 'from-emerald-500 to-lime-400' },
  { title: 'Premium Reception', description: 'A polished entry experience for every guest.', gradient: 'from-orange-400 to-rose-500' },
]

const contactInfo = {
  address: '123 Policy Matrix Avenue, Chennai, Tamil Nadu, India',
  phones: ['+91 98765 43210', '+91 91234 56789'],
  email: 'info@balajipolicymatrix.com',
  hours: ['Mon - Fri: 9:00 AM - 7:00 PM', 'Sat: 10:00 AM - 4:00 PM', 'Sun: Closed'],
}

function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-3">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary/80">Trust & Authority</p>
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="max-w-2xl text-muted">{subtitle}</p> : null}
    </div>
  )
}

function AboutHero() {
  return (
    <motion.section variants={sectionFade} className="hero-gradient-bg py-24 text-white overflow-hidden">
      <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <motion.div variants={sectionFade} className="space-y-8">
          <div className="glass-panel p-8 rounded-[2rem] max-w-3xl">
            <p className="text-sm uppercase tracking-[0.32em] text-brand-secondary/80">About Balaji Policy Matrix LLP</p>
            <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold leading-tight">Premium insurance and financial guidance crafted for long-term protection.</h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">We combine 25+ years of experience with modern service design to deliver reliable cover, fast claims support, and transparent advice for every family and business.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="glass-panel p-6 rounded-3xl border border-white/20 bg-white/10">
              <span className="text-sm uppercase tracking-[0.24em] text-white/70">Experience</span>
              <div className="mt-4 text-5xl font-bold text-white">25+</div>
              <p className="mt-2 text-white/70">Years of trusted service</p>
            </div>
            <div className="glass-panel p-6 rounded-3xl border border-white/20 bg-white/10">
              <span className="text-sm uppercase tracking-[0.24em] text-white/70">Expertise</span>
              <div className="mt-4 text-5xl font-bold text-white">100+</div>
              <p className="mt-2 text-white/70">Insurance plans curated</p>
            </div>
          </div>
        </motion.div>
        <motion.div variants={sectionFade} className="glass-panel rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-[0_40px_120px_rgba(2,6,23,0.28)]">
          <div className="text-brand-primary uppercase tracking-[0.3em] text-sm font-semibold">Company Overview</div>
          <h3 className="mt-6 text-3xl font-semibold text-white">Built on a foundation of integrity, transparency, and customer-first trust.</h3>
          <div className="mt-8 space-y-4 text-white/80">
            <p>Balaji Policy Matrix LLP delivers comprehensive insurance advisory for health, motor, life, and commercial needs with a premium service experience.</p>
            <p>Our team works as a trusted partner, helping clients navigate policy decisions and claim journeys with clarity and speed.</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

function MissionVision() {
  return (
    <motion.section variants={sectionFade} className="py-24">
      <div className="container mx-auto px-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <SectionHeader
            title="Mission, Vision & Values"
            subtitle="Creating a premium, trusted insurance experience through transparency, expertise and digital-first service."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div variants={sectionFade} className="glass-panel p-8 rounded-[2rem]">
              <h3 className="text-2xl font-semibold">Mission</h3>
              <p className="mt-3 text-muted">To make insurance and financial protection simple, accessible, and reliable so every client can plan confidently.</p>
            </motion.div>
            <motion.div variants={sectionFade} className="glass-panel p-8 rounded-[2rem]">
              <h3 className="text-2xl font-semibold">Vision</h3>
              <p className="mt-3 text-muted">To be India’s most trusted advisory partner for insurance and financial services, recognized for clarity and customer care.</p>
            </motion.div>
          </div>
        </div>
        <motion.div variants={sectionFade} className="glass-panel p-8 rounded-[2rem]">
          <h3 className="text-2xl font-semibold">Core Values</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {['Integrity', 'Customer Centricity', 'Transparency', 'Expertise', 'Innovation', 'Accountability'].map((value) => (
              <div key={value} className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <div className="text-sm uppercase tracking-[0.24em] text-brand-secondary/80">{value}</div>
                <p className="mt-3 text-muted">Delivering {value.toLowerCase()} across service, advice, and relationships.</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

function WhyChoose() {
  return (
    <motion.section variants={sectionFade} className="py-24 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Why Choose Us"
          subtitle="Premium service, trusted advice, and a customer-first approach designed for modern families and businesses."
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                variants={sectionFade}
                whileHover={{ y: -6 }}
                className="glass-panel rounded-[2rem] border border-white/15 bg-white/10 p-8 transition-transform duration-300"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-secondary/10 text-brand-secondary shadow-[0_20px_40px_rgba(16,185,129,0.08)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-6 text-xl font-semibold">{feature.title}</h4>
                <p className="mt-3 text-muted text-sm">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

function PartnerShowcase() {
  return (
    <motion.section variants={sectionFade} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Insurance Partners"
          subtitle="A premium network of trusted insurers offering the best policies for every need."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {partners.map((partner) => (
            <motion.div
              key={partner}
              variants={sectionFade}
              whileHover={{ scale: 1.02 }}
              className="glass-panel rounded-3xl border border-white/10 bg-white/10 px-5 py-6 text-center"
            >
              <div className="text-sm uppercase tracking-[0.2em] text-brand-secondary/80">Partner</div>
              <div className="mt-4 text-base font-semibold">{partner}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function AchievementCounters() {
  return (
    <motion.section variants={sectionFade} className="py-24 bg-gradient-to-r from-slate-950/10 via-white/5 to-slate-950/10">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Our Achievements"
          subtitle="Proven results, exceptional service, and measurable trust for every client relationship."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {achievementMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              variants={sectionFade}
              className="glass-panel rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center"
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div className="text-5xl font-semibold text-white">{metric.value}</div>
              <div className="mt-3 text-muted text-sm">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => window.clearInterval(interval)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <motion.section variants={sectionFade} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Client Testimonials"
          subtitle="Real stories from clients who received fast claims support, trusted advice, and premium service."
        />
        <motion.div variants={sectionFade} className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.8fr] items-center">
          <div className="glass-panel rounded-[2rem] border border-white/10 bg-white/10 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-brand-secondary to-brand-primary text-white text-xl font-semibold">{activeTestimonial.initials}</div>
              <div>
                <h3 className="text-2xl font-semibold">{activeTestimonial.name}</h3>
                <p className="text-muted">{activeTestimonial.title}</p>
              </div>
            </div>
            <div className="mt-6 space-y-3 text-white/90">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 text-amber-300" />
                ))}
              </div>
              <p className="mt-4 text-lg leading-8">“{activeTestimonial.quote}”</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 w-3 rounded-full transition-colors ${index === activeIndex ? 'bg-brand-secondary' : 'bg-white/20'}`}
                  aria-label={`Show testimonial from ${item.name}`}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: index === activeIndex ? 1 : 0.4, scale: index === activeIndex ? 1 : 0.96 }}
                transition={{ duration: 0.4 }}
                className="glass-panel rounded-[2rem] border border-white/10 bg-white/10 p-6"
              >
                <p className="text-muted text-sm">{item.title}</p>
                <h4 className="mt-4 text-lg font-semibold">{item.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

function TrustBadges() {
  return (
    <motion.section variants={sectionFade} className="py-24 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto px-6">
        <SectionHeader title="Certifications & Trust Badges" subtitle="Compliance, security and service standards built into every interaction." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
          {trustBadges.map((badge) => {
            const Icon = badge.icon
            return (
              <motion.div key={badge.label} variants={sectionFade} className="glass-panel rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center">
                <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-brand-primary/10 text-brand-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mt-5 text-xl font-semibold">{badge.label}</h4>
              </motion.div>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

function OfficeGallery() {
  return (
    <motion.section variants={sectionFade} className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader title="Office Gallery" subtitle="A premium workspace built for focused planning, client comfort, and modern service delivery." />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {galleryItems.map((item) => (
            <motion.div
              key={item.title}
              variants={sectionFade}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[2rem] bg-slate-950/10 p-8 text-white shadow-[0_40px_120px_rgba(2,6,23,0.18)]"
              style={{ backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`, '--tw-gradient-from': 'rgb(56 189 248 / 1)', '--tw-gradient-to': 'rgb(236 72 153 / 1)' } as React.CSSProperties}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80`} />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 space-y-4">
                <div className="h-3 w-16 rounded-full bg-white/20" />
                <h4 className="text-2xl font-semibold">{item.title}</h4>
                <p className="text-muted text-sm">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

function MapContactPreview() {
  return (
    <motion.section variants={sectionFade} className="py-24 bg-gradient-to-b from-white/5 to-transparent">
      <div className="container mx-auto px-6 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel overflow-hidden rounded-[2rem] border border-white/10 bg-white/10">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.3885673457496!2d80.21995931478671!3d13.080191590680625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267d6e4106ddd%3A0xf78a1115dc0592ad!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            className="h-96 w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="space-y-6">
          <SectionHeader title="Google Map & Contact Preview" subtitle="Visit our office or reach out directly for personalized support and fast quotes." />
          <div className="glass-panel rounded-[2rem] border border-white/10 bg-white/10 p-8">
            <div className="space-y-5 text-muted">
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-brand-secondary/80">Office Address</div>
                <p className="mt-3 text-white">{contactInfo.address}</p>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-brand-secondary/80">Phone Numbers</div>
                <div className="mt-3 space-y-2">
                  {contactInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone}`} className="block text-white hover:text-brand-secondary transition-colors">{phone}</a>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-brand-secondary/80">Email</div>
                <a href={`mailto:${contactInfo.email}`} className="mt-3 block text-white hover:text-brand-secondary transition-colors">{contactInfo.email}</a>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[0.3em] text-brand-secondary/80">Working Hours</div>
                <div className="mt-3 space-y-1 text-white/80">
                  {contactInfo.hours.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

function FinalCTA() {
  return (
    <motion.section variants={sectionFade} className="py-24">
      <div className="container mx-auto px-6 text-center">
        <div className="glass-panel mx-auto max-w-4xl rounded-[2rem] border border-white/15 bg-white/10 p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-secondary/80">Final Call</p>
          <h2 className="mt-4 text-4xl font-semibold">Let's Secure Your Future Today</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted">Connect with our experts for a free quote, fast WhatsApp support, or a direct call to begin your protection plan.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a href={`mailto:${siteConfig.contact.email}`} className="inline-flex items-center justify-center rounded-full bg-brand-primary px-8 py-4 text-white transition hover:bg-brand-secondary">
              Get Free Quote
            </a>
            <a href="https://wa.me/919876543210" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-white transition hover:border-brand-secondary hover:text-brand-secondary">
              WhatsApp Now
            </a>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-8 py-4 text-white transition hover:border-brand-secondary hover:text-brand-secondary">
              Call Now
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export function AboutSections() {
  return (
    <motion.main initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={containerVariants}>
      <AboutHero />
      <MissionVision />
      <WhyChoose />
      <PartnerShowcase />
      <AchievementCounters />
      <TestimonialsCarousel />
      <TrustBadges />
      <OfficeGallery />
      <MapContactPreview />
      <FinalCTA />
    </motion.main>
  )
}

export default AboutSections

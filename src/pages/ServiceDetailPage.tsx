import { useParams } from 'react-router-dom'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

const SERVICE_CONTENT: Record<string, { title: string; desc: string }> = {
  'car-insurance': {
    title: 'Car Insurance',
    desc: 'Comprehensive car insurance solutions including third-party, own-damage and add-ons tailored for your vehicle.',
  },
  'bike-insurance': { title: 'Bike Insurance', desc: 'Affordable two-wheeler insurance with easy claim support.' },
  'health-insurance': { title: 'Health Insurance', desc: 'Family floater and individual health plans with cashless network.' },
  'life-insurance': { title: 'Life Insurance', desc: 'Term, endowment and investment-linked life policies.' },
  'commercial-vehicle-insurance': { title: 'Commercial Vehicle Insurance', desc: 'Cover for commercial fleets and goods carriers.' },
  'personal-accident-insurance': { title: 'Personal Accident Insurance', desc: 'Financial protection against accidental injury or death.' },
  'travel-insurance': { title: 'Travel Insurance', desc: 'Short-term plans for domestic and international travel coverage.' },
  'vehicle-finance': { title: 'Vehicle Finance', desc: 'Competitive finance packages for new and used vehicles.' },
  'home-loan': { title: 'Home Loan', desc: 'Assistance with home financing options and documentation support.' },
  'business-loan': { title: 'Business Loan', desc: 'Custom business loan solutions for working capital and expansion.' },
  'driving-licence': { title: 'Driving Licence', desc: 'Assistance with application, testing and renewals.' },
  'learning-licence': { title: 'Learning Licence', desc: 'Apply for or renew your learner licence with expert guidance.' },
  'rc-transfer': { title: 'RC Transfer', desc: 'Smooth transfer of vehicle registration between owners.' },
  'hypothecation': { title: 'Hypothecation', desc: 'Manage hypothecation and loan closure documentation.' },
  'noc': { title: 'NOC', desc: 'Obtain No Objection Certificates (NOC) for vehicle transfers and loans.' },
  'fitness': { title: 'Fitness', desc: 'Vehicle fitness certificate processing for commercial vehicles.' },
  'permit': { title: 'Permit', desc: 'Apply for commercial permits and route permits.' },
  'tax': { title: 'Tax', desc: 'Assistance with vehicle tax calculations and payments.' },
}

export function ServiceDetailPage() {
  const { slug } = useParams()
  const key = slug ?? ''
  const content = SERVICE_CONTENT[key] ?? { title: 'Service', desc: 'Details coming soon.' }

  return (
    <>
      <Seo title={`${content.title} — ${siteConfig.title}`} description={content.desc} />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <article className="glass-panel p-8 rounded-2xl">
            <h1 className="text-3xl font-bold">{content.title}</h1>
            <p className="mt-4 text-muted">{content.desc}</p>
            <section className="mt-6">
              <h3 className="text-xl font-semibold">Why choose our {content.title}</h3>
              <ul className="mt-3 list-disc pl-5 text-muted space-y-2">
                <li>Personalized advice and competitive premiums</li>
                <li>Fast claim assistance and dedicated support</li>
                <li>Flexible policy options and add-ons</li>
              </ul>
            </section>
          </article>
        </div>
      </main>
    </>
  )
}

export default ServiceDetailPage

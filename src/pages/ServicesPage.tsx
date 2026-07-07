import { Link } from 'react-router-dom'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { ROUTES } from '@/config/routes'
import ServicesList from '@/components/services'

export function ServicesPage() {
  return (
    <>
      <Seo title={`Services — ${siteConfig.title}`} description={`Services offered by ${siteConfig.name}`} />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-extrabold">Our Services</h1>
            <p className="mt-3 text-muted">Comprehensive insurance, finance and RTO services tailored for you.</p>
          </header>

          <ServicesList />
        </div>
      </main>
    </>
  )
}

export default ServicesPage

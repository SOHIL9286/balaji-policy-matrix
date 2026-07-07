import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'

export function BlogPage() {
  return (
    <>
      <Seo title={`Blog — ${siteConfig.title}`} description={`Latest articles from ${siteConfig.name}`} />
      <main className="py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold">Blog</h1>
          <p className="mt-3 text-muted">Articles and industry insights will appear here.</p>
        </div>
      </main>
    </>
  )
}

export default BlogPage

import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { documents } from '@/data/portalMock'

export function DocumentsPage() {
  return (
    <>
      <Seo title={`Documents — ${siteConfig.title}`} />
      <div>
        <h2 className="text-2xl font-semibold mb-4">Documents</h2>
        <div className="grid gap-4">
          {documents.map((d) => (
            <div key={d.id} className="glass-panel p-4 rounded-2xl flex items-center justify-between">
              <div>
                <div className="font-semibold">{d.name}</div>
                <div className="text-sm text-muted">{d.type}</div>
              </div>
              <div className="flex gap-2">
                <a className="px-3 py-2 rounded bg-white/5">View</a>
                <a className="px-3 py-2 rounded bg-brand-primary text-white">Download</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DocumentsPage

type MapProps = {
  address?: string
  lat?: number
  lng?: number
}

export default function Map({ address, lat, lng }: MapProps) {
  const query = lat && lng ? `${lat},${lng}` : (address ?? 'Balaji Policy Matrix LLP')
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=14&output=embed`
  const openHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`

  return (
    <div className="relative glass-panel p-4 rounded-2xl">
      <a
        className="absolute left-3 top-3 z-10 inline-flex items-center gap-2 rounded bg-white/90 px-3 py-1 text-sm font-medium text-slate-700 shadow"
        href={openHref}
        target="_blank"
        rel="noreferrer"
      >
        Open in Maps
      </a>

      <iframe title="office-map" src={src} width="100%" height="320" className="rounded-md border-0" />
    </div>
  )
}

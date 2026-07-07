type MapProps = {
  address?: string
}

export default function Map({ address }: MapProps) {
  const query = encodeURIComponent(address ?? 'Chennai, India')
  const src = `https://www.google.com/maps?q=${query}&output=embed`

  return (
    <div className="glass-panel p-4 rounded-2xl">
      <iframe title="office-map" src={src} width="100%" height="320" className="rounded-md border-0" />
    </div>
  )
}

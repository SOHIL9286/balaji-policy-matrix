import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Contact from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-2xl">
      <label className="block">
        <span className="text-sm font-medium">Name</span>
        <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2" />
      </label>
      <label className="block mt-4">
        <span className="text-sm font-medium">Email</span>
        <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2" />
      </label>
      <label className="block mt-4">
        <span className="text-sm font-medium">Message</span>
        <textarea required value={message} onChange={(e) => setMessage(e.target.value)} className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 h-32" />
      </label>
      <div className="mt-4">
        <button type="submit" className="px-4 py-2 bg-brand-primary text-white rounded-lg">Send Message</button>
      </div>
    </form>
  )
}

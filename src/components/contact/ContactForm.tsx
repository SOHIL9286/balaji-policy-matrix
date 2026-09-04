import { useState } from 'react'
import { siteConfig } from '@/config/site'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setSuccess(null)

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.')
      return
    }

    if (!isValidEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    try {
      const phone = siteConfig.contact.phone.replace(/\D/g, '')
      const text = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`)
      const href = `https://wa.me/${phone}?text=${text}`
      // open WhatsApp in a new tab/window
      window.open(href, '_blank')
      setSuccess('Opening WhatsApp — please complete the message to send.')
      setName('')
      setEmail('')
      setMessage('')
    } catch (err) {
      setError('Unable to open WhatsApp. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="glass-panel p-6 rounded-2xl" noValidate>
      <label className="block">
        <span className="text-sm font-medium">Name</span>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          aria-invalid={!!error && !name}
        />
      </label>

      <label className="block mt-4">
        <span className="text-sm font-medium">Email</span>
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          aria-invalid={!!error && !isValidEmail(email)}
        />
      </label>

      <label className="block mt-4">
        <span className="text-sm font-medium">Message</span>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2 h-32 focus:outline-none focus:ring-2 focus:ring-brand-primary"
          aria-invalid={!!error && !message}
        />
      </label>

      <div className="mt-4">
        <button disabled={isSubmitting} type="submit" className="px-4 py-2 bg-brand-primary text-white rounded-lg disabled:opacity-60">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </div>

      {error ? <p className="mt-3 text-sm text-rose-400">{error}</p> : null}
      {success ? <p className="mt-3 text-sm text-emerald-400">{success}</p> : null}
    </form>
  )
}

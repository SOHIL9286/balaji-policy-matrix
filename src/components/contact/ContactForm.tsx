import { useState } from 'react'
import { motion } from 'framer-motion'

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
      const phone = '919638622456'
      const text = encodeURIComponent(
        `Hello Balaji Policy Matrix,\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nI would like to contact you.`
      )
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
    <motion.div whileHover={{ translateY: -6 }} transition={{ type: 'spring', stiffness: 120 }} className="">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <label className="block">
        <span className="text-sm font-medium text-white/90">Name</span>
        <input
          required
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-2 h-12 w-full input-3d"
          aria-invalid={!!error && !name}
        />
      </label>

      <label className="block mt-2">
        <span className="text-sm font-medium text-white/90">Email</span>
        <input
          required
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-2 h-12 w-full input-3d"
          aria-invalid={!!error && !isValidEmail(email)}
        />
      </label>

      <label className="block mt-2">
        <span className="text-sm font-medium text-white/90">Message</span>
        <textarea
          required
          placeholder="Enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-2 w-full input-3d h-36"
          aria-invalid={!!error && !message}
        />
      </label>

      <div className="mt-4">
        <motion.button
          whileHover={{ y: -4, boxShadow: '0 30px 60px rgba(13,71,161,0.24)' }}
          whileTap={{ scale: 0.97 }}
          disabled={isSubmitting}
          type="submit"
          className="btn-3d disabled:opacity-60"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </motion.button>
      </div>

      {error ? <p className="mt-3 text-sm text-rose-400">{error}</p> : null}
      {success ? <p className="mt-3 text-sm text-emerald-400">{success}</p> : null}
      </form>
    </motion.div>
  )
}

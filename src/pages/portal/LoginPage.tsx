import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Seo } from '@/components/seo'
import { siteConfig } from '@/config/site'
import { useAuth } from '@/hooks/useAuth'

export function LoginPage() {
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const auth = useAuth()
  const nav = useNavigate()

  function submit(e: React.FormEvent) {
    e.preventDefault()
    if (!/\d{10,12}/.test(mobile)) return alert('Enter valid mobile')
    if (password.length < 4) return alert('Enter password')
    auth.login(mobile)
    nav('/portal/dashboard')
  }

  return (
    <>
      <Seo title={`Login — ${siteConfig.title}`} />
      <main className="py-16">
        <div className="container mx-auto px-6 max-w-md">
          <h1 className="text-2xl font-bold">Customer Login</h1>
          <form onSubmit={submit} className="mt-6 glass-panel p-6 rounded-xl">
            <label className="block">
              <span className="text-sm font-medium">Mobile Number</span>
              <input value={mobile} onChange={(e) => setMobile(e.target.value)} className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2" />
            </label>

            <label className="block mt-4">
              <span className="text-sm font-medium">Password</span>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="mt-2 w-full rounded-md border border-white/10 bg-transparent px-3 py-2" />
            </label>

            <div className="mt-4 flex items-center justify-between">
              <label className="inline-flex items-center gap-2">
                <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                <span className="text-sm">Remember Me</span>
              </label>
              <a className="text-sm text-muted" href="#">Forgot Password?</a>
            </div>

            <div className="mt-6 flex gap-3">
              <button type="submit" className="px-4 py-2 bg-gradient-to-r from-brand-primary to-brand-secondary text-white rounded-lg">Login</button>
              <button type="button" onClick={() => nav('/')} className="px-4 py-2 bg-white/5 text-white rounded-lg">Back to Home</button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default LoginPage

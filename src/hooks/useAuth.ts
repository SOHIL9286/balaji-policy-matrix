import { useEffect, useState } from 'react'

export function useAuth() {
  const [user, setUser] = useState<{ mobile: string } | null>(() => {
    try {
      const raw = localStorage.getItem('portal_user')
      return raw ? JSON.parse(raw) : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (user) localStorage.setItem('portal_user', JSON.stringify(user))
    else localStorage.removeItem('portal_user')
  }, [user])

  function login(mobile: string) {
    setUser({ mobile })
  }

  function logout() {
    setUser(null)
  }

  return { user, login, logout }
}

export default useAuth

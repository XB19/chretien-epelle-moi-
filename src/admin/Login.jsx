import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { asset } from '../lib/assets.js'
import '../styles/admin.css'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (authError) {
      setError('Identifiants incorrects.')
      return
    }

    navigate('/admin-panel')
  }

  return (
    <div className="admin-login-page">

      <div className="admin-login-box">

        <img src={asset('logo.png')} alt="Epelle Moi" className="admin-login-logo" />

        <h2>Connexion Admin</h2>
        <p className="admin-login-subtitle">Accédez à l'espace d'administration</p>

        <form onSubmit={handleSubmit}>

          <div className="admin-login-field">
            <label htmlFor="email">Adresse email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="admin-login-field">
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {error && <p className="admin-login-error">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? 'Connexion…' : 'Se connecter'}
          </button>

        </form>

        <Link to="/" className="admin-login-back">
          ← Retour au site
        </Link>

      </div>

    </div>
  )
}

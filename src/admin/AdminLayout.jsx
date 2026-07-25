import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, Navigate, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { asset } from '../lib/assets.js'
import '../styles/admin.css'

export default function AdminLayout() {
  const [session, setSession] = useState(undefined) // undefined = chargement
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin-login')
  }

  if (session === undefined) {
    return (
      <div className="admin-root">
        <div className="admin-loading">Chargement…</div>
      </div>
    )
  }

  if (!session) return <Navigate to="/admin-login" replace />

  return (
    <div className="admin-root">

      {/* OVERLAY MOBILE */}
      <div
        className={`admin-sidebar-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
      ></div>

      {/* SIDEBAR */}

      <aside className={`admin-sidebar${menuOpen ? ' open' : ''}`}>

        <div className="admin-sidebar-brand">
          <img src={asset('logo.png')} alt="Epelle Moi" />
          <span>Chrétien<br />Épelle-Moi</span>
        </div>

        <nav className="admin-sidebar-nav">

          <NavLink to="/admin-panel" end onClick={closeMenu}>
            <i className="fa-solid fa-chart-line"></i>
            Tableau de bord
          </NavLink>

          <NavLink to="/admin-panel/contacts" onClick={closeMenu}>
            <i className="fa-solid fa-envelope"></i>
            Messages contact
          </NavLink>

          <NavLink to="/admin-panel/partners" onClick={closeMenu}>
            <i className="fa-solid fa-handshake"></i>
            Demandes partenaires
          </NavLink>

          <Link to="/" onClick={closeMenu}>
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
            Voir le site
          </Link>

        </nav>

        <div className="admin-sidebar-footer">
          <button className="admin-logout-btn" onClick={handleLogout}>
            <i className="fa-solid fa-right-from-bracket"></i>
            Déconnexion
          </button>
        </div>

      </aside>


      {/* CONTENU */}

      <div className="admin-main">

        <div className="admin-topbar">

          <div className="admin-topbar-left">
            <button className="admin-menu-toggle" onClick={() => setMenuOpen(true)}>
              <i className="fa-solid fa-bars"></i>
            </button>
            <h1>Administration</h1>
          </div>

          <div className="admin-topbar-user">
            <i className="fa-solid fa-circle-user"></i>
            {session.user?.email ?? 'Admin'}
          </div>

        </div>


        <div className="admin-page">
          <Outlet />
        </div>

      </div>
    </div>
  )
}

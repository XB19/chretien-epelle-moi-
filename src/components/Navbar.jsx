import { useState } from 'react'
import { Link } from 'react-router-dom'
import { asset } from '../lib/assets.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="navbar">
      <div className={`nav-overlay${open ? ' active' : ''}`} id="navOverlay" onClick={closeMenu}></div>

      <div className="nav-container">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={asset('logo.png')} alt="Epelle Moi logo" />
        </Link>

        <nav className={`nav-links${open ? ' active' : ''}`} id="navLinks">

          <Link to="/" onClick={closeMenu}>Accueil</Link>
          <Link to="/a-propos" onClick={closeMenu}>À propos</Link>
          <Link to="/galerie" onClick={closeMenu}>Galerie</Link>
          <Link to="/temoignage" onClick={closeMenu}>Témoignages</Link>
          <Link to="/equipe" onClick={closeMenu}>Équipe</Link>

          {/* 🔥 CTA MOBILE */}
          <div className="mobile-cta">
            <Link to="/faire-un-don" className="btn-donation" onClick={closeMenu}>
              ❤️ Faire un don
            </Link>

            <Link to="/partenaire" className="btn-partner" onClick={closeMenu}>
              Partenaire
            </Link>
          </div>

        </nav>

        {/* CTA */}
        <div className="nav-buttons">

          <Link to="/faire-un-don" className="btn-donation">
            <i className="fa-solid fa-heart"></i>
            Faire un don
          </Link>

          <Link to="/contact" className="btn-login">
            Contactez-nous
          </Link>

          <Link to="/partenaire" className="btn-partner">
            Devenir partenaire
          </Link>

        </div>

        {/* MENU BURGER */}
        <div className="menu-toggle" id="menuToggle" onClick={() => setOpen(!open)}>
          ☰
        </div>

      </div>

    </header>
  )
}

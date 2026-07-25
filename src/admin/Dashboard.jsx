import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'

export default function Dashboard() {
  const [contactsCount, setContactsCount] = useState(0)
  const [partnersCount, setPartnersCount] = useState(0)

  useEffect(() => {
    supabase
      .from('contacts')
      .select('*', { count: 'exact', head: true })
      .then(({ count }) => setContactsCount(count ?? 0))

    supabase
      .from('partners')
      .select('*', { count: 'exact', head: true })
      .then(({ count }) => setPartnersCount(count ?? 0))
  }, [])

  return (
    <>
      <h2 className="admin-page-title">
        <i className="fa-solid fa-chart-line"></i>
        Tableau de bord
      </h2>

      <div className="admin-cards">

        <Link to="/admin-panel/contacts" className="admin-card">
          <div className="admin-card-icon">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <h3>{contactsCount}</h3>
          <p>Messages reçus</p>
          <span>Voir les détails →</span>
        </Link>

        <Link to="/admin-panel/partners" className="admin-card">
          <div className="admin-card-icon">
            <i className="fa-solid fa-handshake"></i>
          </div>
          <h3>{partnersCount}</h3>
          <p>Demandes partenaires</p>
          <span>Voir les détails →</span>
        </Link>

      </div>
    </>
  )
}

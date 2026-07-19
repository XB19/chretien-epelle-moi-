import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'

const css = `
.dashboard-title{
    font-size:28px;
    margin-bottom:30px;
}

/* CARDS */

.cards{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}

.card{
    background:white;
    padding:25px;
    border-radius:16px;
    box-shadow:0 10px 25px rgba(0,0,0,0.08);
    transition:0.3s;
    text-decoration:none;
    color:black;
    display:block;
}

.card:hover{
    transform:translateY(-5px);
}

.card h3{
    font-size:32px;
    margin:0;
    color:#1E4DB7;
}

.card p{
    margin-top:10px;
    color:#666;
}

.card span{
    font-size:13px;
    color:#999;
}
`

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
      <style>{css}</style>

      <h2 className="dashboard-title">📊 Tableau de bord</h2>

      <div className="cards">

        <Link to="/admin-panel/contacts" className="card">
          <h3>{contactsCount}</h3>
          <p>Messages reçus</p>
          <span>Voir les détails →</span>
        </Link>

        <Link to="/admin-panel/partners" className="card">
          <h3>{partnersCount}</h3>
          <p>Demandes partenaires</p>
          <span>Voir les détails →</span>
        </Link>

      </div>
    </>
  )
}

import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { formatDate } from './dates.js'

export default function AdminPartners() {
  const [partners, setPartners] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase
      .from('partners')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => setPartners(data ?? []))
  }, [])

  return (
    <>
      <h2 className="admin-page-title">
        <i className="fa-solid fa-handshake"></i>
        Demandes partenaires {partners ? `(${partners.length})` : ''}
      </h2>

      <div className="admin-table-container">

        {partners === null ? (
          <div className="admin-loading">Chargement…</div>
        ) : partners.length === 0 ? (
          <div className="admin-empty">
            <i className="fa-solid fa-handshake-simple"></i>
            Aucune demande de partenariat pour le moment.
          </div>
        ) : (
          <table className="admin-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Organisation</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {partners.map((partner, index) => (
                <tr key={partner.id} onClick={() => navigate(`/admin-panel/partners/${partner.id}`)}>
                  <td>{index + 1}</td>
                  <td>{partner.organization}</td>
                  <td>{partner.email}</td>
                  <td>{partner.phone}</td>
                  <td>{formatDate(partner.created_at)}</td>
                </tr>
              ))}
            </tbody>

          </table>
        )}

      </div>
    </>
  )
}

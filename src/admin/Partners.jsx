import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { formatDate } from './dates.js'

export default function AdminPartners() {
  const [partners, setPartners] = useState(null)
  const [deletingId, setDeletingId] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase
      .from('partners')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => setPartners(data ?? []))
  }, [])

  const handleDelete = async (partner) => {
    const confirmed = window.confirm(
      `Supprimer la demande de ${partner.organization} ? Cette action est irréversible.`
    )
    if (!confirmed) return

    setDeletingId(partner.id)

    const { error } = await supabase.from('partners').delete().eq('id', partner.id)

    setDeletingId(null)

    if (error) {
      window.alert("La suppression a échoué. Réessayez plus tard.")
      return
    }

    setPartners((prev) => prev.filter((p) => p.id !== partner.id))
  }

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
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {partners.map((partner, index) => (
                <tr key={partner.id}>
                  <td>{index + 1}</td>
                  <td>{partner.organization}</td>
                  <td>{partner.email}</td>
                  <td>{partner.phone}</td>
                  <td>{formatDate(partner.created_at)}</td>
                  <td className="admin-table-actions">
                    <div className="admin-actions">
                      <button
                        type="button"
                        className="admin-action-btn admin-action-view"
                        onClick={() => navigate(`/admin-panel/partners/${partner.id}`)}
                      >
                        <i className="fa-solid fa-eye"></i>
                        Voir
                      </button>
                      <button
                        type="button"
                        className="admin-action-btn admin-action-delete"
                        onClick={() => handleDelete(partner)}
                        disabled={deletingId === partner.id}
                      >
                        <i className="fa-solid fa-trash"></i>
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        )}

      </div>
    </>
  )
}

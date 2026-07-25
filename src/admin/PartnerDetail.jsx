import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { formatDateTime } from './dates.js'

export default function PartnerDetail() {
  const { id } = useParams()
  const [partner, setPartner] = useState(undefined) // undefined = chargement, null = introuvable

  useEffect(() => {
    supabase
      .from('partners')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => setPartner(data ?? null))
  }, [id])

  return (
    <>
      <h2 className="admin-page-title">
        <i className="fa-solid fa-handshake"></i>
        Détail de la demande
      </h2>

      {partner === undefined ? (
        <div className="admin-loading">Chargement…</div>
      ) : partner === null ? (
        <div className="admin-detail-box">
          <div className="admin-empty">
            <i className="fa-solid fa-circle-exclamation"></i>
            Cette demande est introuvable.
          </div>
          <Link to="/admin-panel/partners" className="admin-back-btn">
            <i className="fa-solid fa-arrow-left"></i>
            Retour
          </Link>
        </div>
      ) : (
        <div className="admin-detail-box">

          <h2>{partner.organization}</h2>

          <div className="admin-detail-meta">
            <span><strong>Email :</strong> {partner.email}</span>
            <span><strong>Téléphone :</strong> {partner.phone}</span>
            <span><strong>Date :</strong> {formatDateTime(partner.created_at)}</span>
          </div>

          <div className="admin-detail-message">
            {partner.message}
          </div>

          <Link to="/admin-panel/partners" className="admin-back-btn">
            <i className="fa-solid fa-arrow-left"></i>
            Retour
          </Link>

        </div>
      )}
    </>
  )
}

import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { formatDateTime } from './dates.js'

export default function ContactDetail() {
  const { id } = useParams()
  const [contact, setContact] = useState(undefined) // undefined = chargement, null = introuvable

  useEffect(() => {
    supabase
      .from('contacts')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => setContact(data ?? null))
  }, [id])

  return (
    <>
      <h2 className="admin-page-title">
        <i className="fa-solid fa-envelope-open-text"></i>
        Détail du message
      </h2>

      {contact === undefined ? (
        <div className="admin-loading">Chargement…</div>
      ) : contact === null ? (
        <div className="admin-detail-box">
          <div className="admin-empty">
            <i className="fa-solid fa-circle-exclamation"></i>
            Ce message est introuvable.
          </div>
          <Link to="/admin-panel/contacts" className="admin-back-btn">
            <i className="fa-solid fa-arrow-left"></i>
            Retour
          </Link>
        </div>
      ) : (
        <div className="admin-detail-box">

          <h2>{contact.name}</h2>

          <div className="admin-detail-meta">
            <span><strong>Email :</strong> {contact.email}</span>
            <span><strong>Téléphone :</strong> {contact.phone}</span>
            <span><strong>Date :</strong> {formatDateTime(contact.created_at)}</span>
          </div>

          <div className="admin-detail-message">
            {contact.message}
          </div>

          <Link to="/admin-panel/contacts" className="admin-back-btn">
            <i className="fa-solid fa-arrow-left"></i>
            Retour
          </Link>

        </div>
      )}
    </>
  )
}

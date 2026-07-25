import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { formatDate } from './dates.js'

export default function AdminContacts() {
  const [contacts, setContacts] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    supabase
      .from('contacts')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => setContacts(data ?? []))
  }, [])

  return (
    <>
      <h2 className="admin-page-title">
        <i className="fa-solid fa-envelope"></i>
        Messages reçus {contacts ? `(${contacts.length})` : ''}
      </h2>

      <div className="admin-table-container">

        {contacts === null ? (
          <div className="admin-loading">Chargement…</div>
        ) : contacts.length === 0 ? (
          <div className="admin-empty">
            <i className="fa-solid fa-inbox"></i>
            Aucun message reçu pour le moment.
          </div>
        ) : (
          <table className="admin-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map((contact, index) => (
                <tr key={contact.id} onClick={() => navigate(`/admin-panel/contacts/${contact.id}`)}>
                  <td>{index + 1}</td>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>{contact.phone}</td>
                  <td>{formatDate(contact.created_at)}</td>
                </tr>
              ))}
            </tbody>

          </table>
        )}

      </div>
    </>
  )
}

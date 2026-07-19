import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { formatDateTime } from './dates.js'

const css = `
.detail-box{
    background:white;
    padding:30px;
    border-radius:16px;
    box-shadow:0 10px 25px rgba(0,0,0,0.08);
}

.detail-box h3{
    margin-bottom:10px;
}

.detail-box p{
    color:#555;
}

.back-btn{
    display:inline-block;
    margin-top:20px;
    background:#1E4DB7;
    color:white;
    padding:10px 20px;
    border-radius:25px;
    text-decoration:none;
}
`

export default function ContactDetail() {
  const { id } = useParams()
  const [contact, setContact] = useState(null)

  useEffect(() => {
    supabase
      .from('contacts')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => setContact(data))
  }, [id])

  if (!contact) return null

  return (
    <>
      <style>{css}</style>

      <h2>Détail du message</h2>

      <div className="detail-box">

        <h3>{contact.name}</h3>
        <p><strong>Email :</strong> {contact.email}</p>
        <p><strong>Téléphone :</strong> {contact.phone}</p>
        <p><strong>Date :</strong> {formatDateTime(contact.created_at)}</p>

        <hr />

        <p>{contact.message}</p>

        <Link to="/admin-panel/contacts" className="back-btn">← Retour</Link>

      </div>
    </>
  )
}

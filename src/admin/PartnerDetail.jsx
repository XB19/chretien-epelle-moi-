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

export default function PartnerDetail() {
  const { id } = useParams()
  const [partner, setPartner] = useState(null)

  useEffect(() => {
    supabase
      .from('partners')
      .select('*')
      .eq('id', id)
      .single()
      .then(({ data }) => setPartner(data))
  }, [id])

  if (!partner) return null

  return (
    <>
      <style>{css}</style>

      <h2>Détail de la demande</h2>

      <div className="detail-box">

        <h3>{partner.organization}</h3>

        <p><strong>Email :</strong> {partner.email}</p>
        <p><strong>Téléphone :</strong> {partner.phone}</p>
        <p><strong>Date :</strong> {formatDateTime(partner.created_at)}</p>

        <hr />

        <p>{partner.message}</p>

        <Link to="/admin-panel/partners" className="back-btn">← Retour</Link>

      </div>
    </>
  )
}

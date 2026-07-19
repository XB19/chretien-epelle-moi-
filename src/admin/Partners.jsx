import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { formatDate } from './dates.js'

const css = `
.table-container{
    background:white;
    padding:20px;
    border-radius:12px;
    box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

table{
    width:100%;
    border-collapse:collapse;
}

th, td{
    padding:12px;
    text-align:left;
}

th{
    background:#f3f4f6;
}

tr{
    border-bottom:1px solid #eee;
    cursor:pointer;
}

tr:hover{
    background:#f9fafb;
}
`

export default function AdminPartners() {
  const [partners, setPartners] = useState([])
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
      <style>{css}</style>

      <h2>🤝 Demandes partenaires ({partners.length})</h2>

      <div className="table-container">

        <table>

          <tbody>

            <tr>
              <th>#</th>
              <th>Organisation</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Date</th>
            </tr>

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

      </div>
    </>
  )
}

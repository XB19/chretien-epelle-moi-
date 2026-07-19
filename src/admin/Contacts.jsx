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

.badge{
    background:#1E4DB7;
    color:white;
    padding:5px 10px;
    border-radius:20px;
    font-size:12px;
}
`

export default function AdminContacts() {
  const [contacts, setContacts] = useState([])
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
      <style>{css}</style>

      <h2>📩 Messages reçus ({contacts.length})</h2>

      <div className="table-container">

        <table>

          <tbody>

            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Date</th>
            </tr>

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

      </div>
    </>
  )
}

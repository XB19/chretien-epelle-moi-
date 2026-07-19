import { useEffect, useState } from 'react'
import { Link, Outlet, Navigate, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'

const css = `
body{
margin:0;
font-family:Arial;
background:#f4f6fb;
}

/* SIDEBAR */

.sidebar{
width:240px;
background:#1E4DB7;
height:100vh;
color:white;
position:fixed;
top:0;
left:0;
}

.sidebar h2{
text-align:center;
padding:25px 10px;
border-bottom:1px solid rgba(255,255,255,0.2);
margin:0;
}

.sidebar a{
display:block;
color:white;
padding:14px 25px;
text-decoration:none;
transition:0.3s;
}

.sidebar a:hover{
background:#163c8f;
}

.sidebar .logout-btn{
display:block;
width:100%;
text-align:left;
color:white;
padding:14px 25px;
background:none;
border:none;
font-size:16px;
font-family:Arial;
cursor:pointer;
transition:0.3s;
}

.sidebar .logout-btn:hover{
background:#163c8f;
}

/* CONTENT */

.admin-main{
margin-left:240px;
width:calc(100% - 240px);
}

/* NAVBAR */

.admin-navbar{
background:white;
padding:15px 30px;
box-shadow:0 2px 10px rgba(0,0,0,0.05);
display:flex;
justify-content:space-between;
align-items:center;
}

.admin-navbar h3{
margin:0;
}

/* PAGE */

.admin-page{
padding:40px;
}

/* CARDS */

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-top:30px;
}

.card{
background:white;
padding:25px;
border-radius:10px;
box-shadow:0 10px 20px rgba(0,0,0,0.05);
}

.card h3{
margin-bottom:10px;
}
`

export default function AdminLayout() {
  const [session, setSession] = useState(undefined) // undefined = chargement
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))

    const { data: listener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession)
    })

    return () => listener.subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin-login')
  }

  if (session === undefined) return null

  if (!session) return <Navigate to="/admin-login" replace />

  return (
    <>
      <style>{css}</style>

      {/* SIDEBAR */}

      <div className="sidebar">

        <h2>Chrétien <br />
          Epelle-Moi</h2>

        <Link to="/admin-panel">Dashboard</Link>

        <Link to="/admin-panel/contacts">
          Messages Contact
        </Link>

        <Link to="/admin-panel/partners">
          Demandes partenaires
        </Link>

        <Link to="/galerie">
          Voir le site
        </Link>

        <button className="logout-btn" onClick={handleLogout}>
          Déconnexion
        </button>

      </div>


      <div className="admin-main">

        <div className="admin-navbar">

          <h3>Administration</h3>

          <div>
            Admin
          </div>

        </div>


        <div className="admin-page">

          <Outlet />

        </div>

      </div>
    </>
  )
}

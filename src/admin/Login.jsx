import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'

const css = `
.login-page{
font-family:Arial;
background:#f4f6fb;
display:flex;
align-items:center;
justify-content:center;
height:100vh;
}

.login-box{
background:white;
padding:40px;
width:350px;
border-radius:10px;
box-shadow:0 10px 25px rgba(0,0,0,0.1);
}

.login-box h2{
text-align:center;
margin-bottom:25px;
}

.login-box input{
width:100%;
padding:12px;
margin-bottom:15px;
border:1px solid #ddd;
border-radius:6px;
box-sizing:border-box;
}

.login-box button{
width:100%;
padding:12px;
background:#1E4DB7;
color:white;
border:none;
border-radius:6px;
cursor:pointer;
}

.login-box button:hover{
background:#163c8f;
}

.login-error{
color:#dc2626;
font-size:14px;
margin-bottom:15px;
text-align:center;
}
`

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    const { error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (authError) {
      setError('Identifiants incorrects.')
      return
    }

    navigate('/admin-panel')
  }

  return (
    <>
      <style>{css}</style>

      <div className="login-page">

        <div className="login-box">

          <h2>Connexion Admin</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {error && <p className="login-error">{error}</p>}

            <button type="submit">Se connecter</button>

          </form>

        </div>

      </div>
    </>
  )
}

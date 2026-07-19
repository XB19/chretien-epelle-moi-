import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'

const css = `
/* HERO */

.page-hero{
background:linear-gradient(135deg,#1E4DB7,#2563eb);
padding:100px 10%;
text-align:center;
color:white;
}

.page-hero h1{
font-size:42px;
margin-bottom:10px;
}

.page-hero p{
font-size:18px;
color:#e5e7eb;
max-width:700px;
margin:auto;
}


/* CONTACT SECTION */

.contact-section{
padding:80px 10%;
}

.contact-container{
display:flex;
gap:60px;
flex-wrap:wrap;
}


/* CONTACT INFO */

.contact-info{
flex:1;
}

.contact-info h2{
font-size:30px;
margin-bottom:15px;
}

.contact-info p{
color:#666;
margin-bottom:25px;
line-height:1.7;
}

.contact-item{
display:flex;
align-items:flex-start;
margin-bottom:20px;
}

.contact-icon{
font-size:20px;
color:#1E4DB7;
margin-right:12px;
margin-top:3px;
}

.contact-text{
color:#555;
}


/* FORM */

.contact-form{
flex:1;
background:#f9fafb;
padding:40px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

.contact-form h3{
margin-bottom:20px;
}

.form-group{
margin-bottom:18px;
}

.form-group input,
.form-group textarea{
width:100%;
padding:12px;
border-radius:8px;
border:1px solid #ddd;
font-size:14px;
}

.form-group textarea{
height:130px;
resize:none;
}

.contact-btn{
background:#1E4DB7;
color:white;
border:none;
padding:12px 25px;
border-radius:30px;
cursor:pointer;
font-weight:600;
transition:0.3s;
}

.contact-btn:hover{
background:#163c8f;
}


/* MAP */

.contact-map{
padding:80px 10%;
}

.contact-map iframe{
width:100%;
height:350px;
border-radius:12px;
border:none;
}

/* POPUP SUCCESS */

.popup-overlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.4);
display:flex;
align-items:center;
justify-content:center;
z-index:999;
}

.popup-box{
background:white;
padding:40px;
border-radius:14px;
text-align:center;
max-width:400px;
box-shadow:0 20px 50px rgba(0,0,0,0.2);
animation:popupFade 0.4s ease;
}

.popup-icon{
font-size:55px;
color:#22c55e;
margin-bottom:15px;
}

.popup-box h3{
margin-bottom:10px;
}

.popup-box p{
color:#666;
font-size:15px;
margin-bottom:20px;
}

.popup-btn{
display:inline-block;
background:#1E4DB7;
color:white;
padding:10px 22px;
border-radius:25px;
text-decoration:none;
font-weight:600;
}

.popup-btn:hover{
background:#163c8f;
}

@keyframes popupFade{
from{
opacity:0;
transform:scale(0.8);
}
to{
opacity:1;
transform:scale(1);
}
}
/* =========================
RESPONSIVE CONTACT PAGE
========================= */

/* TABLETTE */
@media (max-width:1024px){

  .page-hero{
    padding:80px 5%;
  }

  .page-hero h1{
    font-size:34px;
  }

  .page-hero p{
    font-size:17px;
  }

  .contact-section{
    padding:70px 5%;
  }

  .contact-map{
    padding:70px 5%;
  }

}


/* MOBILE */
@media (max-width:768px){

  .page-hero{
    padding:60px 5%;
  }

  .page-hero h1{
    font-size:26px;
  }

  .page-hero p{
    font-size:15px;
  }

  /* STACK INFO + FORM */
  .contact-container{
    flex-direction:column;
    gap:40px;
  }

  .contact-info h2{
    font-size:24px;
  }

  .contact-info p{
    font-size:15px;
  }

  .contact-item{
    align-items:center;
  }

  /* FORM */
  .contact-form{
    padding:25px;
  }

  .contact-form h3{
    font-size:20px;
  }

  .form-group input,
  .form-group textarea{
    font-size:14px;
    padding:11px;
  }

  .contact-btn{
    width:100%;
    text-align:center;
  }

  /* MAP */
  .contact-map iframe{
    height:280px;
  }

}


/* PETITS ÉCRANS */
@media (max-width:480px){

  .page-hero{
    padding:50px 5%;
  }

  .page-hero h1{
    font-size:22px;
  }

  .page-hero p{
    font-size:14px;
  }

  .contact-section{
    padding:50px 5%;
  }

  .contact-info h2{
    font-size:20px;
  }

  .contact-info p{
    font-size:14px;
  }

  .contact-form{
    padding:20px;
  }

  .contact-form h3{
    font-size:18px;
  }

  .contact-map{
    padding:50px 5%;
  }

  .contact-map iframe{
    height:250px;
  }

  /* POPUP */
  .popup-box{
    padding:25px;
    margin:0 15px;
  }

  .popup-icon{
    font-size:45px;
  }

}
.form-group input:focus,
.form-group textarea:focus{
  outline:none;
  border-color:#1E4DB7;
  box-shadow:0 0 0 2px rgba(30,77,183,0.1);
}
.contact-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 8px 20px rgba(30,77,183,0.2);
}
.form-error{
  color:#dc2626;
  font-size:14px;
  margin-bottom:15px;
}
`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)

  const handleChange = (e) => {
    let { name, value } = e.target
    // ✅ VALIDATION TELEPHONE : uniquement des chiffres
    if (name === 'phone') value = value.replace(/[^0-9]/g, '')
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (form.phone.length < 8) {
      setError('Numéro de téléphone invalide.')
      return
    }

    setSending(true)

    const { error: insertError } = await supabase.from('contacts').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    })

    setSending(false)

    if (insertError) {
      setError("Une erreur est survenue. Veuillez réessayer.")
      return
    }

    setSuccess(true)
    setForm({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <>
      <style>{css}</style>

      {/* HERO */}

      <section className="page-hero">

        <h1>Contactez l’équipe du concours Chrétien Épelle-Moi</h1>

        <p>
          Une question, une suggestion ou une proposition de partenariat ?
          Notre équipe est disponible pour vous accompagner
          et répondre à vos demandes.
        </p>

      </section>



      {/* CONTACT */}

      <section className="contact-section">

        <div className="contact-container">


          {/* INFO */}

          <div className="contact-info">

            <h2>Entrer en contact avec nous</h2>


            <p>
              Pour toute information concernant le
              <strong> Concours Chrétien Épelle-Moi</strong>,
              n'hésitez pas à nous contacter.
              Notre équipe se tient à votre disposition
              pour répondre à vos questions concernant
              le concours, les inscriptions ou les partenariats.
            </p>



            <div className="contact-item">

              <div className="contact-icon">
                <i className="fa-solid fa-location-dot"></i>
              </div>

              <div className="contact-text">
                Lomé, Togo
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>

              <div className="contact-text">
                +228 92 45 21 46
              </div>

            </div>


            <div className="contact-item">

              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>

              <div className="contact-text">
                chretienepellemoi@gmail.com
              </div>

            </div>

          </div>



          {/* FORM */}

          <div className="contact-form">

            <h3>Envoyer votre message</h3>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <input type="text" name="name" placeholder="Nom et prénom" required value={form.name} onChange={handleChange} />
              </div>

              <div className="form-group">
                <input type="email" name="email" placeholder="Adresse email" required value={form.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <input type="tel" name="phone" placeholder="Numéro de téléphone (ex: +228 90 00 00 00)" required value={form.phone} onChange={handleChange} />
              </div>

              <div className="form-group">
                <input type="text" name="subject" placeholder="Objet de votre message" value={form.subject} onChange={handleChange} />
              </div>

              <div className="form-group">
                <textarea name="message" placeholder="Écrivez votre message ici..." required value={form.message} onChange={handleChange}></textarea>
              </div>

              {error && <p className="form-error">{error}</p>}

              <button className="contact-btn" type="submit" disabled={sending}>
                {sending ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

            </form>

          </div>


        </div>

      </section>



      {/* MAP */}

      <section className="contact-map">

        <iframe
          src="https://www.google.com/maps?q=Paroisse%20Sainte%20Rita%20de%20Zossime%20Lome&output=embed">
        </iframe>

      </section>

      {success && (

        <div className="popup-overlay">

          <div className="popup-box">

            <div className="popup-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <h3>Message envoyé avec succès</h3>

            <p>
              Merci de nous avoir contactés.
              Notre équipe vous répondra dans les plus brefs délais.
            </p>

            <Link to="/" className="popup-btn">
              Retour à l'accueil
            </Link>

          </div>

        </div>

      )}
    </>
  )
}

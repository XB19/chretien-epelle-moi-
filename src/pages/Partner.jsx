import { useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'
import { asset } from '../lib/assets.js'

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


/* INTRO */

.partner-intro{
padding:80px 10%;
text-align:center;
}

.partner-intro h2{
font-size:32px;
margin-bottom:10px;
}

.partner-intro p{
max-width:700px;
margin:auto;
color:#666;
line-height:1.7;
}


/* BENEFITS */

.partner-benefits{
padding:80px 10%;
background:#f9fafb;
}

.benefits-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:30px;
}

.benefit-card{
background:white;
padding:30px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
text-align:center;
transition:0.3s;
}

.benefit-card:hover{
transform:translateY(-6px);
}

.benefit-icon{
font-size:30px;
color:#1E4DB7;
margin-bottom:15px;
}

.benefit-card h3{
margin-bottom:10px;
}

.benefit-card p{
font-size:14px;
color:#666;
}


/* PARTNERS */

.partners{
padding:90px 10%;
background:#f9fafb;
text-align:center;
}

.partners h2{
font-size:32px;
margin-bottom:40px;
}


/* SLIDER */

.partners-slider{
overflow:hidden;
position:relative;
}

.partners-track{
display:flex;
gap:30px;
animation:scrollPartners 25s linear infinite;
}


/* CARD RECTANGLE */

.partner-card{
min-width:160px;
height:90px;
background:white;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
box-shadow:0 8px 20px rgba(0,0,0,0.05);
padding:15px;
}

.partner-card img{
max-width:100%;
max-height:60px;
object-fit:contain;
opacity:0.85;
transition:0.3s ease;
}

.partner-card:hover img{
opacity:1;
transform:scale(1.08);
}


/* ANIMATION */

@keyframes scrollPartners{

0%{
transform:translateX(0);
}

100%{
transform:translateX(-50%);
}

}


/* FORM */

.partner-form-section{
padding:80px 10%;
background:#f9fafb;
}

.partner-form{
max-width:600px;
margin:auto;
background:white;
padding:40px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

.partner-form h3{
text-align:center;
margin-bottom:20px;
}

.form-group{
margin-bottom:15px;
}

.form-group input,
.form-group textarea{
width:100%;
padding:12px;
border:1px solid #ddd;
border-radius:8px;
font-size:14px;
}

.form-group textarea{
height:120px;
resize:none;
}

.partner-btn{
background:#1E4DB7;
color:white;
border:none;
padding:12px 25px;
border-radius:30px;
cursor:pointer;
font-weight:600;
display:block;
margin:auto;
}

.partner-btn:hover{
background:#163c8f;
}

/* POPUP SUCCESS */

.popup-overlay{
position:fixed;
top:0;
left:0;
width:100%;
height:100%;
background:rgba(0,0,0,0.45);
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
max-width:420px;
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
line-height:1.6;
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
transform:scale(0.85);
}
to{
opacity:1;
transform:scale(1);
}
}
/* =========================
RESPONSIVE PARTNER PAGE
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

  .partner-intro{
    padding:70px 5%;
  }

  .partner-benefits{
    padding:70px 5%;
  }

  .partners{
    padding:70px 5%;
  }

  .partner-form-section{
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

  .partner-intro h2{
    font-size:24px;
  }

  .partner-intro p{
    font-size:15px;
  }

  /* BENEFITS → 2 colonnes */
  .benefits-grid{
    grid-template-columns:repeat(2,1fr);
    gap:20px;
  }

  .benefit-card{
    padding:20px;
  }

  .benefit-card h3{
    font-size:16px;
  }

  .benefit-card p{
    font-size:13px;
  }

  /* PARTNERS SLIDER */
  .partner-card{
    min-width:130px;
    height:75px;
  }

  .partner-card img{
    max-height:45px;
  }

  /* FORM */
  .partner-form{
    padding:25px;
  }

  .partner-form h3{
    font-size:20px;
  }

  .form-group input,
  .form-group textarea{
    font-size:14px;
    padding:11px;
  }

  .partner-btn{
    width:100%;
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

  .partner-intro{
    padding:50px 5%;
  }

  .partner-intro h2{
    font-size:20px;
  }

  .partner-intro p{
    font-size:14px;
  }

  /* BENEFITS → 1 colonne */
  .benefits-grid{
    grid-template-columns:1fr;
  }

  .benefit-card{
    padding:18px;
  }

  /* SLIDER */
  .partner-card{
    min-width:110px;
    height:65px;
  }

  .partner-card img{
    max-height:40px;
  }

  .partners{
    padding:50px 5%;
  }

  /* FORM */
  .partner-form-section{
    padding:50px 5%;
  }

  .partner-form{
    padding:20px;
  }

  .partner-form h3{
    font-size:18px;
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
.form-error{
  color:#dc2626;
  font-size:14px;
  margin-bottom:15px;
  text-align:center;
}
`

// Logos des partenaires (dossier assets/images/partenaires)
const partnerLogos = [
  '1.png', '2.png', '3.png', '4.png', '5.png', '6.jpg', '7.png',
  '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png',
]

export default function Partner() {
  const [form, setForm] = useState({ organization: '', contactName: '', email: '', phone: '', message: '' })
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

    const { error: insertError } = await supabase.from('partners').insert({
      organization: form.organization,
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
    setForm({ organization: '', contactName: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <style>{css}</style>

      {/* HERO */}

      <section className="page-hero">

        <h1>Devenir partenaire du concours Chrétien Épelle-Moi</h1>

        <p>
          Associez votre organisation à une initiative éducative
          et spirituelle qui contribue à la formation
          et à l’épanouissement de la jeunesse.
        </p>

      </section>



      {/* INTRO */}

      <section className="partner-intro">

        <h2>Pourquoi devenir partenaire ?</h2>

        <p>
          En devenant partenaire du concours <strong>Chrétien Épelle-Moi</strong>,
          vous contribuez activement à une initiative qui favorise
          l’épanouissement intellectuel, culturel et spirituel des jeunes.
          Votre organisation s’associe ainsi à un projet éducatif,
          communautaire et porteur de valeurs positives.
        </p>

      </section>



      {/* BENEFITS */}

      <section className="partner-benefits">

        <div className="benefits-grid">


          <div className="benefit-card">

            <div className="benefit-icon">
              <i className="fa-solid fa-handshake"></i>
            </div>

            <h3>Soutenir l’éducation</h3>

            <p>
              Contribuez à promouvoir l’apprentissage,
              la maîtrise de la langue française,
              la culture générale et le développement
              des compétences des jeunes.
            </p>

          </div>



          <div className="benefit-card">

            <div className="benefit-icon">
              <i className="fa-solid fa-bullhorn"></i>
            </div>

            <h3>Visibilité</h3>

            <p>
              Bénéficiez d’une visibilité sur
              les supports de communication,
              les événements et les activités
              organisées dans le cadre du concours.
            </p>

          </div>



          <div className="benefit-card">

            <div className="benefit-icon">
              <i className="fa-solid fa-people-group"></i>
            </div>

            <h3>Impact social</h3>

            <p>
              Participez à une initiative qui
              contribue à la formation des jeunes
              et au renforcement des valeurs
              citoyennes et communautaires.
            </p>

          </div>



          <div className="benefit-card">

            <div className="benefit-icon">
              <i className="fa-solid fa-heart"></i>
            </div>

            <h3>Engagement</h3>

            <p>
              Affirmez l’engagement de votre
              organisation en faveur de la jeunesse,
              de l’éducation et des valeurs
              chrétiennes et sociales.
            </p>

          </div>


        </div>

      </section>



      {/* PARTNERS */}

      <section className="partners">

        <div className="partners-container">

          <h2>Ils nous font confiance</h2>


          <div className="partners-slider">

            <div className="partners-track">

              {partnerLogos.map((logo) => (
                <div className="partner-card" key={logo}>
                  <img src={asset(`partenaires/${logo}`)} />
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>



      {/* FORM */}

      <section className="partner-form-section">

        <div className="partner-form">

          <h3>Proposer un partenariat</h3>


          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input type="text" name="organization" placeholder="Nom de l'organisation ou de l'entreprise" required value={form.organization} onChange={handleChange} />
            </div>

            <div className="form-group">
              <input type="text" name="contactName" placeholder="Nom du responsable ou du contact" value={form.contactName} onChange={handleChange} />
            </div>

            <div className="form-group">
              <input type="email" name="email" placeholder="Adresse email" required value={form.email} onChange={handleChange} />
            </div>

            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Numéro de téléphone (obligatoire)"
                pattern="[0-9]+"
                inputMode="numeric"
                required
                value={form.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <textarea name="message" placeholder="Décrivez votre proposition de partenariat ou votre message" required value={form.message} onChange={handleChange}></textarea>
            </div>

            {error && <p className="form-error">{error}</p>}

            <button className="partner-btn" type="submit" disabled={sending}>
              {sending ? 'Envoi en cours...' : 'Envoyer la demande'}
            </button>

          </form>

        </div>

      </section>

      {success && (

        <div className="popup-overlay">

          <div className="popup-box">

            <div className="popup-icon">
              <i className="fa-solid fa-circle-check"></i>
            </div>

            <h3>Demande envoyée avec succès</h3>

            <p>
              Merci pour votre proposition de partenariat.
              Notre équipe analysera votre demande et
              vous contactera prochainement.
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

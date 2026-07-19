import { Link } from 'react-router-dom'
import { asset } from '../lib/assets.js'

const css = `
/* HERO */

.donation-hero{
background:linear-gradient(135deg,#1E4DB7,#2563eb);
padding:100px 10%;
text-align:center;
color:white;
}

.donation-hero h1{
font-size:42px;
margin-bottom:15px;
}

.donation-hero p{
font-size:18px;
max-width:750px;
margin:auto;
color:#e5e7eb;
line-height:1.7;
}


/* SECTION */

.donation-section{
padding:90px 10%;
background:#f8fafc;
}

.donation-container{
display:flex;
gap:40px;
flex-wrap:wrap;
align-items:flex-start;
}


/* LEFT */

.donation-info{
flex:1;
}

.donation-info h2{
font-size:32px;
margin-bottom:20px;
}

.donation-info p{
color:#555;
line-height:1.8;
margin-bottom:20px;
}

.donation-box{
background:white;
padding:30px;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
margin-bottom:20px;
}

.donation-box h3{
margin-bottom:15px;
font-size:22px;
}

.payment-method{
display:flex;
align-items:center;
justify-content:space-between;
padding:18px;
border:1px solid #eee;
border-radius:12px;
margin-bottom:15px;
transition:0.3s;
}

.payment-method:hover{
transform:translateY(-3px);
box-shadow:0 10px 20px rgba(0,0,0,0.05);
}

.payment-left{
display:flex;
align-items:center;
gap:15px;
}

.payment-logo{
  width:60px;
  height:60px;

  background:#fff;
  border-radius:14px;

  display:flex;
  align-items:center;
  justify-content:center;

  padding:10px;

  border:1px solid #edf0f5;

  box-shadow:0 4px 15px rgba(0,0,0,0.04);
}

.payment-logo img{
  width:100%;
  height:100%;
  object-fit:contain;
}

.payment-text h4{
margin-bottom:5px;
}

.payment-text p{
margin:0;
font-size:14px;
color:#666;
}

.payment-number{
font-size:18px;
font-weight:700;
color:#111;
}


/* RIGHT */

.donation-card{
flex:1;
background:white;
padding:40px;
border-radius:16px;
box-shadow:0 15px 40px rgba(0,0,0,0.06);
}

.donation-card h3{
font-size:28px;
margin-bottom:20px;
}

.donation-card p{
color:#666;
margin-bottom:25px;
line-height:1.7;
}

.donation-list{
list-style:none;
margin-bottom:25px;
}

.donation-list li{
margin-bottom:12px;
display:flex;
align-items:center;
gap:10px;
color:#444;
}

.donation-list i{
color:#22c55e;
}

.support-btn{
display:inline-block;
background:#1E4DB7;
color:white;
padding:14px 28px;
border-radius:30px;
font-weight:600;
transition:0.3s;
}

.support-btn:hover{
background:#163c8f;
transform:translateY(-2px);
}


/* RESPONSIVE */

@media(max-width:768px){

.donation-hero{
padding:70px 5%;
}

.donation-hero h1{
font-size:28px;
}

.donation-hero p{
font-size:15px;
}

.donation-section{
padding:60px 5%;
}

.donation-container{
flex-direction:column;
}

.donation-info h2{
font-size:24px;
}

.donation-card{
padding:25px;
}

.payment-method{
flex-direction:column;
align-items:flex-start;
gap:15px;
}

}
`

export default function Donation() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}

      <section className="donation-hero">

        <h1>Soutenez le concours Chrétien Épelle-Moi</h1>

        <p>
          Votre soutien nous aide à accompagner davantage de jeunes,
          organiser les prochaines éditions du concours
          et promouvoir les valeurs chrétiennes à travers l’éducation.
        </p>

      </section>



      {/* SECTION */}

      <section className="donation-section">

        <div className="donation-container">


          {/* LEFT */}

          <div className="donation-info">

            <h2>Faire un don</h2>

            <p>
              Chaque contribution compte.
              Vous pouvez soutenir notre mission
              en effectuant un don sécurisé via Flooz ou Mixx by Yas.
            </p>


            <div className="donation-box">

              <h3>Moyens de paiement disponibles</h3>


              {/* FLOOZ */}

              <div className="payment-method">

                <div className="payment-left">

                  <div className="payment-logo">
                    <img src={asset('flooz.png')} alt="Flooz" />
                  </div>

                  <div className="payment-text">
                    <h4>Flooz</h4>
                    <p>Transfert mobile Flooz</p>
                  </div>

                </div>

                <div className="payment-number">
                  +228 99 24 92 62
                </div>

              </div>


              {/* MIXX */}

              <div className="payment-method">

                <div className="payment-left">

                  <div className="payment-logo">
                    <img src={asset('mixx.png')} alt="Mixx by Yas" />
                  </div>

                  <div className="payment-text">
                    <h4>Mixx by Yas</h4>
                    <p>Paiement mobile Mixx</p>
                  </div>

                </div>

                <div className="payment-number">
                  +228 92 45 21 46
                </div>

              </div>

            </div>

          </div>



          {/* RIGHT */}

          <div className="donation-card">

            <h3>Pourquoi nous soutenir ?</h3>

            <p>
              À travers votre geste, vous devenez un soutien précieux pour
              des enfants et adolescents qui rêvent d’apprendre, de grandir
              et de briller positivement dans la société.
            </p>

            <ul className="donation-list">

              <li>
                <i className="fa-solid fa-circle-check"></i>
                Promouvoir l'évangélisation
              </li>

              <li>
                <i className="fa-solid fa-circle-check"></i>
                Récompenses pour les participants
              </li>

              <li>
                <i className="fa-solid fa-circle-check"></i>
                Encadrement des jeunes
              </li>

              <li>
                <i className="fa-solid fa-circle-check"></i>
                Développement du concours
              </li>

            </ul>

            <Link to="/contact" className="support-btn">
              Nous contacter
            </Link>

          </div>

        </div>

      </section>
    </>
  )
}

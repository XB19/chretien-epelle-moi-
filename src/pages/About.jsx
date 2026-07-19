import { Link } from 'react-router-dom'
import { asset } from '../lib/assets.js'
import Counter from '../components/Counter.jsx'

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


/* ABOUT STORY */

.about-story{
padding:80px 10%;
}

.about-grid{
display:flex;
align-items:center;
gap:60px;
flex-wrap:wrap;
}

.about-text{
flex:1;
}

.about-text h2{
font-size:32px;
margin-bottom:20px;
}

.about-text p{
line-height:1.8;
color:#555;
margin-bottom:15px;
}

.about-image{
flex:1;
}

.about-image img{
width:100%;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
}


/* VALUES */

.values{
padding:90px 10%;
background:#f9fafb;
text-align:center;
}

.values h2{
font-size:32px;
margin-bottom:40px;
}

.values-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:30px;
}

.value-card{
background:white;
padding:30px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
transition:0.3s;
}

.value-card:hover{
transform:translateY(-6px);
}

.value-card i{
font-size:28px;
color:#1E4DB7;
margin-bottom:15px;
}

.value-card h3{
margin-bottom:10px;
}

.value-card p{
font-size:14px;
color:#666;
}


/* CTA */

.about-cta{
padding:80px 10%;
text-align:center;
background:#1E4DB7;
color:white;
}

.about-cta h2{
margin-bottom:10px;
}

.about-cta p{
margin-bottom:25px;
color:#e5e7eb;
}

.about-btn{
background:#FFC107;
padding:12px 28px;
border-radius:30px;
text-decoration:none;
color:black;
font-weight:600;
}
/* =========================
RESPONSIVE ABOUT PAGE
========================= */

/* Tablettes */
@media (max-width:1024px){

  .page-hero{
    padding:80px 5%;
  }

  .page-hero h1{
    font-size:36px;
  }

  .page-hero p{
    font-size:17px;
  }

  .about-story{
    padding:70px 5%;
  }

  .about-grid{
    gap:40px;
  }

  .about-text h2{
    font-size:28px;
  }

  .values{
    padding:70px 5%;
  }

  .about-cta{
    padding:70px 5%;
  }

}

/* Mobile */
@media (max-width:768px){

  .page-hero{
    padding:60px 5%;
  }

  .page-hero h1{
    font-size:28px;
  }

  .page-hero p{
    font-size:16px;
  }

  /* STACK */
  .about-grid{
    flex-direction:column;
    text-align:center;
  }

  .about-text{
    order:2;
  }

  .about-image{
    order:1;
  }

  .about-text h2{
    font-size:24px;
  }

  .about-text p{
    font-size:15px;
  }

  .about-image img{
    margin-bottom:20px;
  }

  /* VALUES */
  .values h2{
    font-size:26px;
  }

  .value-card{
    padding:25px;
  }

  /* CTA */
  .about-cta h2{
    font-size:24px;
  }

  .about-cta p{
    font-size:15px;
  }

}

/* Très petits écrans */
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

  .about-story{
    padding:50px 5%;
  }

  .about-text h2{
    font-size:20px;
  }

  .about-text p{
    font-size:14px;
  }

  .values{
    padding:50px 5%;
  }

  .values h2{
    font-size:22px;
  }

  .value-card p{
    font-size:13px;
  }

  .about-cta{
    padding:50px 5%;
  }

  .about-cta h2{
    font-size:20px;
  }

  .about-btn{
    padding:10px 20px;
    font-size:14px;
  }

}

/* IMPACT */

.history-impact{
padding:90px 10%;
text-align:center;
}

.history-impact h2{
font-size:32px;
margin-bottom:30px;
}

.impact-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
gap:30px;
margin-top:40px;
}

.impact-card{
background:white;
padding:30px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

.impact-card h3{
font-size:28px;
color:#1E4DB7;
margin-bottom:10px;
}

.impact-card p{
color:#666;
font-size:14px;
}

/* RESPONSIVE */

@media (max-width:768px){

  .history-impact h2{
    font-size:26px;
  }

  .impact-card h3{
    font-size:24px;
  }

}

@media (max-width:480px){

  .history-impact{
    padding:50px 5%;
  }

  .history-impact h2{
    font-size:22px;
  }

  .impact-card p{
    font-size:13px;
  }

}
`

export default function About() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <section className="page-hero">

        <h1>À propos du concours Chrétien Épelle-Moi</h1>

        <p>
          Une initiative éducative et chrétienne qui accompagne
          les jeunes dans l’apprentissage, la foi et l’excellence.
        </p>

      </section>


      {/* QUI SOMMES-NOUS */}

      <section className="about-story">

        <div className="about-grid">

          <div className="about-text">

            <h2>Qui sommes-nous ?</h2>

            <p>
              Le concours <strong>Chrétien Épelle-Moi</strong> est une initiative éducative
              et spirituelle portée par une équipe de bénévoles engagés au service de la
              jeunesse et de l’Église.
            </p>

            <p>
              Ce projet vise à encourager les jeunes à développer leurs compétences en
              orthographe, en expression orale et en culture générale, tout en
              approfondissant leur connaissance de la foi chrétienne et des valeurs
              humaines.
            </p>

            <p>
              À travers différentes activités éducatives et ludiques telles que
              l’épellation de mots, les questions de culture générale, les débats et les
              plaidoiries, le concours offre aux jeunes un espace d’apprentissage,
              d’expression et d’épanouissement personnel.
            </p>

          </div>

          <div className="about-image">

            <img src={asset('about.jpg')} alt="Concours epelle moi" />

          </div>

        </div>

      </section>


      {/* VISION */}

      <section className="about-story">

        <div className="about-grid">

          <div className="about-image">

            <img src={asset('vision.jpg')} alt="Vision du projet" />

          </div>

          <div className="about-text">

            <h2>Notre vision</h2>
            <p>
              Notre vision est de contribuer à la formation d’une génération de jeunes
              épanouis, responsables et engagés, capables de mettre leurs talents au
              service de l’Église et de la société.
            </p>

            <p>
              À travers le concours Chrétien Épelle-Moi, nous souhaitons promouvoir
              l’amour de la lecture, la maîtrise de la langue française, le développement
              de l’esprit critique et l’approfondissement des valeurs chrétiennes.
            </p>

            <p>
              Nous aspirons à faire de ce concours une initiative éducative durable qui
              favorise la participation active des jeunes dans la vie paroissiale et
              communautaire tout en renforçant les liens entre les différentes
              communautés chrétiennes.
            </p>

          </div>

        </div>

      </section>


      {/* VALEURS */}

      <section className="values">

        <h2>Nos valeurs</h2>

        <div className="values-grid">

          <div className="value-card">

            <i className="fa-solid fa-book"></i>

            <h3>Apprentissage</h3>

            <p>
              Encourager les jeunes à développer leurs compétences en lecture,
              en orthographe et en expression afin de renforcer leur réussite
              éducative et leur confiance en eux.
            </p>

          </div>


          <div className="value-card">

            <i className="fa-solid fa-cross"></i>

            <h3>Foi</h3>

            <p>
              Promouvoir la connaissance des textes sacrés et des enseignements
              de l’Église afin d’accompagner les jeunes dans leur croissance
              spirituelle.
            </p>

          </div>


          <div className="value-card">

            <i className="fa-solid fa-people-group"></i>

            <h3>Communauté</h3>

            <p>
              Favoriser la fraternité, la collaboration et le partage entre les
              jeunes issus des paroisses, des communautés et des organisations
              chrétiennes.
            </p>

          </div>


          <div className="value-card">

            <i className="fa-solid fa-trophy"></i>

            <h3>Excellence</h3>

            <p>
              Encourager chaque participant à donner le meilleur de lui-même
              et à développer son potentiel intellectuel, culturel et spirituel.
            </p>

          </div>

        </div>

      </section>


      {/* IMPACT */}

      <section className="history-impact">

        <h2>L’impact du concours</h2>

        <p>
          Au fil des éditions, le concours Chrétien Épelle-Moi
          s’est imposé comme une initiative éducative et spirituelle
          qui contribue à la formation et à l’épanouissement des jeunes.
        </p>

        <div className="impact-grid">

          <div className="impact-card">
            <Counter target={500} />
            <p>Jeunes participants</p>
          </div>

          <div className="impact-card">
            <Counter target={4} />
            <p>Éditions organisées</p>
          </div>

          <div className="impact-card">
            <Counter target={20} />
            <p>Communautés et paroisses impliquées</p>
          </div>

          <div className="impact-card">
            <Counter target={10} />
            <p>Partenaires et soutiens</p>
          </div>

        </div>

      </section>


      {/* CALL TO ACTION */}

      <section className="about-cta">

        <h2>Rejoignez l’aventure Chrétien Épelle-Moi</h2>

        <p>
          Participez au concours ou devenez partenaire
          de cette initiative éducative et spirituelle.
        </p>

        <Link to="/contact" className="about-btn">
          Nous contacter
        </Link>

      </section>
    </>
  )
}

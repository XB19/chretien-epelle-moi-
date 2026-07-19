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


/* STORY */

.history-intro{
padding:80px 10%;
}

.history-grid{
display:flex;
gap:60px;
align-items:center;
flex-wrap:wrap;
}

.history-text{
flex:1;
}

.history-text h2{
font-size:32px;
margin-bottom:20px;
}

.history-text p{
color:#555;
line-height:1.8;
margin-bottom:15px;
}

.history-image{
flex:1;
}

.history-image img{
width:100%;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
}


/* TIMELINE */

.timeline{
padding:90px 10%;
background:#f9fafb;
}

.timeline h2{
text-align:center;
font-size:32px;
margin-bottom:60px;
}

.timeline-container{
max-width:900px;
margin:auto;
position:relative;
}

.timeline-container::before{
content:"";
position:absolute;
left:50%;
width:3px;
background:#1E4DB7;
top:0;
bottom:0;
transform:translateX(-50%);
}

.timeline-item{
display:flex;
justify-content:space-between;
margin-bottom:50px;
}

.timeline-content{
background:white;
padding:25px;
border-radius:10px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
width:45%;
}

.timeline-content h3{
color:#1E4DB7;
margin-bottom:10px;
}

.timeline-content p{
color:#555;
font-size:14px;
line-height:1.6;
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


/* CTA */

.history-cta{
padding:80px 10%;
text-align:center;
background:#1E4DB7;
color:white;
}

.history-cta p{
color:#e5e7eb;
margin-bottom:25px;
}

.history-btn{
background:#FFC107;
padding:12px 28px;
border-radius:30px;
text-decoration:none;
color:black;
font-weight:600;
}
/* =========================
RESPONSIVE HISTORY PAGE
========================= */

/* TABLETTE */
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

  .history-intro{
    padding:70px 5%;
  }

  .history-grid{
    gap:40px;
  }

  .history-text h2{
    font-size:28px;
  }

  .timeline{
    padding:70px 5%;
  }

  .history-impact{
    padding:70px 5%;
  }

  .history-cta{
    padding:70px 5%;
  }

}


/* MOBILE */
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

  /* GRID STACK */
  .history-grid{
    flex-direction:column;
    text-align:center;
  }

  .history-text{
    order:2;
  }

  .history-image{
    order:1;
  }

  .history-text h2{
    font-size:24px;
  }

  .history-text p{
    font-size:15px;
  }

  .history-image img{
    margin-bottom:20px;
  }

  /* ===== TIMELINE MOBILE (IMPORTANT) ===== */

  .timeline-container::before{
    left:20px;
    transform:none;
  }

  .timeline-item{
    flex-direction:column;
    align-items:flex-start;
  }

  .timeline-item div:last-child{
    display:none;
  }

  .timeline-content{
    width:100%;
    margin-left:40px;
  }

  /* IMPACT */
  .history-impact h2{
    font-size:26px;
  }

  .impact-card h3{
    font-size:24px;
  }

  /* CTA */
  .history-cta h2{
    font-size:24px;
  }

  .history-cta p{
    font-size:15px;
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

  .history-intro{
    padding:50px 5%;
  }

  .history-text h2{
    font-size:20px;
  }

  .history-text p{
    font-size:14px;
  }

  .timeline h2{
    font-size:22px;
  }

  .timeline-content p{
    font-size:13px;
  }

  .history-impact{
    padding:50px 5%;
  }

  .history-impact h2{
    font-size:22px;
  }

  .impact-card p{
    font-size:13px;
  }

  .history-cta{
    padding:50px 5%;
  }

  .history-cta h2{
    font-size:20px;
  }

  .history-btn{
    padding:10px 20px;
    font-size:14px;
  }

}
`

export default function History() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}

      <section className="page-hero">

        <h1>L’histoire du concours Chrétien Épelle-Moi</h1>

        <p>
          Découvrez l’origine et l’évolution de cette initiative éducative
          et spirituelle qui accompagne les jeunes dans le développement
          de leurs compétences intellectuelles, culturelles et de leur foi.
        </p>

      </section>



      {/* ORIGINE */}

      <section className="history-intro">

        <div className="history-grid">

          <div className="history-text">

            <h2>La naissance du projet</h2>

            <p>
              Le concours <strong>Chrétien Épelle-Moi</strong> est né de la volonté
              de contribuer à l’épanouissement intellectuel, culturel et spirituel
              des jeunes au sein des communautés chrétiennes.
            </p>

            <p>
              Face aux défis éducatifs et sociaux auxquels sont confrontés
              de nombreux jeunes, ce projet a été imaginé comme une initiative
              alliant apprentissage, foi et engagement communautaire.
            </p>

            <p>
              À travers des épreuves d’épellation, des questions de culture générale,
              des débats et des activités d’expression orale, le concours offre
              aux participants un cadre éducatif et stimulant qui favorise
              la confiance en soi, l’esprit d’équipe et la prise de parole en public.
            </p>

          </div>

          <div className="history-image">

            <img src={asset('history.jpg')} alt="Histoire du concours" />

          </div>

        </div>

      </section>



      {/* TIMELINE */}

      <section className="timeline">

        <h2>L’évolution du concours</h2>

        <div className="timeline-container">

          <div className="timeline-item">

            <div className="timeline-content">

              <h3>2020</h3>

              <p>
                Lancement de la première édition du concours Chrétien Épelle-Moi,
                avec la participation de jeunes issus de plusieurs paroisses
                et communautés chrétiennes.
              </p>

            </div>

            <div></div>

          </div>


          <div className="timeline-item">

            <div></div>

            <div className="timeline-content">

              <h3>2021</h3>

              <p>
                Organisation d’une nouvelle édition marquée par un intérêt
                grandissant des jeunes et une mobilisation plus importante
                des paroisses et des responsables communautaires.
              </p>

            </div>

          </div>


          <div className="timeline-item">

            <div className="timeline-content">

              <h3>2022</h3>

              <p>
                Le concours poursuit son développement avec la participation
                de nouvelles communautés et l’implication de partenaires
                engagés dans l’éducation et la promotion de la jeunesse.
              </p>

            </div>

            <div></div>

          </div>


          <div className="timeline-item">

            <div></div>

            <div className="timeline-content">

              <h3>2023</h3>

              <p>
                Une édition marquée par un fort enthousiasme des participants
                et une meilleure visibilité du concours au sein des communautés
                chrétiennes et des organisations de jeunesse.
              </p>

            </div>

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



      {/* CTA */}

      <section className="history-cta">

        <h2>Participez à la prochaine édition</h2>

        <p>
          Rejoignez l’aventure Chrétien Épelle-Moi
          et vivez une expérience éducative unique.
        </p>

        <Link to="/contact" className="history-btn">
          Nous contacter
        </Link>

      </section>
    </>
  )
}

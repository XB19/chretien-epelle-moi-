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

.page-hero-links{
display:flex;
gap:16px;
justify-content:center;
flex-wrap:wrap;
margin-top:30px;
}

.page-hero-links a{
background:rgba(255,255,255,0.12);
border:1px solid rgba(255,255,255,0.4);
color:white;
padding:10px 22px;
border-radius:30px;
font-weight:600;
text-decoration:none;
transition:0.3s;
}

.page-hero-links a:hover{
background:#FFC107;
border-color:#FFC107;
color:black;
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


/* PROGRAMME */

.programme-section{
padding:90px 10%;
background:#f9fafb;
}

.section-header{
text-align:center;
max-width:700px;
margin:0 auto 40px;
}

.section-header h2{
font-size:32px;
margin-bottom:12px;
}

.section-header p{
color:#666;
line-height:1.7;
}

.programme-table-wrap{
overflow-x:auto;
background:white;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

table.programme-table{
width:100%;
border-collapse:collapse;
min-width:650px;
}

.programme-table th{
background:#1E4DB7;
color:white;
text-align:left;
padding:16px 20px;
font-size:13px;
text-transform:uppercase;
letter-spacing:0.5px;
}

.programme-table td{
padding:16px 20px;
border-bottom:1px solid #eef0f4;
color:#444;
font-size:15px;
}

.programme-table tr:last-child td{
border-bottom:none;
}

.programme-table tr:hover td{
background:#f8fafc;
}

.section-note{
text-align:center;
color:#888;
font-size:13px;
margin-top:20px;
font-style:italic;
}


/* REGLEMENT */

.reglement-section{
padding:90px 10%;
}

.reglement-list{
max-width:850px;
margin:0 auto;
display:flex;
flex-direction:column;
gap:16px;
}

.reglement-item{
background:white;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
overflow:hidden;
}

.reglement-item summary{
cursor:pointer;
list-style:none;
padding:22px 26px;
font-weight:700;
font-size:17px;
color:#1E4DB7;
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
}

.reglement-item summary::-webkit-details-marker{
display:none;
}

.reglement-item summary .plus{
font-size:22px;
color:#1E4DB7;
transition:0.3s;
flex-shrink:0;
}

.reglement-item[open] summary .plus{
transform:rotate(45deg);
}

.reglement-item .reglement-sub{
font-size:13px;
font-weight:400;
color:#888;
display:block;
margin-top:4px;
}

.reglement-body{
padding:0 26px 26px;
color:#555;
line-height:1.8;
}

.reglement-body h4{
margin:16px 0 8px;
color:#111;
font-size:15px;
}

.reglement-body ul{
padding-left:20px;
}

.reglement-body li{
margin-bottom:6px;
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
RESPONSIVE CONCOURS PAGE
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

  .programme-section{
    padding:70px 5%;
  }

  .reglement-section{
    padding:70px 5%;
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

  /* PROGRAMME / REGLEMENT */
  .section-header h2{
    font-size:26px;
  }

  .reglement-item summary{
    padding:18px 20px;
    font-size:15px;
  }

  .reglement-body{
    padding:0 20px 20px;
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

  .section-header h2{
    font-size:22px;
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

const programme = [
  {
    etape: 'Lancement & inscriptions',
    periode: 'Janvier',
    activite: "Ouverture des inscriptions dans les paroisses et communautés partenaires",
    public: 'Tous niveaux',
  },
  {
    etape: 'Phase éliminatoire',
    periode: 'Mars',
    activite: 'Épreuves d’épellation et de culture générale au sein de chaque communauté',
    public: 'Tous niveaux',
  },
  {
    etape: 'Demi-finales',
    periode: 'Avril',
    activite: 'Débats, plaidoiries et épreuves d’expression orale',
    public: 'Candidats qualifiés',
  },
  {
    etape: 'Grande finale',
    periode: 'Mai',
    activite: 'Finale générale et cérémonie de remise des prix',
    public: 'Finalistes',
  },
]

const reglement = [
  {
    niveau: 'Niveau Initiation',
    tranche: 'CP – CE2 (6 à 9 ans)',
    conditions: [
      'Être inscrit via sa paroisse ou communauté partenaire',
      'Avoir l’âge requis au 1er janvier de l’année en cours',
    ],
    epreuves: [
      'Épellation de mots simples issus du dictionnaire',
      'Questions de culture générale chrétienne adaptées à l’âge',
    ],
    format: 'Épreuve orale individuelle, environ 5 minutes par candidat',
  },
  {
    niveau: 'Niveau Intermédiaire',
    tranche: 'CM1 – CM2 (10 à 11 ans)',
    conditions: [
      'Être inscrit via sa paroisse ou communauté partenaire',
      'Avoir réussi l’étape éliminatoire de sa communauté',
    ],
    epreuves: [
      'Épellation de mots issus de la Bible et du dictionnaire Larousse',
      'Culture générale sur le Togo et sur la foi chrétienne',
    ],
    format: 'Épreuve orale individuelle, environ 8 minutes par candidat',
  },
  {
    niveau: 'Niveau Collège',
    tranche: '6e – 3e (12 à 15 ans)',
    conditions: [
      'Être inscrit via sa paroisse ou communauté partenaire',
      'Avoir réussi l’étape éliminatoire de sa communauté',
    ],
    epreuves: [
      'Épellation de mots de niveau avancé',
      'Culture générale et questions bibliques',
      'Prise de parole en public sur un thème imposé',
    ],
    format: 'Épreuve mixte (orale et écrite), environ 12 minutes par candidat',
  },
  {
    niveau: 'Niveau Lycée',
    tranche: '2nde – Terminale (16 à 18 ans)',
    conditions: [
      'Être inscrit via sa paroisse ou communauté partenaire',
      'Avoir réussi l’étape éliminatoire de sa communauté',
    ],
    epreuves: [
      'Épellation de mots de niveau expert',
      'Débats et plaidoiries sur des thèmes de société et de foi',
      'Culture générale approfondie',
    ],
    format: 'Épreuve mixte (débat et épellation), environ 15 minutes par candidat',
  },
]

export default function Concours() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <section className="page-hero">

        <h1>Chrétien-Épelle-Moi</h1>

        <p>
          Une initiative éducative et chrétienne qui accompagne
          les jeunes dans l’apprentissage, la foi et l’excellence.
        </p>

        <div className="page-hero-links">
          <a href="#programme">Voir le programme</a>
          <a href="#reglement">Consulter le règlement</a>
        </div>

      </section>


      {/* QUI SOMMES-NOUS */}

      <section className="about-story">

        <div className="about-grid">

          <div className="about-text">

            <h2>Qui sommes-nous ?</h2>

            <p>
              <strong>Chrétien-Épelle-Moi</strong> est une initiative éducative
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

            <img src={asset('about.jpg')} alt="Chrétien-Épelle-Moi" />

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
              À travers Chrétien-Épelle-Moi, nous souhaitons promouvoir
              l’amour de la lecture, la maîtrise de la langue française, le développement
              de l’esprit critique et l’approfondissement des valeurs chrétiennes.
            </p>

            <p>
              Nous aspirons à faire de cette initiative un label éducatif durable qui
              favorise la participation active des jeunes dans la vie paroissiale et
              communautaire tout en renforçant les liens entre les différentes
              communautés chrétiennes.
            </p>

          </div>

        </div>

      </section>


      {/* PROGRAMME */}

      <section className="programme-section" id="programme">

        <div className="section-header">
          <h2>Programme</h2>
          <p>
            Les grandes étapes du concours, de l’ouverture des inscriptions
            jusqu’à la grande finale.
          </p>
        </div>

        <div className="programme-table-wrap">

          <table className="programme-table">

            <thead>
              <tr>
                <th>Étape</th>
                <th>Période</th>
                <th>Activité</th>
                <th>Public concerné</th>
              </tr>
            </thead>

            <tbody>
              {programme.map((ligne) => (
                <tr key={ligne.etape}>
                  <td><strong>{ligne.etape}</strong></td>
                  <td>{ligne.periode}</td>
                  <td>{ligne.activite}</td>
                  <td>{ligne.public}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        <p className="section-note">
          Programme indicatif de l’édition à venir — les dates précises seront
          communiquées lors de l’ouverture des inscriptions.
        </p>

      </section>


      {/* REGLEMENT */}

      <section className="reglement-section" id="reglement">

        <div className="section-header">
          <h2>Règlement</h2>
          <p>
            Chaque niveau du concours a ses propres conditions de participation,
            épreuves et format. Cliquez sur un niveau pour en voir le détail.
          </p>
        </div>

        <div className="reglement-list">

          {reglement.map((niveau) => (
            <details className="reglement-item" key={niveau.niveau}>

              <summary>
                <span>
                  {niveau.niveau}
                  <span className="reglement-sub">{niveau.tranche}</span>
                </span>
                <span className="plus">+</span>
              </summary>

              <div className="reglement-body">

                <h4>Conditions de participation</h4>
                <ul>
                  {niveau.conditions.map((item) => <li key={item}>{item}</li>)}
                </ul>

                <h4>Épreuves</h4>
                <ul>
                  {niveau.epreuves.map((item) => <li key={item}>{item}</li>)}
                </ul>

                <h4>Format</h4>
                <p>{niveau.format}</p>

              </div>

            </details>
          ))}

        </div>

        <p className="section-note">
          Règlement indicatif — la version définitive sera publiée avant
          l’ouverture des inscriptions de chaque édition.
        </p>

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
          Au fil des éditions, Chrétien-Épelle-Moi
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

        <h2>Rejoignez l’aventure Chrétien-Épelle-Moi</h2>

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

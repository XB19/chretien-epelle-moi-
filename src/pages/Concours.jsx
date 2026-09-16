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


/* MOT DU FONDATEUR */

.founder-section{
padding:60px 10% 10px;
text-align:center;
}

.founder-quote{
max-width:760px;
margin:0 auto;
font-size:20px;
font-style:italic;
color:#333;
line-height:1.7;
}

.founder-quote i{
display:block;
color:#1E4DB7;
font-size:26px;
margin-bottom:14px;
}

.founder-quote span{
display:block;
margin-top:16px;
font-size:14px;
font-style:normal;
font-weight:600;
color:#888;
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

.about-text h3{
font-size:20px;
margin:20px 0 8px;
color:#1E4DB7;
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


/* PILIERS */

.piliers-section{
padding:90px 10%;
background:#f9fafb;
}

.piliers-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:30px;
margin-top:40px;
}

.pilier-card{
background:white;
padding:30px;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.06);
border-top:4px solid #1E4DB7;
}

.pilier-card i{
font-size:26px;
color:#1E4DB7;
margin-bottom:14px;
}

.pilier-card h3{
margin-bottom:12px;
font-size:19px;
}

.pilier-card ul{
padding-left:18px;
color:#555;
font-size:14px;
line-height:1.7;
}

.pilier-card li{
margin-bottom:8px;
}


/* PROGRAMME */

.programme-section{
padding:90px 10%;
}

.section-header{
text-align:center;
max-width:750px;
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
min-width:700px;
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
font-size:14px;
vertical-align:top;
}

.programme-table tr:last-child td{
border-bottom:none;
}

.programme-table tr:hover td{
background:#f8fafc;
}

.edition-box{
max-width:900px;
margin:30px auto 0;
background:white;
border-radius:14px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
padding:30px 34px;
border-left:5px solid #FFC107;
}

.edition-box h3{
margin-bottom:10px;
color:#1E4DB7;
font-size:20px;
}

.edition-box p{
color:#555;
line-height:1.7;
margin-bottom:10px;
}

.edition-box p:last-child{
margin-bottom:0;
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
background:#f9fafb;
}

.reglement-list{
max-width:880px;
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
margin:18px 0 8px;
color:#111;
font-size:15px;
}

.reglement-body h4:first-child{
margin-top:0;
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

/* IMPACT */

.history-impact{
padding:90px 10%;
text-align:center;
background:#f9fafb;
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

  .piliers-section{
    padding:70px 5%;
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

  .history-impact{
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

  .founder-quote{
    font-size:17px;
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

  .edition-box{
    padding:24px;
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

  /* IMPACT */
  .history-impact h2{
    font-size:26px;
  }

  .impact-card h3{
    font-size:24px;
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

  .history-impact{
    padding:50px 5%;
  }

  .history-impact h2{
    font-size:22px;
  }

  .impact-card p{
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
`

const programme = [
  {
    phase: 'Phase de classement',
    description: 'Voting du public, épreuve écrite (religieuse et civique) et épreuve d’art oratoire.',
    ponderation: 'Voting 30 % · Écrit 70 % (+ art oratoire noté à part)',
    qualification: 'Équipes qualifiées : un multiple de 4',
  },
  {
    phase: 'Phase de poule',
    description: 'Face-à-face en quart de finale : 5 manches (épellation, vrai/faux, reconstitution, questions à thème, à l’inverse).',
    ponderation: '—',
    qualification: '4 meilleures équipes → demi-finale',
  },
  {
    phase: 'Demi-finale',
    description: 'Débats thématiques religieux entre les 4 meilleures équipes.',
    ponderation: 'Jury 70 % · Voting 30 %',
    qualification: '2 finalistes + 1 troisième (meilleur perdant)',
  },
  {
    phase: 'Phase finale',
    description: 'Quiz spécial, manches (épellation, vrai/faux, reconstitution, case vide) et présentation (Dogme & Projet).',
    ponderation: 'Face-à-face 100 %',
    qualification: 'Champion et deuxième de l’édition',
  },
]

const piliers = [
  {
    icon: 'fa-award',
    titre: 'Évènements & Compétitions Culturelles',
    items: [
      'Concours d’art oratoire & culture générale : maîtrise de la langue française, vocabulaire spécialisé et culture biblique/catéchétique.',
      'Arts & expressions : festivals et concours de chant, danse et théâtre.',
    ],
  },
  {
    icon: 'fa-church',
    titre: 'Tourisme Chrétien & Événementiel',
    items: [
      'Tourisme spirituel et culturel : pèlerinages, sorties de détente chrétienne, visites patrimoniales et découverte des histoires paroissiales.',
      'Assistance & régie événementielle : ingénierie logistique, technique et organisationnelle pour les événements portés par des groupements paroissiaux ou des partenaires.',
    ],
  },
  {
    icon: 'fa-chalkboard-user',
    titre: 'Formation & Renforcement de Capacités',
    items: [
      'Ateliers pratiques : prise de parole en public, leadership chrétien, expression oratoire, gestion de projets.',
      'Séminaires d’orientation académique, de développement personnel et d’éthique professionnelle ancrés dans les valeurs de l’Évangile.',
    ],
  },
  {
    icon: 'fa-seedling',
    titre: 'Entrepreneuriat & Dynamisation Paroissiale',
    items: [
      'Promotion de l’entrepreneuriat : incitation, coaching et accompagnement des initiatives économiques des jeunes.',
      'Mise en valeur des paroisses : autonomisation financière et modernisation des canaux de communication avec les fidèles.',
    ],
  },
]

const reglement = [
  {
    phase: 'Phase de classement',
    resume: 'Détermine la composition des poules à travers trois étapes complémentaires.',
    sections: [
      {
        titre: 'Voting en ligne — 30 % de la note',
        items: [
          'TikTok : votes gratuits via les « J’aime » sur une vidéo de présentation (3 à 5 minutes) — sert de bonus d’encouragement de 0 à 10 points selon le nombre de mentions et la qualité de la présentation.',
          'PAYZY : votes payants à 100 F CFA le vote, sur une image officielle de l’équipe — détermine la note principale, convertie en pourcentage selon la part de votes obtenus par équipe.',
          'Les résultats du voting sont publiés à la clôture de la période de vote et intégrés au classement général.',
        ],
      },
      {
        titre: 'Épreuve écrite — 70 % de la note',
        items: [
          'Épreuve religieuse : 2 membres par équipe répondent à des questions sur la foi, la liturgie et la vie de l’Église (1h à 2h).',
          'Épreuve civique : 2 membres par équipe répondent à des questions d’éducation civique, morale, histoire, droit, institutions et culture du Togo (1h à 2h).',
          'Thèmes et catégories de questions communiqués au plus tard 5 jours avant la compétition.',
          'Évaluation : maîtrise des connaissances, cohérence et précision des réponses, qualité de l’expression écrite.',
        ],
      },
      {
        titre: 'Épreuve d’art oratoire',
        items: [
          'Présentation individuelle : chaque équipe désigne un représentant unique, qui tire au sort un sous-thème le jour de l’épreuve (thème général communiqué 5 jours avant).',
          '5 minutes de présentation puis 5 minutes de questions du jury.',
          'Évaluation : pertinence de l’argumentation, structure du discours, qualité du langage et de la diction, présence scénique.',
          'Note maximale : 20 points, intégrée au classement final des équipes.',
        ],
      },
      {
        titre: 'Jury & qualification',
        items: [
          'Jury : un animateur, un juge principal, un rapporteur (appui possible d’un observateur technique pour le suivi des notes ou le chronométrage).',
          'Le nombre d’équipes qualifiées à l’issue de cette phase doit impérativement être un multiple de 4, pour une répartition équitable en poules.',
        ],
      },
    ],
  },
  {
    phase: 'Phase de poule',
    resume: 'Face-à-face en quart de finale, préalable aux débats thématiques de la demi-finale.',
    sections: [
      {
        titre: 'Le face-à-face (quart de finale)',
        items: [
          '3 membres actifs par équipe, sous la conduite d’un animateur — 45 minutes maximum par confrontation.',
          'Remplacements possibles à tout moment, à condition d’en informer le jury avant la manche suivante.',
          'Confrontations les samedis ou dimanches, selon le programme arrêté par le comité d’organisation.',
        ],
      },
      {
        titre: 'Les 5 manches',
        items: [
          'Épellation',
          'Vrai ou Faux',
          'Reconstitution',
          'Questions directes à thème',
          'À l’inverse',
        ],
      },
      {
        titre: 'Évaluation',
        items: [
          'Maîtrise des connaissances ; cohérence et exactitude des réponses.',
          'Esprit d’équipe et respect du temps imparti ; clarté et qualité d’expression orale.',
          'Un barème de points précis est communiqué avant la première rencontre.',
        ],
      },
    ],
  },
  {
    phase: 'Demi-finale',
    resume: 'Débats thématiques religieux entre les 4 meilleures équipes issues des poules.',
    sections: [
      {
        titre: 'Organisation',
        items: [
          'Se tiennent les samedis ; les débats sont enregistrés pour diffusion sur les réseaux sociaux.',
          'Une formation à l’art oratoire et à la gestion d’un débat est organisée pour les équipes qualifiées.',
          'Thèmes communiqués 2 semaines avant chaque confrontation ; le comité fixe les équipes adverses, l’ordre de passage et les positions.',
        ],
      },
      {
        titre: 'Déroulement du débat',
        items: [
          'Introduction et positionnement du thème',
          'Argumentation principale',
          'Contre-argumentation',
          'Conclusion synthétique',
        ],
      },
      {
        titre: 'Notation — Jury 70 % / Voting 30 %',
        items: [
          'Jury : esprit d’équipe et répartition équitable de la parole, clarté et pertinence des arguments, qualité du langage et éloquence.',
          'Voting : période de 14 jours (clôture un dimanche), votes payants PAYZY à 100 F CFA le vote, image officielle par équipe.',
        ],
      },
      {
        titre: 'Qualification & jury',
        items: [
          'Les vainqueurs de chaque débat se qualifient directement pour la grande finale.',
          'Pas de confrontation pour la 3ᵉ place : la meilleure équipe perdante est automatiquement classée 3ᵉ.',
          'Jury : un animateur, un juge principal, un juge adjoint, un rapporteur, un rapporteur adjoint.',
        ],
      },
    ],
  },
  {
    phase: 'Phase finale',
    resume: 'Une seule soirée de face-à-face pour désigner le Grand Champion de l’édition.',
    sections: [
      {
        titre: 'Quiz spécial (introduction)',
        items: [
          '2 membres actifs par équipe — 6 minutes de questions directes après le choix d’un thème.',
          '2 jokers par équipe permettant de solliciter l’aide du public (1 minute chacun).',
          'Évalué sur la vitesse, la pertinence et la clarté des réponses.',
        ],
      },
      {
        titre: 'Les manches (corps de l’épreuve)',
        items: [
          '3 membres actifs par équipe ; remplacements possibles avant le début d’une manche, avec l’accord du jury.',
          'Épellation, Vrai ou Faux, Reconstitution, Case vide.',
        ],
      },
      {
        titre: 'Présentation (conclusion)',
        items: [
          '1 membre pour l’épreuve de Dogme, 2 membres pour l’épreuve de Projet.',
          'Aucun remplacement possible une fois la manche commencée.',
        ],
      },
      {
        titre: 'Notation, jury & remise des prix',
        items: [
          'Le face-à-face compte pour 100 % de la note finale ; en cas d’égalité parfaite, des questions supplémentaires départagent les équipes.',
          'Jury : un animateur, un prononceur principal et un adjoint, un juge principal et un adjoint, un rapporteur.',
          'La remise des prix a lieu au cours d’une célébration eucharistique.',
        ],
      },
    ],
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
          Un label d’accompagnement, d’organisation et de certification
          d’initiatives chrétiennes, dont le concours annuel est la vitrine.
        </p>

        <div className="page-hero-links">
          <a href="#piliers">Nos piliers</a>
          <a href="#programme">Voir le programme</a>
          <a href="#reglement">Consulter le règlement</a>
        </div>

      </section>


      {/* MOT DU FONDATEUR */}

      <section className="founder-section">

        <div className="founder-quote">
          <i className="fa-solid fa-quote-left"></i>
          Accompagner la jeunesse chrétienne, c’est lui donner les moyens de
          révéler ses talents tout en restant ancrée dans la foi, au service
          de sa communauté et de sa paroisse.
          <span>— L’équipe dirigeante de Chrétien-Épelle-Moi</span>
        </div>

      </section>


      {/* QUI SOMMES-NOUS */}

      <section className="about-story">

        <div className="about-grid">

          <div className="about-text">

            <h2>Qui sommes-nous ?</h2>

            <p>
              <strong>Chrétien-Épelle-Moi</strong> est un label d’accompagnement,
              d’organisation et de certification d’initiatives chrétiennes. Il agit
              comme une caution d’excellence et de crédibilité pour dynamiser
              l’engagement des fidèles et valoriser les projets communautaires.
            </p>

            <p>
              Il est né d’une volonté claire : créer un cadre d’excellence, de
              confiance et d’accompagnement pour dynamiser la vie paroissiale,
              révéler les talents des jeunes chrétiens et promouvoir
              l’entrepreneuriat communautaire.
            </p>

            <p>
              Au Togo, le paysage socio-éducatif et pastoral est marqué par un
              besoin croissant d’initiatives associant l’excellence académique,
              la rigueur linguistique, la formation théologique et l’engagement
              citoyen. Le label s’affirme comme une structure d’encadrement, de
              certification et de production culturelle au service des paroisses
              et des mouvements de jeunesse.
            </p>

          </div>

          <div className="about-image">

            <img src={asset('about.jpg')} alt="Chrétien-Épelle-Moi" />

          </div>

        </div>

      </section>


      {/* VISION & MISSION */}

      <section className="about-story">

        <div className="about-grid">

          <div className="about-image">

            <img src={asset('vision.jpg')} alt="Vision du projet" />

          </div>

          <div className="about-text">

            <h2>Notre vision, notre mission</h2>

            <h3>Notre vision</h3>
            <p>
              Une jeunesse chrétienne épanouie, formée, entreprenante et
              pleinement engagée dans la vie de l’Église et de la société.
            </p>

            <h3>Notre mission</h3>
            <p>
              Encadrer, concevoir et promouvoir des activités culturelles,
              éducatives, spirituelles et socio-économiques au sein des
              paroisses et des communautés.
            </p>

          </div>

        </div>

      </section>


      {/* PILIERS */}

      <section className="piliers-section" id="piliers">

        <div className="section-header">
          <h2>Nos 4 piliers d’intervention</h2>
          <p>
            L’action opérationnelle du label repose sur quatre piliers
            stratégiques, conçus pour couvrir l’ensemble des besoins
            d’épanouissement de la jeunesse.
          </p>
        </div>

        <div className="piliers-grid">

          {piliers.map((pilier) => (
            <div className="pilier-card" key={pilier.titre}>

              <i className={`fa-solid ${pilier.icon}`}></i>

              <h3>{pilier.titre}</h3>

              <ul>
                {pilier.items.map((item) => <li key={item}>{item}</li>)}
              </ul>

            </div>
          ))}

        </div>

      </section>


      {/* PROGRAMME */}

      <section className="programme-section" id="programme">

        <div className="section-header">
          <h2>Programme</h2>
          <p>
            Le concours Chrétien-Épelle-Moi constitue la vitrine annuelle
            majeure du label : un parcours d’émulation intellectuelle et
            spirituelle qui réunit les jeunes issus de multiples paroisses,
            en quatre grandes phases.
          </p>
        </div>

        <div className="programme-table-wrap">

          <table className="programme-table">

            <thead>
              <tr>
                <th>Phase</th>
                <th>Ce qui s’y joue</th>
                <th>Pondération</th>
                <th>Qualification</th>
              </tr>
            </thead>

            <tbody>
              {programme.map((ligne) => (
                <tr key={ligne.phase}>
                  <td><strong>{ligne.phase}</strong></td>
                  <td>{ligne.description}</td>
                  <td>{ligne.ponderation}</td>
                  <td>{ligne.qualification}</td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

        <div className="edition-box">

          <h3>Édition 2025 — 8 paroisses en lice</h3>

          <p>
            Après une première édition inaugurale, l’édition 2025 s’est déployée
            à travers un parcours de qualification structuré impliquant
            8 paroisses : phases de sélection locale et entraînements, voting
            populaire (en ligne et par SMS) pour mesurer l’adhésion des
            communautés, puis demi-finales opposant les 4 meilleures équipes
            qualifiées.
          </p>

          <p>
            La grande finale, organisée sur le site de la Paroisse Saint Kizito
            de Tokoin Doumasséssé et retransmise à la télévision, a opposé la
            Paroisse Saint Ignace de Loyola d’Agoè Logopé à la Paroisse Sainte
            Croix de Sanguéra.
          </p>

        </div>

        <p className="section-note">
          Le calendrier détaillé de la prochaine édition sera communiqué par
          le comité d’organisation lors de l’ouverture des inscriptions.
        </p>

      </section>


      {/* REGLEMENT */}

      <section className="reglement-section" id="reglement">

        <div className="section-header">
          <h2>Règlement</h2>
          <p>
            Le règlement encadre chacune des quatre phases du concours.
            Cliquez sur une phase pour en consulter le détail.
          </p>
        </div>

        <div className="reglement-list">

          {reglement.map((phase) => (
            <details className="reglement-item" key={phase.phase}>

              <summary>
                <span>
                  {phase.phase}
                  <span className="reglement-sub">{phase.resume}</span>
                </span>
                <span className="plus">+</span>
              </summary>

              <div className="reglement-body">

                {phase.sections.map((section) => (
                  <div key={section.titre}>
                    <h4>{section.titre}</h4>
                    <ul>
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}

              </div>

            </details>
          ))}

        </div>

        <p className="section-note">
          Toute réclamation doit être adressée immédiatement au chef de jury
          (à la fin de la manche concernée ou dans la minute suivant
          l’incident) ; sa décision est définitive et sans appel. Le comité
          d’organisation se réserve la possibilité d’apporter des précisions
          ou ajouts au présent règlement.
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

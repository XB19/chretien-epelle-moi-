import { Link } from 'react-router-dom'
import { asset } from '../lib/assets.js'

const css = `
/* =========================
HERO
========================= */

.page-hero{
  position:relative;
  overflow:hidden;
  background:linear-gradient(135deg,#1E4DB7,#2563eb);
  padding:110px 10% 100px;
  text-align:center;
  color:white;
}

.page-hero::before{
  content:"";
  position:absolute;
  top:-120px;
  right:-120px;
  width:320px;
  height:320px;
  background:rgba(255,255,255,0.08);
  border-radius:50%;
}

.page-hero::after{
  content:"";
  position:absolute;
  bottom:-100px;
  left:-100px;
  width:260px;
  height:260px;
  background:rgba(255,255,255,0.05);
  border-radius:50%;
}

.page-hero h1{
  position:relative;
  z-index:2;
  font-size:50px;
  margin-bottom:18px;
  font-weight:700;
  line-height:1.2;
}

.page-hero p{
  position:relative;
  z-index:2;
  font-size:18px;
  color:#e5e7eb;
  max-width:760px;
  margin:auto;
  line-height:1.8;
}


/* =========================
INTRO
========================= */

.team-intro{
  padding:90px 10% 20px;
  text-align:center;
  background:white;
}

.team-intro h2{
  font-size:36px;
  margin-bottom:18px;
  color:#111827;
}

.team-intro p{
  max-width:760px;
  margin:auto;
  color:#64748b;
  line-height:1.9;
  font-size:16px;
}


/* =========================
TEAM SECTION
========================= */

.team-section{
  padding:70px 10% 100px;
  background:#f8fafc;
}

.team-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
  gap:35px;
}


/* =========================
CARD
========================= */

.team-card{
  position:relative;
  overflow:hidden;

  background:white;
  padding:35px 30px;

  border-radius:24px;

  text-align:center;

  border:1px solid #edf0f5;

  box-shadow:0 10px 30px rgba(0,0,0,0.04);

  transition:all 0.35s ease;
}

.team-card:hover{
  transform:translateY(-10px);
  box-shadow:0 25px 50px rgba(0,0,0,0.08);
}

.team-card::before{
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:6px;
  background:linear-gradient(to right,#1E4DB7,#2563eb);
}


/* PHOTO */

.team-photo-wrapper{
  position:relative;
  width:130px;
  height:130px;
  margin:0 auto 22px;
}

.team-photo{
  width:130px;
  height:130px;
  border-radius:50%;
  object-fit:cover;
  border:5px solid #f1f5f9;
  box-shadow:0 10px 25px rgba(0,0,0,0.08);
}


/* TEXT */

.team-card h3{
  font-size:22px;
  margin-bottom:8px;
  color:#111827;
}

.team-role{
  display:inline-block;

  background:#eff6ff;
  color:#1E4DB7;

  padding:8px 16px;
  border-radius:30px;

  font-size:13px;
  font-weight:600;

  margin-bottom:18px;
}

.team-card p{
  font-size:15px;
  color:#64748b;
  line-height:1.8;
}


/* =========================
CTA
========================= */

.team-cta{
  position:relative;
  overflow:hidden;

  padding:90px 10%;
  text-align:center;

  background:linear-gradient(135deg,#1E4DB7,#2563eb);
  color:white;
}

.team-cta::before{
  content:"";
  position:absolute;
  top:-80px;
  right:-80px;
  width:220px;
  height:220px;
  border-radius:50%;
  background:rgba(255,255,255,0.06);
}

.team-cta h2{
  position:relative;
  z-index:2;
  font-size:38px;
  margin-bottom:18px;
}

.team-cta p{
  position:relative;
  z-index:2;
  color:#dbeafe;
  margin-bottom:30px;
  font-size:17px;
  line-height:1.8;
}

.team-cta .btn-primary{
  position:relative;
  z-index:2;

  display:inline-flex;
  align-items:center;
  justify-content:center;

  padding:14px 30px;

  background:#FFC107;
  color:#111827;

  border-radius:40px;

  font-weight:600;

  transition:0.3s ease;
}

.team-cta .btn-primary:hover{
  transform:translateY(-3px);
  box-shadow:0 15px 30px rgba(255,193,7,0.25);
}


/* =========================
TABLET
========================= */

@media(max-width:1024px){

  .page-hero{
    padding:90px 5%;
  }

  .page-hero h1{
    font-size:40px;
  }

  .team-intro,
  .team-section,
  .team-cta{
    padding-left:5%;
    padding-right:5%;
  }

}


/* =========================
MOBILE
========================= */

@media(max-width:768px){

  .page-hero{
    padding:75px 5%;
  }

  .page-hero h1{
    font-size:30px;
  }

  .page-hero p{
    font-size:15px;
  }

  .team-intro{
    padding:60px 5% 10px;
  }

  .team-intro h2{
    font-size:28px;
  }

  .team-intro p{
    font-size:15px;
  }

  .team-section{
    padding:50px 5% 70px;
  }

  .team-grid{
    grid-template-columns:1fr;
    gap:25px;
  }

  .team-card{
    padding:28px 22px;
  }

  .team-photo-wrapper,
  .team-photo{
    width:110px;
    height:110px;
  }

  .team-card h3{
    font-size:20px;
  }

  .team-card p{
    font-size:14px;
  }

  .team-cta{
    padding:70px 5%;
  }

  .team-cta h2{
    font-size:28px;
  }

  .team-cta p{
    font-size:15px;
  }

}


/* =========================
SMALL MOBILE
========================= */

@media(max-width:480px){

  .page-hero h1{
    font-size:24px;
  }

  .team-intro h2{
    font-size:22px;
  }

  .team-card{
    border-radius:20px;
  }

}
`

const members = [
  {
    photo: 'team1.jpg',
    name: 'Ayetan Daniel',
    role: 'Coordination générale',
    text: `Assure la supervision globale du concours, la coordination des équipes et le bon déroulement des différentes activités.`,
  },
  {
    photo: 'team2.jpg',
    name: 'SOUNTOU Ambroise',
    role: 'Logistique',
    text: `S’occupe de la préparation du matériel, des installations et de tout ce qui garantit le bon déroulement pratique des activités.`,
  },
  {
    photo: 'team3.jpg',
    name: 'Hossou Abra Alida',
    role: 'Suivi & Évaluation',
    text: `Veille au respect des objectifs du concours, au suivi des activités et à l’amélioration continue des différentes éditions.`,
  },
  {
    photo: 'team4.jpg',
    name: 'KADANGA Yao Fernand',
    role: 'Couverture médiatique',
    text: `Met en lumière les moments forts du concours à travers les réseaux sociaux, les photos et les contenus multimédias.`,
  },
  {
    photo: 'team5.jpg',
    name: 'Virginie GNAWO',
    role: 'Documentation',
    text: `Assure la rédaction des rapports, l’archivage des données et la conservation des souvenirs marquants du concours.`,
  },
]

export default function Team() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}

      <section className="page-hero">

        <h1>Notre équipe</h1>

        <p>
          Découvrez les personnes engagées derrière
          l’organisation du concours Chrétien Épelle-Moi.
        </p>

      </section>



      {/* INTRO */}

      <section className="team-intro">

        <h2>Une équipe passionnée et engagée</h2>

        <p>
          Le concours Chrétien Épelle-Moi est porté par une équipe
          dynamique passionnée par l’éducation, la lecture et les valeurs
          chrétiennes. Chaque membre contribue activement à offrir
          une expérience inspirante et enrichissante aux jeunes participants.
        </p>

      </section>



      {/* TEAM */}

      <section className="team-section">

        <div className="container">

          <div className="team-grid">

            {members.map((member) => (
              <div className="team-card" key={member.name}>

                <div className="team-photo-wrapper">
                  <img src={asset(member.photo)} className="team-photo" alt="" />
                </div>

                <h3>{member.name}</h3>

                <div className="team-role">
                  {member.role}
                </div>

                <p>
                  {member.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>



      {/* CTA */}

      <section className="team-cta">

        <h2>Envie de rejoindre l’équipe ?</h2>

        <p>
          Vous souhaitez contribuer au développement
          du concours Chrétien Épelle-Moi ?
          Notre équipe reste ouverte aux collaborations
          et aux personnes motivées.
        </p>

        <Link to="/contact" className="btn-primary">
          Nous contacter
        </Link>

      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { asset } from '../lib/assets.js'

export default function Home() {
  return (
    <>

      <style>{`
        .about-platform .about-image img{
          border-radius:12px;
          box-shadow:0 10px 25px rgba(0,0,0,0.08);
        }

        .home-section-header{
          text-align:center;
          max-width:750px;
          margin:0 auto 40px;
        }

        .home-section-header h2{
          font-size:32px;
          margin-bottom:12px;
        }

        .home-section-header p{
          color:#666;
          line-height:1.7;
        }

        .piliers-section{
          padding:90px 0;
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

        @media (max-width:768px){
          .home-section-header h2{
            font-size:26px;
          }
        }
      `}</style>

      {/* HERO */}

      <section className="hero">

        {/* IMAGE DE FOND */}
        <img src={asset('hero-bg.jpg')} className="hero-bg" alt="Chrétien-Épelle-Moi" />

        {/* COUCHE BLEUE */}
        <div className="hero-overlay"></div>

        {/* CONTENU */}
        <div className="hero-content">

          <h1>
            <span>Chrétien-Epelle-Moi</span>
          </h1>

          <p className="hero-subtitle">
            “Joue, apprends et progresse
            dans ta foi”
          </p>

          <div className="hero-buttons">

            <Link to="/faire-un-don" className="btn-primary">Faire un don</Link>

            <Link to="/partenaire" className="btn-secondary">Devenir partenaire</Link>

          </div>

        </div>

      </section>



      {/* QUI SOMMES-NOUS */}

      <section className="about-platform">

        <div className="container">

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

            <Link to="/concours" className="btn-primary">
              Découvrir le concours
            </Link>

          </div>


          <div className="about-image">
            <img src={asset('about.jpg')} alt="Chrétien-Épelle-Moi" />
          </div>

        </div>

      </section>



      {/* VISION & MISSION */}

      <section className="about-platform">

        <div className="container">

          <div className="about-image">
            <img src={asset('vision.jpg')} alt="Vision du projet" />
          </div>

          <div className="about-text">

            <h2>Notre vision, notre mission</h2>

            <p>
              <strong>Notre vision :</strong> une jeunesse chrétienne épanouie,
              formée, entreprenante et pleinement engagée dans la vie de
              l’Église et de la société.
            </p>

            <p>
              <strong>Notre mission :</strong> encadrer, concevoir et
              promouvoir des activités culturelles, éducatives, spirituelles
              et socio-économiques au sein des paroisses et des communautés.
            </p>

          </div>

        </div>

      </section>



      {/* PILIERS */}

      <section className="piliers-section">

        <div className="container">

          <div className="home-section-header">
            <h2>Nos 4 piliers d’intervention</h2>
            <p>
              L’action opérationnelle du label repose sur quatre piliers
              stratégiques, conçus pour couvrir l’ensemble des besoins
              d’épanouissement de la jeunesse.
            </p>
          </div>

          <div className="piliers-grid">

            <div className="pilier-card">
              <i className="fa-solid fa-award"></i>
              <h3>Évènements & Compétitions Culturelles</h3>
              <ul>
                <li>Concours d’art oratoire & culture générale : maîtrise de la langue française, vocabulaire spécialisé et culture biblique/catéchétique.</li>
                <li>Arts & expressions : festivals et concours de chant, danse et théâtre.</li>
              </ul>
            </div>

            <div className="pilier-card">
              <i className="fa-solid fa-church"></i>
              <h3>Tourisme Chrétien & Événementiel</h3>
              <ul>
                <li>Tourisme spirituel et culturel : pèlerinages, sorties de détente chrétienne, visites patrimoniales et découverte des histoires paroissiales.</li>
                <li>Assistance & régie événementielle : ingénierie logistique, technique et organisationnelle pour les événements portés par des groupements paroissiaux ou des partenaires.</li>
              </ul>
            </div>

            <div className="pilier-card">
              <i className="fa-solid fa-chalkboard-user"></i>
              <h3>Formation & Renforcement de Capacités</h3>
              <ul>
                <li>Ateliers pratiques : prise de parole en public, leadership chrétien, expression oratoire, gestion de projets.</li>
                <li>Séminaires d’orientation académique, de développement personnel et d’éthique professionnelle ancrés dans les valeurs de l’Évangile.</li>
              </ul>
            </div>

            <div className="pilier-card">
              <i className="fa-solid fa-seedling"></i>
              <h3>Entrepreneuriat & Dynamisation Paroissiale</h3>
              <ul>
                <li>Promotion de l’entrepreneuriat : incitation, coaching et accompagnement des initiatives économiques des jeunes.</li>
                <li>Mise en valeur des paroisses : autonomisation financière et modernisation des canaux de communication avec les fidèles.</li>
              </ul>
            </div>

          </div>

        </div>

      </section>



      {/* MISSION */}

      <section className="mission">

        <div className="container mission-container">

          <div className="mission-header">

            <h2>Notre mission</h2>

            <p className="mission-intro">
              <strong>Chrétien-Épelle-Moi</strong> a pour
              mission de contribuer à l’épanouissement intellectuel,
              culturel et spirituel des jeunes en leur offrant
              un cadre éducatif inspiré des valeurs chrétiennes.
            </p>

          </div>


          <div className="mission-cards">

            {/* CARD 1 */}

            <div className="mission-card">

              <div className="mission-icon">
                <i className="fa-solid fa-book-open"></i>
              </div>

              <h3>Renforcer les compétences</h3>

              <p>
                Encourager les jeunes à améliorer leur orthographe,
                leur expression orale et leur culture générale à
                travers des activités pédagogiques stimulantes.
              </p>

            </div>


            {/* CARD 2 */}

            <div className="mission-card">

              <div className="mission-icon">
                <i className="fa-solid fa-cross"></i>
              </div>

              <h3>Approfondir la foi</h3>

              <p>
                Permettre aux participants de mieux connaître
                les enseignements de l’Église et les textes
                sacrés tout en développant leur engagement spirituel.
              </p>

            </div>


            {/* CARD 3 */}

            <div className="mission-card">

              <div className="mission-icon">
                <i className="fa-solid fa-users"></i>
              </div>

              <h3>Développer le leadership</h3>

              <p>
                Favoriser la confiance en soi, l’esprit d’équipe et la
                prise de parole en public à travers les débats,
                les épreuves et les confrontations.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="testimonials">

        <div className="container">

          <div className="testimonial-header">

            <h2>Ils ont participé au concours</h2>

            <p>
              Découvrez les témoignages des lauréats des éditions précédentes.
            </p>

          </div>


          <Swiper
            className="testimonialSwiper"
            modules={[Autoplay, Pagination]}
            loop={true}
            spaceBetween={30}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >

            {/* CARD 1 */}

            <SwiperSlide>

              <div className="testimonial-card">

                <img src={asset('laureat1.jpg')} className="testimonial-photo" />

                <p className="testimonial-text">
                  “Grâce au concours Épelle-Moi, j’ai amélioré mon orthographe et ma confiance.”
                </p>

              </div>

            </SwiperSlide>

            {/* CARD 2 */}

            <SwiperSlide>

              <div className="testimonial-card">

                <img src={asset('laureat2.jpg')} className="testimonial-photo" />

                <p className="testimonial-text">
                  “Une expérience incroyable qui m’a permis de progresser.”
                </p>

              </div>

            </SwiperSlide>

            {/* CARD 3 */}

            <SwiperSlide>

              <div className="testimonial-card">

                <img src={asset('laureat3.jpg')} className="testimonial-photo" />

                <p className="testimonial-text">
                  “J’ai appris beaucoup tout en partageant ma foi.”
                </p>

              </div>

            </SwiperSlide>

            {/* CARD 4 */}

            <SwiperSlide>

              <div className="testimonial-card">

                <img src={asset('laureat4.jpg')} className="testimonial-photo" />

                <p className="testimonial-text">
                  “Le concours m’a donné l’amour de la lecture.”
                </p>

              </div>

            </SwiperSlide>

          </Swiper>

        </div>

      </section>

    </>
  )
}

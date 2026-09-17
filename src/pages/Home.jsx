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

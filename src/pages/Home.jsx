import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { asset } from '../lib/assets.js'

export default function Home() {
  return (
    <>

      {/* HERO */}

      <section className="hero">

        {/* IMAGE DE FOND */}
        <img src={asset('hero-bg.jpg')} className="hero-bg" alt="Concours Epelle Moi" />

        {/* COUCHE BLEUE */}
        <div className="hero-overlay"></div>

        {/* CONTENU */}
        <div className="hero-content">

          <h1>
            Concours  <br />
            <span>Chrétien-Epelle-Moi</span>
          </h1>

          <p className="hero-subtitle">
            “Joue, apprends et progresse
            dans ta foi et ton orthographe”
          </p>

          <div className="hero-buttons">

            <Link to="/faire-un-don" className="btn-primary">Faire un don</Link>

            <Link to="/partenaire" className="btn-secondary">Devenir partenaire</Link>

          </div>

        </div>

      </section>



      <section className="about-platform">

        <div className="container">

          <div className="about-text">

            <h2>Présentation du concours</h2>

            <p>
              Le concours <strong>Chrétien Épelle-Moi</strong> est une initiative
              éducative et spirituelle portée par une équipe de bénévoles engagés
              au service de la jeunesse et de l’Église.
            </p>

            <p>
              À travers un programme d’activités pédagogiques et ludiques, ce concours
              met en valeur l’importance de la maîtrise de la langue française, de l’art
              oratoire, de la culture générale sur le Togo et de la connaissance
              des textes religieux.
            </p>

            <p>
              Les participants sont invités à relever plusieurs défis : épellation de mots
              issus de la Bible et du dictionnaire Larousse, réponses à des questions de
              culture générale, débats et plaidoiries sur différents thèmes.
            </p>

            <p>
              Cette initiative vise à offrir aux jeunes un espace d’apprentissage,
              d’expression et de croissance spirituelle dans un esprit de
              fraternité et de compétition saine.
            </p>

            <Link to="/a-propos" className="btn-primary">
              Découvrir le projet
            </Link>

          </div>


          <div className="about-image">

            <Swiper
              className="aboutSwiper"
              modules={[Autoplay]}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              spaceBetween={20}
            >

              <SwiperSlide>
                <img src={asset('photo1.jpg')} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={asset('photo2.jpg')} />
              </SwiperSlide>

              <SwiperSlide>
                <img src={asset('photo3.jpg')} />
              </SwiperSlide>

            </Swiper>

          </div>

        </div>

      </section>



      {/* MISSION */}

      <section className="mission">

        <div className="container mission-container">

          <div className="mission-header">

            <h2>Notre mission</h2>

            <p className="mission-intro">
              Le concours <strong>Chrétien Épelle-Moi</strong>,a pour
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

import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
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

.testimonial-intro{
padding:80px 10%;
text-align:center;
}

.testimonial-intro h2{
font-size:32px;
margin-bottom:10px;
}

.testimonial-intro p{
color:#666;
max-width:700px;
margin:auto;
line-height:1.7;
}


/* TESTIMONIALS */

.testimonials{
padding:80px 10%;
background:#f9fafb;
}

.testimonial-header{
text-align:center;
margin-bottom:40px;
}

.testimonial-header h2{
font-size:32px;
margin-bottom:10px;
}

.testimonial-header p{
color:#666;
}


/* CARD */

.testimonial-card{
background:white;
padding:30px;
border-radius:12px;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
text-align:center;
transition:0.3s;
}

.testimonial-card:hover{
transform:translateY(-6px);
}

.testimonial-photo{
width:80px;
height:80px;
border-radius:50%;
object-fit:cover;
margin-bottom:15px;
}

.testimonial-text{
font-style:italic;
color:#555;
margin-bottom:15px;
line-height:1.6;
}

.testimonial-card h4{
margin-bottom:5px;
}

.testimonial-card span{
font-size:13px;
color:#888;
}


/* CTA */

.testimonial-cta{
padding:80px 10%;
text-align:center;
background:#1E4DB7;
color:white;
}

.testimonial-cta p{
color:#e5e7eb;
margin-bottom:25px;
}
/* =========================
RESPONSIVE TESTIMONIAL PAGE
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

  .testimonial-intro{
    padding:70px 5%;
  }

  .testimonial-intro h2{
    font-size:28px;
  }

  .testimonials{
    padding:70px 5%;
  }

  .testimonial-header h2{
    font-size:28px;
  }

  .testimonial-cta{
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

  .testimonial-intro h2{
    font-size:24px;
  }

  .testimonial-intro p{
    font-size:15px;
  }

  .testimonial-header h2{
    font-size:24px;
  }

  .testimonial-header p{
    font-size:15px;
  }

  /* CARD */
  .testimonial-card{
    padding:25px;
  }

  .testimonial-photo{
    width:70px;
    height:70px;
  }

  .testimonial-text{
    font-size:14px;
  }

  /* CTA */
  .testimonial-cta h2{
    font-size:24px;
  }

  .testimonial-cta p{
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

  .testimonial-intro{
    padding:50px 5%;
  }

  .testimonial-intro h2{
    font-size:20px;
  }

  .testimonial-intro p{
    font-size:14px;
  }

  .testimonials{
    padding:50px 5%;
  }

  .testimonial-header h2{
    font-size:20px;
  }

  .testimonial-card{
    padding:20px;
  }

  .testimonial-text{
    font-size:13px;
  }

  .testimonial-cta{
    padding:50px 5%;
  }

  .testimonial-cta h2{
    font-size:20px;
  }

}
`

const testimonials = [
  { photo: 'laureat1.jpg', text: '“Grâce au concours Épelle-Moi, j’ai amélioré mon orthographe et ma confiance.”' },
  { photo: 'laureat2.jpg', text: '“Une expérience incroyable qui m’a permis de progresser.”' },
  { photo: 'laureat3.jpg', text: '“J’ai appris beaucoup tout en partageant ma foi.”' },
  { photo: 'laureat4.jpg', text: '“Le concours m’a donné l’amour de la lecture.”' },
  { photo: 'laureat5.jpg', text: '“Participer à ce concours a été une expérience très enrichissante.”' },
  { photo: 'laureat6.jpg', text: '“Une compétition saine qui m’a beaucoup motivé.”' },
]

export default function Testimonial() {
  return (
    <>
      <style>{css}</style>

      {/* HERO */}

      <section className="page-hero">

        <h1>Témoignages des participants</h1>

        <p>
          Découvrez les expériences vécues par les lauréats
          des différentes éditions du concours Chrétien Épelle-Moi.
        </p>

      </section>



      {/* TESTIMONIALS CAROUSEL */}

      <section className="testimonials">

        <div className="container">

          <div className="testimonial-header">

            <h2>Témoignages des lauréats</h2>

            <p>
              Découvrez les expériences inspirantes des participants.
            </p>

          </div>


          <Swiper
            className="testimonialSwiper"
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            grabCursor={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              480: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >

            {testimonials.map((t) => (
              <SwiperSlide key={t.photo}>

                <div className="testimonial-card">

                  <img src={asset(t.photo)} className="testimonial-photo" />

                  <p className="testimonial-text">
                    {t.text}
                  </p>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>

      </section>



      {/* CTA */}

      <section className="testimonial-cta">

        <h2>Participez à la prochaine édition</h2>

        <p>
          Rejoignez l’aventure Chrétien Épelle-Moi et vivez
          une expérience éducative unique.
        </p>

        <Link to="/contact" className="btn-primary">
          Nous contacter
        </Link>

      </section>
    </>
  )
}

import { Link } from 'react-router-dom'
import { getGalleryEditions } from '../lib/assets.js'

const css = `
/* HERO */
.page-hero{
    background:linear-gradient(135deg,#1E4DB7,#2563eb);
    padding:100px 10%;
    text-align:center;
    color:white;
}
.page-hero h1{ font-size:42px; margin-bottom:10px; }
.page-hero p{ font-size:18px; color:#e5e7eb; max-width:700px; margin:auto; }

/* INTRO */
.gallery-intro{ padding:70px 10%; text-align:center; }
.gallery-intro h2{ font-size:32px; margin-bottom:15px; }
.gallery-intro p{ color:#666; max-width:700px; margin:auto; line-height:1.7; }

/* GALLERY GRID */
.gallery-section{ padding:60px 10%; }
.gallery-grid{ display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:25px; }

.gallery-item{
    position:relative;
    overflow:hidden;
    border-radius:12px;
    cursor:pointer;
    box-shadow:0 10px 25px rgba(0,0,0,0.08);
    transition:0.4s ease;
}
.gallery-item img{
    width:100%;
    height:220px;
    object-fit:cover;
    transition:transform 0.4s ease;
}
.gallery-item:hover img{ transform:scale(1.08); }

.gallery-overlay{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:rgba(30,77,183,0.6);
    display:flex;
    align-items:center;
    justify-content:center;
    opacity:0;
    transition:0.3s;
}
.gallery-item:hover .gallery-overlay{ opacity:1; }
.gallery-overlay span{ color:white; font-size:18px; font-weight:600; }

/* CTA */
.gallery-cta{
    padding:80px 10%;
    text-align:center;
    background:#1E4DB7;
    color:white;
}
.gallery-cta p{ color:#e5e7eb; margin-bottom:25px; }
.gallery-btn{
    background:#FFC107;
    padding:12px 28px;
    border-radius:30px;
    text-decoration:none;
    color:black;
    font-weight:600;
    transition:0.3s;
}
.gallery-btn:hover{
    background:#e0a800;
}

/* =========================
RESPONSIVE GALLERY PAGE
========================= */

/* TABLETTE */
@media (max-width:1024px){
    .page-hero{ padding:80px 5%; }
    .page-hero h1{ font-size:36px; }
    .page-hero p{ font-size:16px; }

    .gallery-intro{ padding:60px 5%; }
    .gallery-intro h2{ font-size:28px; }
    .gallery-intro p{ font-size:15px; }

    .gallery-section{ padding:50px 5%; }
}

/* MOBILE */
@media (max-width:768px){
    .page-hero{ padding:60px 5%; }
    .page-hero h1{ font-size:28px; }
    .page-hero p{ font-size:14px; }

    .gallery-intro{ padding:50px 5%; }
    .gallery-intro h2{ font-size:24px; }
    .gallery-intro p{ font-size:14px; }

    .gallery-section{ padding:40px 5%; }
    .gallery-item img{ height:180px; }
    .gallery-overlay span{ font-size:16px; }

    .gallery-cta{ padding:60px 5%; }
    .gallery-cta h2{ font-size:28px; }
    .gallery-cta p{ font-size:14px; }
    .gallery-btn{ padding:10px 22px; font-size:14px; }
}

/* PETITS ÉCRANS */
@media (max-width:480px){
    .page-hero{ padding:50px 5%; }
    .page-hero h1{ font-size:22px; }
    .page-hero p{ font-size:13px; }

    .gallery-intro{ padding:40px 5%; }
    .gallery-intro h2{ font-size:20px; }
    .gallery-intro p{ font-size:13px; }

    .gallery-section{ padding:30px 5%; }
    .gallery-item img{ height:150px; }
    .gallery-overlay span{ font-size:14px; }

    .gallery-cta{ padding:50px 5%; }
    .gallery-cta h2{ font-size:22px; }
    .gallery-cta p{ font-size:13px; }
    .gallery-btn{ padding:10px 20px; font-size:13px; }
}
`

export default function Gallery() {
  const editions = getGalleryEditions()

  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <section className="page-hero">
        <h1>Moments inoubliables</h1>
        <p>
          Chaque édition du concours Chrétien Épelle-Moi est remplie
          de moments de joie, de concentration et de célébration.
          Cliquez sur une édition pour découvrir toutes les photos.
        </p>
      </section>

      {/* EDITIONS */}
      <section className="gallery-section">
        <div className="gallery-grid">

          {editions.map((edition) => (
            <Link key={edition.name} to={`/galerie/${encodeURIComponent(edition.name)}`} className="gallery-item">

              <img src={edition.cover.url} />

              <div className="gallery-overlay">
                <span>Edition {edition.name}</span>
              </div>

            </Link>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="gallery-cta">
        <h2>Participez à la prochaine édition</h2>
        <p>
          Vous souhaitez vivre cette expérience ?
          Inscrivez-vous ou contactez l’équipe
          du concours Chrétien Épelle-Moi.
        </p>
        <Link to="/contact" className="gallery-btn">
          Nous contacter
        </Link>
      </section>
    </>
  )
}

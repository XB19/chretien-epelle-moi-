import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getGalleryEditions } from '../lib/assets.js'

const css = `
/* HERO */
.page-hero{
    background:linear-gradient(135deg,#1E4DB7,#2563eb);
    padding:90px 10%;
    text-align:center;
    color:white;
}
.page-hero h1{ font-size:40px; margin-bottom:10px; }
.page-hero p{ font-size:17px; color:#e5e7eb; max-width:700px; margin:auto; }

/* GALLERY */
.gallery-section{
    padding:70px 10%;
}
.gallery-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
    gap:25px;
}
.gallery-item{
    overflow:hidden;
    border-radius:12px;
    box-shadow:0 10px 25px rgba(0,0,0,0.08);
    cursor:pointer;
}
.gallery-item img{
    width:100%;
    height:230px;
    object-fit:cover;
    transition:transform 0.4s ease;
}
.gallery-item:hover img{
    transform:scale(1.08);
}

/* BACK BUTTON */
.back-btn{
    display:inline-block;
    margin-top:40px;
    background:#1E4DB7;
    color:white;
    padding:12px 24px;
    border-radius:25px;
    text-decoration:none;
    font-weight:600;
}
.back-btn:hover{
    background:#163c8f;
}

/* LIGHTBOX */
.lightbox-overlay{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,0.85);
    display:flex;
    align-items:center;
    justify-content:center;
    z-index:9999;
}
.lightbox-overlay img{
    max-width:90%;
    max-height:85vh;
    border-radius:6px;
    box-shadow:0 20px 60px rgba(0,0,0,0.5);
}
.lightbox-close{
    position:absolute;
    top:20px;
    right:30px;
    font-size:34px;
    color:white;
    cursor:pointer;
    background:none;
    border:none;
}
.lightbox-nav{
    position:absolute;
    top:50%;
    transform:translateY(-50%);
    font-size:40px;
    color:white;
    cursor:pointer;
    background:none;
    border:none;
    padding:10px 18px;
}
.lightbox-prev{ left:15px; }
.lightbox-next{ right:15px; }
`

export default function GalleryEdition() {
  const { edition } = useParams()
  const editionData = getGalleryEditions().find((e) => e.name === edition)
  const images = editionData ? editionData.images : []

  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    const onKey = (e) => {
      if (lightboxIndex === null) return
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowRight') setLightboxIndex((i) => (i + 1) % images.length)
      if (e.key === 'ArrowLeft') setLightboxIndex((i) => (i - 1 + images.length) % images.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, images.length])

  return (
    <>
      <style>{css}</style>

      {/* HERO */}
      <section className="page-hero">
        <h1>Edition {edition}</h1>
        <p>
          Découvrez les moments forts de cette édition
          du concours Épelle-Moi.
        </p>
      </section>

      {/* GALLERY */}
      <section className="gallery-section">
        <div className="gallery-grid">

          {images.map((image, index) => (
            <a
              key={image.file}
              href={image.url}
              onClick={(e) => { e.preventDefault(); setLightboxIndex(index) }}
            >
              <div className="gallery-item">
                <img src={image.url} alt="photo concours" />
              </div>
            </a>
          ))}

        </div>

        <div style={{ textAlign: 'center' }}>
          <Link to="/galerie" className="back-btn">
            ← Retour à la galerie
          </Link>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>

          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>
            ×
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + images.length) % images.length) }}
          >
            ‹
          </button>

          <img
            src={images[lightboxIndex].url}
            alt="photo concours"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % images.length) }}
          >
            ›
          </button>

        </div>
      )}
    </>
  )
}

import { Link } from 'react-router-dom'
import { asset } from '../lib/assets.js'

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* COLONNE 1 */}

        <div className="footer-col footer-brand">

          <img src={asset('logo.png')} alt="EpelleMoi" className="footer-logo" />

          <p className="footer-text">
            “Joue, apprends et progresse <br />
            dans ta foi et ton orthographe”
          </p>

          <div className="social-icons">

            <a href="https://www.facebook.com/profile.php?id=100089474168488" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-facebook-f"></i>
            </a>

            <a href="https://youtube.com/@chretien-epelle-moi?si=rLYcJEmsPYyj5Yq8" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-youtube"></i>
            </a>

            <a href="https://www.tiktok.com/@chretien_epelle_moi?_r=1&_t=ZN-94yqXPDbMWs" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-tiktok"></i>
            </a>

          </div>

        </div>


        {/* COLONNE 2 */}

        <div className="footer-col">

          <h4>Liens Utiles</h4>

          <ul>

            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">à propos</Link></li>
            <li><Link to="/admin-login">Partie Admin</Link></li>
            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>


        {/* COLONNE 3 */}

        <div className="footer-col">

          <h4>Contactez nous</h4>

          <ul className="contact-list">

            <li>
              <i className="fa-solid fa-envelope"></i>
              chretienepellemoi@gmail.com
            </li>

            <li>
              <i className="fa-solid fa-phone"></i>
              +228 92 45 21 46
            </li>

            <li>
              <i className="fa-solid fa-location-dot"></i>
              Sainte Rita de Zossimé
            </li>

          </ul>

        </div>

      </div>

      <hr className="footer-line" />

    </footer>
  )
}

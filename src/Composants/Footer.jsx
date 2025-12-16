import '../styles/Footer.css'; // Importez le fichier CSS séparé
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>À propos</h3>
          <p>
            Votre plateforme de prédictions agricoles.
          </p>
        </div>
        <div className="footer-section">
          <h3>Liens rapides</h3>
          <ul>
            <li><a href="../pages/Prediction.jsx">Prédictions</a></li>

            
          </ul>
        </div>
        <div className="footer-section">
          <h3>Réseaux sociaux</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Votre Site de Prédiction. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;

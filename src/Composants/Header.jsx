// import {Link} from 'react-router-dom'
// import "../styles/Header.css"
// const Header = () => {
//   return (
//     <nav className='header'>
//       <div className='icone'>
//         <div className="image">
//           <div><span>A</span>gro<span>P</span>red</div>
//         </div>
//       </div>
//       <div className='liens'>
//         <Link className='lien' to="/">Home</Link>
//         <Link className='lien' to='/prediction'>Prediction</Link>
//         <div className='nousContacter'>
//         <div className='annonce'>
//           Appelez nous pour plus d'information
//         </div>
//         <div>
//           +237 686725325/ +237 657107777
//         </div>
//       </div>
//       </div>
      
//     </nav>
//   )
// }

// export default Header

import { useState } from 'react'; // <--- NOUVEL IMPORT
import {Link} from 'react-router-dom'
import "../styles/Header.css"

const Header = () => {
  // État pour gérer l'ouverture/fermeture du menu
  const [isMenuOpen, setIsMenuOpen] = useState(false); // <--- NOUVEL ÉTAT

  const toggleMenu = () => { // <--- NOUVELLE FONCTION
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='header'>
      <div className='icone'>
        <div className="image">
          <div><span>A</span>gro<span>P</span>red</div>
        </div>
      </div>
      
      {/* Bouton Hamburger (Visible uniquement sur mobile via CSS) */}
      <div className='menu-toggle' onClick={toggleMenu}> {/* <--- NOUVEL ÉLÉMENT */}
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      
      {/* Les liens et contacts sont conditionnels à l'état du menu */}
      <div className={`liens ${isMenuOpen ? 'open' : ''}`}> {/* <--- CLASSE CONDITIONNELLE AJOUTÉE */}
        <Link className='lien' to="/" onClick={toggleMenu}>Home</Link> {/* Fermer le menu au clic */}
        <Link className='lien' to='/prediction' onClick={toggleMenu}>Prediction</Link> {/* Fermer le menu au clic */}
        <div className='nousContacter'>
        <div className='annonce'>
          Appelez nous pour plus d'information
        </div>
        <div>
          +237 686725325/ +237 657107777
        </div>
      </div>
      </div>
      
    </nav>
  )
}

export default Header
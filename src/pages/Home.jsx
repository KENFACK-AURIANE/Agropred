
import FirstPart from '../Composants/FirstPart.jsx'
import Footer from '../Composants/Footer.jsx'
import Header from '../Composants/Header.jsx'
import Intermediaire from '../Composants/Intermediaire.jsx'
import SecondPart from '../Composants/SecondPart.jsx'
// import plantain from "../assets/plantainss.webp"
import "../styles/Home.css"

const Home = () => {
  return (
    <div>
      <div className='headers'><Header /></div>
      <div><FirstPart /></div>
      <div><SecondPart /></div>
      <div><Intermediaire /></div>
      <div><Footer /></div>
    </div>
  )
}

export default Home
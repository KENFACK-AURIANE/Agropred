import "../styles/SecondPart.css"
import rendement from "../assets/rendements.png"
const SecondPart = () => {
  return (
    <div className="Secondpart">
    <div className="imageIllustratif">
      <img src={rendement} alt="image de robots"/>
    </div>
      <div className="descriptionAction">
        <div className="littleTitle">
          NOTRE SERVICE
        </div>
        <div className="Titre">
          COMMENT UTILISER AGROPRED?
        </div>
        <div className="descriptionUtilisation">
          Pour utiliser Agropred, il vous suffit de suivre les étapes suivantes :
        </div>
        <div className="listeUtilisation">  
          <div className="etape">
            <div className="numero">1</div>
            <div className="texte">Accédez à la page de prédiction via le menu de navigation.</div>
          </div>
          <div className="etape">
            <div className="numero">2</div>
            <div className="texte">Entrer les differentes informations dans le champ demandé</div>
          </div>
          <div className="etape">
            <div className="numero">3</div>
            <div className="texte">Valider vos informations en cliquant sur le bouton envoyé</div>
          </div>
          <div className="etape">
            <div className="numero">4</div>
            <div className="texte">Les résultats de la prédiction  s'afficheront sur la page</div>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default SecondPart
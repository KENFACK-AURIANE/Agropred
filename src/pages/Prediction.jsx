import { useState } from "react"
import "../styles/Prediction.css"
import Header from "../Composants/Header"

const Prediction = () => {
  const [rainfall, setRainfall] = useState("150")
  const [temperature, setTemperature] = useState("150")
  const [daygrown, setDaygrown] = useState("150")
  const [fertilizer, setFertilizer] = useState(false)
  const [irrigation, setIrrigation] = useState(false)
  const [region, setRegion] = useState("North")
  const [soiltype, setSoiltype] = useState("Silt")
  const [crop, setCrop] = useState("Rice")
  const [weather, setWeather] = useState("Cloudy")
  const [resultat, setResultat] = useState("Resultat de la prediction")
  // const capitalizeFirst = (str) => {
  //   if(!str) return ""
  //   return str[0].toUppercase()
  // }

  const envoyerPrediction = async() =>{
    if (!rainfall || !temperature || !daygrown || !region || !soiltype || !crop || !weather) {
      setResultat("Erreur : Veuillez remplir tous les champs obligatoires.");
      return; // Empêche l'appel API si les données sont incomplètes
    }

    try{
      const irrigationBool = irrigation === 'true' 
      const fertilizerBool = fertilizer === 'true'
      const response = await fetch("https://apiagropred.onrender.com/predict",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body:JSON.stringify({
          Rainfall_mm: parseFloat(rainfall),
          Temperature_Celsius: parseFloat(temperature),
          Days_to_Harvest: parseInt(daygrown),
          Fertilizer_Used: fertilizerBool,
          Irrigation_Used: irrigationBool,
          Region:region,
          Soil_Type:soiltype,
          Crop:crop,
          Weather_Condition:weather

        }),
      });
      const data = await response.json();
      setResultat(parseFloat(data.prediction_yield_tons_per_hectare).toFixed(2) + " tonnes par hectare");
    }catch(error){
      console.error("Erreur API:",error)
    };
  }

  return (
    <div className="PREDIRE">
      <div><Header /></div>
      
      <div className="PREDICTION">
        <div className="partieGauche">
          <div className="instructions">
              Veuillez entrer toutes les informations
          </div>
          
          <div className="formulaire">
            <div className="input1">

              <div className="rowInput">
                <div className="input">
                  <label>Culture concerné</label>
                  <select className="option"  value={crop} onChange={(e)=>setCrop(e.target.value)}>

                    <option value='Rice'>Riz</option>
                    <option value='Cotton'>Coton</option>
                    <option value='Soybean'>Soja</option>
                    <option value='Wheat '>Blé</option>
                    <option value='Maize'>Mais</option>
                    <option value='Barley'>Orge</option>
                  </select>
                 
                </div>
                <div className="input">
                  <label>Nombre de jours pour pousser</label>
                  <input type="text" placeholder="150" value={daygrown} onChange={(e)=>setDaygrown(e.target.value)} />
                </div>
              </div>
              <div className="rowInput">
                <div className="input">
                  <label>Est ce que vous utilisez des fertilisant?</label>
                  <select className="option"  value={fertilizer} onChange={(e)=>setFertilizer(e.target.value)}>

                    <option value='true'>Oui</option>
                    <option value='false'>Non</option>
                  </select>
                </div>
                <div className="input">
                  <label>Est ce que vous utilisez une methode d'irrigation?</label>
                  <select className="option"  value={irrigation} onChange={(e)=>setIrrigation(e.target.value)}>

                    <option value='true'>Oui</option>
                    <option value='false'>Non</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="input2">

              <div className="rowInput">
                <div className="input">
                  <label>Pluviometrie</label>
                  <input type="text" placeholder="150" value={rainfall} onChange={(e)=>setRainfall(e.target.value)} />
                </div>
                
                <div className="input">
                  <label>Temperature</label>
                  <input type="text" placeholder="150" value={temperature} onChange={(e)=>setTemperature(e.target.value)} />
                </div>
              </div>
              <div className="rowInput">
                <div className="input">
                  <label>Region</label>
                  <select className="option"  value={region} onChange={(e)=>setRegion(e.target.value)}>

                    <option value='North'>Nord</option>
                    <option value='West'>Ouest</option>
                    <option value='East'>Est</option>
                    <option value='South'>Sud</option>
                  </select>
                </div>
                <div className="input">
                  <label>Type de sol</label>
                  <select className="option"  value={soiltype} onChange={(e)=>setSoiltype(e.target.value)}>

                    <option value='Silt'>Limoneux</option>
                    <option value='Clay'>Argileux</option>
                    <option value='Sandy'>Sabloneux</option>
                    <option value='Chalky'>Calcaireux</option>
                    <option value='Peaty'>Tourbeux</option>
                    <option value='Loam'>Terre franche</option>
                  </select>
                </div>
              </div>
              <div className="input">
                <label>condition météo</label>
                <select className="option"  value={weather} onChange={(e)=>setWeather(e.target.value)}>
                  <option value='Cloudy'>Nuageux</option>
                  <option value='Rainy'>Pluvieux</option>
                  <option value='Sunny'>Ensoleillé</option>
                </select>
              </div>
                      
            </div>
          </div>
          
        </div>
        <div className="partieDroite">
          <div className="boutons">
            <div className="submit">
            <button onClick={envoyerPrediction}>VALIDER</button>
            </div>
            <div className="submit2">
              <a href="https://wa.me/692820373" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', width: '100%'}}>
                <button style={{width: '100%'}}>CONTACTEZ NOUS</button>
              </a>
            </div>
            
          </div>
         
          <div className="ligne"></div>
          <div className="resultats">
            <div className="head">
              Les résultats de votre prédiction s'afficheront instructions
            </div>
            
            <div className="Nomplante">
              {crop}
            </div>
            <div className="resultat">
              {resultat}
            </div>

          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Prediction
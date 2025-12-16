import { plantList } from '../datas/PlantList'
import PlantItem from '../Composants/PlantItem'
import '../styles/Intermediaire.css'
const Intermediaire = () => {
  return (
    <div className="thirdpart">
      <div className="title">Cultures ciblées par notre modèle de prediction</div>
      <div className="subtitle">Pour le moment, notre modele ne peut predire qu'un nombre fini de culture.Ces cultures sont presentées çi-dessus</div>
      <div className='plantes'>
			
			<ul className='listePlantes'>
				{plantList.map(({ id, cover, name}) => (
					<div key={id} className='Cplante'>
						<PlantItem  key={id}
							id={id}
							cover={cover}
							name={name}
							
							
						/>
					</div>
					 
				))}
			</ul>
		</div>
    </div>
  )
}

export default Intermediaire
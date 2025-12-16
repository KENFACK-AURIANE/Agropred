import '../styles/PlantItem.css'

const PlantItem = ({ id,cover, name})  => {

	return (
		<li key={id} className='plante' >
			<img className='image' src={cover} alt={`${name} cover`} />
			<div className='nomImage '>
				<div>{name}</div>
			</div>
		</li>
	)
}

export default PlantItem
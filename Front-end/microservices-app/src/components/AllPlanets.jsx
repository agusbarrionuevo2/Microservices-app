import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import Planet from "./Planet"
import { getAllPlanets } from "../redux/actions"


export default function AllPlanets(){
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getAllPlanets())
	},[])
	const allPlanets = useSelector(state => state.planets)
	return(
		<>
			{allPlanets.data && allPlanets.data.map(p =><Planet
				key={p._id}
				id={p._id}
				name={p.name}
				climate={p.climate}
				terrain={p.terrain}
				films={p.films}
				residents={p.residents}
			/> )}
			</> 
			// {
			// 	films.data && films.data.map(f=><Film
			// 		key={f._id}
			// 		id={f._id}
			// 		title={f.title}
			// 		director={f.director}
			// 		planets={f.planets}
			// 		producer={f.producer}
			// 		release_date={f.release_date}
			// 	/>)
			// }
			// {
			// 	characters.data && characters.data.map(c => <Character
			// 		key={c._id}
			// 		id={c._id}
			// 		name={c.name}
			// 		films={c.films}
			// 		gender={c.gender}
			// 		homeworld={c.homeworld}
			// 		birth_year={c.birth_year}
			// 	/>)
			// }
		 )
}

//contenedor de todas las cards
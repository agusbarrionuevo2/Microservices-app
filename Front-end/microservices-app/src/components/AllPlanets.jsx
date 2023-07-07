import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import Planet from "./Planet"
import { getAllPlanets } from "../redux/actions"
import './AllPlanets.css'

export default function AllPlanets(){
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getAllPlanets())
	},[])
	const allPlanets = useSelector(state => state.planets)
	return(
		<div className="planets-container">
			{allPlanets.data && allPlanets.data.map(p =><Planet
				key={p._id}
				id={p._id}
				name={p.name}
				climate={p.climate}
				terrain={p.terrain}
				films={p.films}
				residents={p.residents}
			/> )}
		</div> 
		 )
}

//contenedor de todas las cards
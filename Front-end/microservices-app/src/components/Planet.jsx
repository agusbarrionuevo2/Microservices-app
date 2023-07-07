import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom"
import './Planet.css'

export default function Planet({name, id, climate, terrain}){
	const dispatch = useDispatch()
	useEffect(()=>{
		
	},[])
	return(
		<div className="planet">
			<NavLink to={`/detail-planet/${id}`}><h1>{name}</h1></NavLink>
			<p>{climate}</p>
			<p>{terrain}</p>
		</div>
	)
}


//card en especifico
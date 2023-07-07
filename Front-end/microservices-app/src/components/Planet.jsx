import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from "react-router-dom"


export default function Planet({name, id}){
	const dispatch = useDispatch()
	useEffect(()=>{
		
	},[])
	return(
		<>
			<NavLink to={`/detail-planet/${id}`}><h1>{name}</h1></NavLink>
		</>
	)
}


//card en especifico
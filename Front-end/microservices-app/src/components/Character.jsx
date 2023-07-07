import { NavLink } from "react-router-dom";

export default function Character({name, id}){
	
	return(
		<>
			<NavLink to={`/detail-character/${id}`}><h1>{name}</h1></NavLink>
		</>
	)
}
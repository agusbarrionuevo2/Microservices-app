import { NavLink } from "react-router-dom";
import './Character.css'
export default function Character({name, id, gender, birth_year}){
	
	return(
		<div className="character">
			<NavLink to={`/detail-character/${id}`}><h1>{name}</h1></NavLink>
			<p>{gender}</p>
			<p>{birth_year}</p>
		</div>
	)
}
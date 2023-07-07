import { NavLink } from "react-router-dom";
import './Film.css'

export default function Film({title, id, director, release_date}){
	
	return(
		<div className="film">
			<NavLink to={`/detail-film/${id}`}><h1>{title}</h1></NavLink>
			<p>{director}</p>
			<p>{release_date}</p>
		</div>
	)
}
import { NavLink } from "react-router-dom";

export default function Character({name, id, films, gender, homeworld, birth_year}){
	
	return(
		<>
			<NavLink to={`/detail-character/${id}`}><h1>{name}</h1></NavLink>
			{/* <p>{films}</p> */}
			<p>{gender}</p>
			{/* <p>{homeworld}</p> */}
			<p>{birth_year}</p>
		</>
	)
}
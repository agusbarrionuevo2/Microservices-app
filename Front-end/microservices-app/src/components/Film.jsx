import { NavLink } from "react-router-dom";

export default function Film({title, id, director, planets, producer, release_date}){
	
	return(
		<>
			<NavLink to={`/detail-film/${id}`}><h1>{title}</h1></NavLink>
			<p>{director}</p>
			{/* <p>{planets}</p> */}
			<p>{producer}</p>
			<p>{release_date}</p>
		</>
	)
}
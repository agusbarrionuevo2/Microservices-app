import { NavLink } from "react-router-dom";

export default function Film({title, id}){
	
	return(
		<>
			<NavLink to={`/detail-film/${id}`}><h1>{title}</h1></NavLink>
		</>
	)
}
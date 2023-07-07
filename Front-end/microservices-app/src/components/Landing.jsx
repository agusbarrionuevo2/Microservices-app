import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getAllCharacters, getAllFilms, getAllPlanets } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function Landing () {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getAllPlanets())
		dispatch(getAllCharacters())
		dispatch(getAllFilms())
	},[])
	return(
		<>
			<h1>Landing</h1>
			<NavLink to='/home'><button>Enter</button></NavLink>
		</>
	)
}
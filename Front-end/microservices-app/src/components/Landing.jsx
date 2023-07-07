import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { getAllCharacters, getAllFilms, getAllPlanets } from "../redux/actions";
import { useDispatch } from "react-redux";
import './Landing.css'

export default function Landing () {
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getAllPlanets())
		dispatch(getAllCharacters())
		dispatch(getAllFilms())
	},[])
	return(
		<div className="landing-container">
			<h1>Landing</h1>
			<NavLink to='/home/films'><button>Enter</button></NavLink>
		</div>
	)
}
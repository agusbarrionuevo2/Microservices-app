import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import Home from "./Home";

export default function Landing () {
	return(
		<>
			<h1>Landing</h1>
			<NavLink to='/home'><button>Enter</button></NavLink>
		</>
	)
}
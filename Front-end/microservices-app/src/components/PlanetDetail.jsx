import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getPlanet } from "../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function PlanetDetail () {
	const dispatch = useDispatch();
	const navigate = useNavigate()
  	const { id } = useParams();
	  useEffect(() => {
		  dispatch(getPlanet(id));
		  return () => {
			  dispatch(cleanDetail()); //tengo que hacer uno que funcione para planet
			};
		}, [dispatch, id]);
	const planet = useSelector((state) => state.planet);
	console.log(planet)
	return(
		<>
			<h1>Name: {planet.data?.name}</h1>
			<p>Climate: {planet.data?.climate}</p>
			<p>Terrain: {planet.data?.terrain}</p>
			<p>Films: {planet.data?.films.map(f => `${f.title} `)}.</p>
			<p>Residents: {planet.data?.residents.map(r => `${r.name} `)}.</p>
			<button onClick={()=>(navigate(-1))}>Back</button>
		</>
	)
}
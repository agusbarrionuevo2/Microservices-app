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
	return(
		<>
			<h1>{planet.data?.name}</h1>
			<button onClick={()=>(navigate(-1))}>Back</button>
		</>
	)
}
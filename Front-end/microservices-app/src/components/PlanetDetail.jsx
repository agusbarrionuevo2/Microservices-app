import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getPlanet } from "../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PlanetDetail () {
	const dispatch = useDispatch();
  	const { id } = useParams();
	  useEffect(() => {
		  dispatch(getPlanet(id));
		  return () => {
			  dispatch(cleanDetail());
			};
		}, [dispatch, id]);
	const planet = useSelector((state) => state.planet);
	return(
		<>
			<h1>{planet.data?.name}</h1>
		</>
	)
}
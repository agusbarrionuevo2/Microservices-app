import { useDispatch, useSelector } from "react-redux";
import { cleanCharacter, getCharacter } from "../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function CharacterDetail () {
	const dispatch = useDispatch();
	const navigate = useNavigate()
  	const { id } = useParams();
	  useEffect(() => {
		  dispatch(getCharacter(id)); 
		  return () => {
			  dispatch(cleanCharacter());
			};
		}, [dispatch, id]);
	const character = useSelector((state) => state.character);
	return(
		<>
			<h1>Name: {character.data?.name}</h1>
			<p>Films: {character.data?.films.map(f => `${f.title} `)}.</p>
			<p>Gender: {character.data?.gender}</p>
			<p>Homeworld: {character.data?.homeworld.name}</p>
			<p>Birth Year: {character.data?.birth_year}</p>
			<button onClick={()=>(navigate(-1))}>Back</button>
		</>
	)
}
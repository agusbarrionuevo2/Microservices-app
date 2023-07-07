import { useDispatch, useSelector } from "react-redux";
import { cleanDetail, getCharacter } from "../redux/actions";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function CharacterDetail () {
	const dispatch = useDispatch();
  	const { id } = useParams();
	  useEffect(() => {
		  dispatch(getCharacter(id));
		  return () => {
			  dispatch(cleanDetail());
			};
		}, [dispatch, id]);
	const character = useSelector((state) => state.character);
	return(
		<>
			<h1>{character.data?.name}</h1>
		</>
	)
}
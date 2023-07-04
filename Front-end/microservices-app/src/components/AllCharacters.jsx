import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllCharacters} from "../redux/actions"
import Character from "./Character"


export default function AllCharacters(){
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getAllCharacters())
	},[])
	const allCharacters = useSelector(state => state.characters)
	return(
			<>
				{
					allCharacters.data && allCharacters.data.map(c => <Character
						key={c._id}
						id={c._id}
						name={c.name}
						films={c.films}
						gender={c.gender}
						homeworld={c.homeworld}
						birth_year={c.birth_year}
					/>)
				}
			</>
		 )
}




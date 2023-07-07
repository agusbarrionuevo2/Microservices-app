import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { getAllFilms} from "../redux/actions"
import Film from "./Film"
import './AllFilms.css'


export default function AllFilms(){
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getAllFilms())
	},[])
	const allFilms = useSelector(state => state.films)
	return(
		<div className="films-container">
			{
				allFilms.data && allFilms.data.map(f=><Film
					key={f._id}
					id={f._id}
					title={f.title}
					director={f.director}
					planets={f.planets}
					producer={f.producer}
					release_date={f.release_date}
				/>)
			}
			</div> 
		 )
}
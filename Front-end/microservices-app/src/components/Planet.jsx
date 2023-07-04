import { useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'


export default function Planet({name}){
	const dispatch = useDispatch()
	useEffect(()=>{
		
	},[])
	return(
		<>
			<h1>{name}</h1>
		</>
	)
}


//card en especifico
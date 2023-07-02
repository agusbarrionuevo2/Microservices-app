import { useEffect} from "react"
import { getAllPlanets, getPlanet } from "./redux/actions"
import { useSelector, useDispatch } from 'react-redux'

function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(getPlanet('4'))
    // dispatch(getAllPlanets())
  },[])
  const planet = useSelector((state) => state.planet)
  const planets = useSelector((state) => state.planets)
  console.log(planet)
  console.log(planets)
  return (
    <>
      <h1>Hola</h1>
    </>
  )
}

export default App

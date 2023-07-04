import { useEffect} from "react"
import { getAllPlanets, getPlanet } from "./redux/actions"
import { useSelector, useDispatch } from 'react-redux'
import SearchBar from "./components/SearchBar"
import Detail from "./components/Detail"
import { NavLink, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <SearchBar/>
      <Routes>
        <Route path="/detail/:id" Component={Detail}></Route>
      </Routes>
    </>
  )
}

export default App

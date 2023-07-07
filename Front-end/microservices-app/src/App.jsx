import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import AllPlanets from "./components/AllPlanets";
import AllFilms from "./components/AllFilms";
import AllCharacters from "./components/AllCharacters";
import FilmDetail from "./components/FilmDetail";
import PlanetDetail from "./components/PlanetDetail";
import CharacterDetail from "./components/CharacterDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="" Component={Landing}></Route>
        <Route path="home" Component={Home}/>
        <Route
          exact
          path="home/planets"
          element={
            <div>
              <Home />
              <AllPlanets />
            </div>
          }></Route>
        <Route
          exact
          path="home/films"
          element={
            <div>
              <Home />
              <AllFilms />
            </div>
          }></Route>
        <Route
          exact
          path="home/characters"
          element={
            <div>
              <Home />
              <AllCharacters />
            </div>
          }></Route>
        <Route path="/detail-film/:id" Component={FilmDetail}></Route>
        <Route path="/detail-planet/:id" Component={PlanetDetail}></Route>
        <Route path="/detail-character/:id" Component={CharacterDetail}></Route>
      </Routes>
    </>
  );
}

export default App;

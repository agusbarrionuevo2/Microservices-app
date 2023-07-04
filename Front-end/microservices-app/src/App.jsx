import Detail from "./components/Detail";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import AllPlanets from "./components/AllPlanets";
import AllFilms from "./components/AllFilms";
import AllCharacters from "./components/AllCharacters";

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
        <Route path="/detail/:id" Component={Detail}></Route>
      </Routes>
    </>
  );
}

export default App;

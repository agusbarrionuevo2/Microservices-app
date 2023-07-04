import { NavLink } from "react-router-dom";


export default function Home() {
  return (
    <>
      <h1>Home</h1>
	  <NavLink to='/home/films'><button>Films</button></NavLink>
	  <NavLink to='/home/characters'><button>Characters</button></NavLink>
	  <NavLink to="/home/planets"><button>Planets</button></NavLink>
    </>
  );
}

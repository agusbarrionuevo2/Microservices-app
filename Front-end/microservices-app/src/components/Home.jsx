import { NavLink } from "react-router-dom";
import './Home.css'

export default function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <NavLink to='/home/films'><button>Films</button></NavLink>
      <NavLink to='/home/characters'><button>Characters</button></NavLink>
      <NavLink to="/home/planets"><button>Planets</button></NavLink>
      <NavLink to="/"><button>Back</button></NavLink>
    </div>
  );
}

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cleanFilm, getFilm } from "../redux/actions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FilmDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();
  const film = useSelector((state) => state.film);
    useEffect(() => {
      dispatch(getFilm(id));
      return () => {
        dispatch(cleanFilm());
      };
    }, [dispatch, id]);
  return (
    <>
      <h1>Detail</h1>
      <h1>Title: {film.data?.title}</h1>
      <p>Director: {film.data?.director}</p>
      <p>Planets: {film.data?.planets.map(p=> p.name)}</p>
      <p>Producer: {film.data?.producer}</p>
      <p>Release Date: {film.data?.release_date}</p>
      <button onClick={()=>(navigate(-1))}>Back</button>
    </>
  );
}

//detalle de cada planet, character, film

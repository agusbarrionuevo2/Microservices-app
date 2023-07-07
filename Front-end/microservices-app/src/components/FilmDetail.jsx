import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cleanDetail, getFilm } from "../redux/actions";
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
        dispatch(cleanDetail()); ////tengo que hacer uno que funcione para film
      };
    }, [dispatch, id]);
  return (
    <>
      <h1>Detail</h1>
      <h1>{film.data?.title}</h1>
      <button onClick={()=>(navigate(-1))}>Back</button>
    </>
  );
}

//detalle de cada planet, character, film

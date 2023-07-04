import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cleanDetail, getFilm } from "../redux/actions";
import { useParams } from "react-router-dom";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const film = useSelector((state) => state.film);
  useEffect(() => {
    dispatch(getFilm(id));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, id]);
  console.log(film);
  return (
    <>
      <h1>HOLA</h1>
      <h1>{film.data?.title}</h1>
    </>
  );
}

//detalle de cada planet, character, film

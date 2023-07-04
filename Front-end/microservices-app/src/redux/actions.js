import axios from 'axios'
export const GET_ALL_PLANETS = 'GET_ALL_PLANETS'
export const GET_ALL_CHARACTERS = 'GET_ALL_CHARACTERS'
export const GET_ALL_FILMS = 'GET_ALL_FILMS'
export const GET_PLANET = 'GET_PLANET'
export const GET_FILM = 'GET_FILM'
export const GET_CHARACTER = 'GET_CHARACTER'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'


//PLANETS
export const getAllPlanets = () => {
	return async function (dispatch) {
		const allPlanets = await axios.get('http://localhost:8000/planets')
		return dispatch({type: GET_ALL_PLANETS, payload: allPlanets.data.data})
	}
}

export const getPlanet = (id) => {
	return async function(dispatch){
		const planetById = await axios.get(`http://localhost:8000/planets/${id}`)
		return dispatch({type: GET_PLANET, payload: planetById.data.data})
	}
}


//CHARACTERS
export const getAllCharacters = () => {
	return async function (dispatch) {
		const allCharacters = await axios.get('http://localhost:8000/characters')
		return dispatch({type: GET_ALL_CHARACTERS, payload: allCharacters.data.data})
	}
}

export const getCharacter = (id) => {
	return async function(dispatch){
		const characterById = await axios.get(`http://localhost:8000/characters/${id}`)
		return dispatch({type: GET_CHARACTER, payload: characterById.data.data})
	}
}


//FILMS
export const getAllFilms = () => {
	return async function(dispatch){
		const allFilms = await axios.get('http://localhost:8000/films')
		return dispatch({type: GET_ALL_FILMS, payload: allFilms.data.data})
	}
}

export const getFilm = (id) => {
	return async function(dispatch){
		const filmById = await axios.get(`http://localhost:8000/films/${id}`)
		return dispatch({type: GET_FILM, payload: filmById.data.data})
	}
}

//CLEAN

export const cleanDetail = () =>{
	return{type:CLEAN_DETAIL}
}
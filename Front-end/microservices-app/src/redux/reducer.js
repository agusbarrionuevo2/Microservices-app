import { CLEAN_DETAIL, GET_ALL_CHARACTERS, GET_ALL_FILMS, GET_ALL_PLANETS, GET_CHARACTER, GET_FILM, GET_PLANET } from "./actions"

const initialState = {
	planets: [],
	planet: {},
	films: [],
	film: {},
	characters: [],
	character: {}
}

const reducer = (state = initialState, {type, payload}) => {
	switch(type) {
		case GET_ALL_PLANETS: {
			return {
				...state,
				planets: payload
			}
		}
		case GET_PLANET: {
			return {
				...state,
				planet: payload
			}
		}
		case GET_ALL_CHARACTERS: {
			return {
				...state,
				characters: payload
			}
		}
		case GET_CHARACTER: {
			return{
				...state,
				character: payload
			}
		}
		case GET_ALL_FILMS: {
			return {
				...state,
				films: payload
			}
		}
		case GET_FILM: {
			return {
				...state,
				film: payload
			}
		}
		case CLEAN_DETAIL: {
			return {
				...state,
				film: {}
			}
		}
		default:
			return state
	}
}

export default reducer
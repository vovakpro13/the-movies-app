import {
    CLEAR_SEARCH_MOVIE_GENRES,
    SET_GENRES,
    SET_LOADING_GENRES,
    TOGGLE_SEARCH_MOVIE_GENRE,
} from "../actionTypes";


const initialState = {
    genres: [],
    searchGenres: [],
    loading: false
}

const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {...state, genres: action.payload};
        case SET_LOADING_GENRES:
            return {...state, loading: action.payload};
        case TOGGLE_SEARCH_MOVIE_GENRE:
            const searchGenres = [...state.searchGenres];
            return {
                ...state,
                searchGenres:
                    state.searchGenres.includes(action.payload)
                        ? searchGenres.filter(genreId => genreId !== action.payload)
                        : [...searchGenres,  action.payload]
            };
        case CLEAR_SEARCH_MOVIE_GENRES:
            return {...state, searchGenres: []};
        default:
            return state;
    }
}

export default genreReducer;
import {SET_GENRES, SET_LOADING_GENRES} from "../actionTypes";


const initialState = {
    genres: [],
    loading: false
}

const genreReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GENRES:
            return {...state, genres: action.payload};
        case SET_LOADING_GENRES:
            return {...state, loading: action.payload};
        default:
            return state;
    }
}

export default genreReducer;
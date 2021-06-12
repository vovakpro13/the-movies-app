import {SET_LOADING_MOVIES, SET_MOVIES, SET_PAGINATION} from "../actionTypes";

const initialState = {
    loading: false,
    movies: [],
    pagination: {
        page: 1,
        totalPages: 0,
    },

}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MOVIES:
            return {...state, movies: action.payload};
        case SET_PAGINATION:
            const {page, totalPages} = action.payload;
            return {...state, pagination: {page, totalPages: totalPages || state.pagination.totalPages}};
        case SET_LOADING_MOVIES:
            return {...state, loading: action.payload}
        default:
            return state;
    }
}

export default movieReducer;

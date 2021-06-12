import {combineReducers} from "redux";
import {default as movieReducer} from './movieReducer';
import {default as genreReducer} from "./genreReducer";

export default combineReducers({
    movies: movieReducer,
    genres: genreReducer
});

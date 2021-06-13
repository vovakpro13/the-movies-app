import {combineReducers} from "redux";
import {default as movieReducer} from './movieReducer';
import {default as genreReducer} from "./genreReducer";
import appReducer from "./appReducer";

export default combineReducers({
    app: appReducer,
    movies: movieReducer,
    genres: genreReducer,
});

import {SET_GENRES, SET_LOADING_GENRES} from "../actionTypes";
import {genresAPI} from "../../services";

const setGenres = payload => ({type: SET_GENRES, payload});
const setGenresLoading = payload => ({type: SET_LOADING_GENRES, payload});

const fetchGenres = () =>
    async (dispatch) => {
        dispatch(setGenresLoading(true))
        dispatch(setGenres(await genresAPI.getAll()))
        dispatch(setGenresLoading(false))
    }

export {setGenres, fetchGenres};
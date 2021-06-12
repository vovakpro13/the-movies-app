import {SET_LOADING_MOVIES, SET_MOVIES, SET_PAGINATION} from "../actionTypes";
import {moviesAPI} from "../../services";

const setMovies = payload => ({type: SET_MOVIES, payload});
const setMoviesLoading = payload => ({type: SET_LOADING_MOVIES, payload});
const setMoviesPagination = (page, totalPages) => ({type: SET_PAGINATION, payload: {page, totalPages}});

const fetchMovies = () =>
    async (dispatch) => {
        dispatch(setMoviesLoading(true));
        const {results, total_pages} = await moviesAPI.getAll();
        dispatch(setMovies(results))
        dispatch(setMoviesPagination(1, total_pages));
        dispatch(setMoviesLoading(false));

    }

const fetchMoviesOnPage = (page) =>
    async (dispatch) => {
            dispatch(setMoviesLoading(true));
            const {results} = await moviesAPI.getByPage(page);
            dispatch(setMovies(results));
            dispatch(setMoviesLoading(false));

    }
export {setMovies,setMoviesPagination, fetchMovies, fetchMoviesOnPage};
import {SET_LOADING_MOVIES, SET_MOVIES, SET_MOVIES_SEARCH, SET_PAGINATION} from "../actionTypes";
import {moviesAPI} from "../../services";

const setMovies = payload => ({type: SET_MOVIES, payload});
const setMoviesLoading = payload => ({type: SET_LOADING_MOVIES, payload});
const setMoviesPagination = (page, totalPages) => ({type: SET_PAGINATION, payload: {page, totalPages}});
const setMoviesSearch = payload => ({type: SET_MOVIES_SEARCH, payload});


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

const fetchMoviesBySearch = (page) =>
    async (dispatch, getState) => {
        dispatch(setMoviesLoading(true));
        const {results, total_pages} = await moviesAPI.searchMovies(getState().movies.search, page);
        dispatch(setMovies(results));
        dispatch(setMoviesPagination(page, total_pages));
        dispatch(setMoviesLoading(false));

    }

const fetchMoviesByGenres = (page) =>
    async (dispatch, getState) => {
        dispatch(setMoviesLoading(true));
        const {results, total_pages} = await moviesAPI.getByGenres(getState().genres.searchGenres, page);
        dispatch(setMovies(results));
        dispatch(setMoviesPagination(page, total_pages));
        dispatch(setMoviesLoading(false));

    }

export {setMovies, setMoviesPagination, fetchMovies, fetchMoviesOnPage, fetchMoviesBySearch, setMoviesSearch, fetchMoviesByGenres};
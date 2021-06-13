import axios from "axios";
import {urls} from "../constants";

const apiInstance = axios.create({
    baseURL: urls.api,
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
})

const makeQuery = url => (
    apiInstance
        .get(urls.api + url)
        .then(response => (response.data))
        .catch(e => {
            return e.response?.status
        })
)

const moviesAPI = {
    getByPage: page => (makeQuery(`movie/popular?page=${page}`)),
    getById: id => (makeQuery(`movie/${id}`)),
    getByGenres: (genreIds, page) => (
        makeQuery(`/discover/movie?with_genres=${genreIds.join(',')}&page=${page}`)
    ),
    searchMovies: (query, page) => (makeQuery(`/search/movie/?query=${query}&page=${page}`))
}

const genresAPI = {
    getAll: () => (makeQuery('genre/movie/list').then(data => (data.genres)))
}

export {moviesAPI, genresAPI};
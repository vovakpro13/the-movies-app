import axios from "axios";
import {urls} from "../constants";

const apiInstance = axios.create({
    baseURL: urls.api,
    headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`
    }
})

const moviesAPI = {
    getAll: () => {
        return apiInstance
            .get('movie/popular')
            .then(response => (response.data))
            .catch(e => {
                return e.response?.status
            })
    },
    getByPage: (page) => {
        return apiInstance
            .get(`movie/popular?page=${page}`)
            .then(response => (response.data))
            .catch(e => {
                return e.response?.status
            })
    },
    getById: (id) => {
        return apiInstance
            .get(`movie/${id}`)
            .then(response => (response.data))
            .catch((e) => {
                return e.response?.status
            })
    },
    getByGenres: (genreIds, page) => {
        return apiInstance
            .get(`/discover/movie?with_genres=${genreIds.join(',')}&page=${page}`)
            .then(response => (response.data))
            .catch((e) => {
                return e.response?.status
            })
    },
    searchMovies: (query, page) => {
        return apiInstance
            .get(`/search/movie/?query=${query}&page=${page}`)
            .then(response => (response.data))
            .catch((e) => {
                return e.response?.status
            })
    },
}

const genresAPI = {
    getAll: () => {
        return apiInstance
            .get('genre/movie/list')
            .then(response => (response.data.genres))
            .catch(e => {
                return e.response?.status
            })
    }
}

export {moviesAPI, genresAPI};
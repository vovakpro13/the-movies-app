import React, {useEffect} from 'react';
import MoviesList from "../MoviesList/MoviesList";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, fetchMoviesOnPage, setMoviesPagination} from "../../redux";
import {MoviesPageWrapper, PageTitle} from "./styled";
import {Container} from "../../common";
import Preloader from "../../common/Preloader";
import Pagination from "../../common/Pagination";

const MoviesPage = () => {
    const dispatch = useDispatch();
    const {movies, loading, pagination: {page, totalPages}} = useSelector(state => state.movies);

    useEffect(() => {
        dispatch(fetchMovies());
    }, [])

    const chosePage = (page) => {
        dispatch(setMoviesPagination(page));
        dispatch(fetchMoviesOnPage(page));
    }

    console.log(page)

    return (
        <Container>
            <MoviesPageWrapper>
                <PageTitle>Popular films</PageTitle>
                {
                    !loading
                        ? <>
                            <MoviesList movies={movies}/>
                            <Pagination page={page} total={totalPages} setPage={chosePage}/>
                        </>
                        : <Preloader/>
                }

            </MoviesPageWrapper>
        </Container>
    );
};

export default MoviesPage;
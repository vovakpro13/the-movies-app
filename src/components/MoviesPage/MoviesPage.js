import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {fetchMoviesByGenres, fetchMoviesBySearch, fetchMoviesByPage, setMoviesPagination, setTheme} from "../../redux";

import MoviesList from "../MoviesList/MoviesList";
import {MoviesPageWrapper, ThemeBlock, ThemeSwitch} from "./styled";
import {Container, NotFound, Pagination, Preloader} from "../../common";

import {Switch} from "@material-ui/core";
import NightsStayIcon from '@material-ui/icons/NightsStay';
import WbSunnyIcon from '@material-ui/icons/WbSunny';

const MoviesPage = () => {
    const {
        movies: {
            search, movies, loading,
            pagination: {page, totalPages}
        },
        genres: {searchGenres},
        app: {theme}
    } = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieFetcher()(page));
    }, [page]);

    const getMovieFetcher = () => {
        if(search) return fetchMoviesBySearch
        if (searchGenres.length) return fetchMoviesByGenres
        return fetchMoviesByPage
    }

    const changeTheme = () => {
        dispatch(setTheme(!theme));
        localStorage.setItem('theme', !theme)
    }

    const chosePage = (page) => {
        dispatch(setMoviesPagination(page));
        dispatch(getMovieFetcher()(page));
    }

    return (
        <MoviesPageWrapper theme={theme}>
            <Container>
                <ThemeBlock theme={theme}>
                    <ThemeSwitch>
                        {
                            theme
                                ? <NightsStayIcon style={{color: 'wheat'}}/>
                                : <WbSunnyIcon style={{color: 'grey'}}/>
                        }

                        <Switch checked={theme} onChange={changeTheme} name="gilad"/>

                    </ThemeSwitch>
                </ThemeBlock>
                {
                    !loading
                        ? movies.length
                        ? <React.Fragment>
                            <MoviesList movies={movies}/>
                            <Pagination page={page} total={totalPages} setPage={chosePage}/>
                        </React.Fragment>
                        : <NotFound code={404} text={'Search returned no results..'}/>
                        : <Preloader/>
                }
            </Container>
        </MoviesPageWrapper>
    );
};

export default MoviesPage;
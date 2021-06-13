import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

import {moviesAPI} from "../../services";
import {Container, NotFound, Preloader} from "../../common";
import MoviePage from "./MoviePage/MoviePage";
import {DetailsPageWrapper} from "./styled";

const MovieDetailsPage = ({id}) => {
    const {theme} = useSelector(state => state.app);
    const [movie, setMovie] = useState(null);
    const [errorCode, setErrorCode] = useState(null);

    const getMovie = async () => {
        const response = await moviesAPI.getById(id);
        if (response === 404 || !response) {
            setErrorCode(404);
            return false;
        }
        setMovie(response);
    }

    useEffect(() => {
        getMovie()
    }, [id])

    return (
        <DetailsPageWrapper theme={theme}>
            <Container>
                {
                    !errorCode ?
                        movie
                            ? <MoviePage movie={movie}/>
                            : <Preloader/>
                        : <NotFound code={errorCode} text={`Movie with ID:${id} was not found..`}/>
                }
            </Container>
        </DetailsPageWrapper>
    );
};

export default MovieDetailsPage;
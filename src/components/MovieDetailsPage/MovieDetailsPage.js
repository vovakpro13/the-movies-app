import React, {useEffect, useState} from 'react';
import {Container} from "../../common";
import {DetailsPageWrapper} from "./styled";
import {moviesAPI} from "../../services";
import Preloader from "../../common/Preloader";
import NotFound from "../../common/NotFound";
import MoviePage from "./MoviePage/MoviePage";

const MovieDetailsPage = ({id}) => {

    const [movie, setMovie] = useState(null);
    const [errorCode, setErrorCode] = useState(null);

    const getMovie = async () => {
        const response = await moviesAPI.getById(id);
        if (response === 404 || !response){
            setErrorCode(404);
            return false;
        }
        setMovie(response);
    }


    useEffect(() => {
        getMovie()
    }, [id])

    return (
        <Container>
            <DetailsPageWrapper>
                {
                    !errorCode ?
                        movie
                            ? <MoviePage movie={movie}/>
                            : <Preloader/>
                        : <NotFound code={errorCode} text={`Movie with ID:${id} was not found..`}/>
                }
            </DetailsPageWrapper>

        </Container>
    );
};

export default MovieDetailsPage;
import React from 'react';
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import {MoviesWrapper} from "./styled";

const MoviesList = ({movies}) => {
    return (
        <MoviesWrapper>
            {movies.map(movie => <MoviesListCard key={movie.id} {...movie}/>)}
        </MoviesWrapper>
    );
};

export default MoviesList;
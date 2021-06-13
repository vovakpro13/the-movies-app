import React from 'react';
import {Link} from "react-router-dom";

import {CardWrapper} from "./styled";
import PosterPreview from "./PosterPreview/PosterPreview";
import MovieInfo from "./MovieInfo/MovieInfo";

const MoviesListCard = (props) => {
    const {id,title,  poster_path, } = props;
    return (
        <Link to={'/movie/' + id}>
            <CardWrapper>
                <PosterPreview title={title} img={poster_path}/>
                <MovieInfo {...props} />
            </CardWrapper>
        </Link>
    );
};

export default MoviesListCard;
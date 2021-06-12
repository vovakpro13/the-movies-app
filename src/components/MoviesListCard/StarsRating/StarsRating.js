import React from 'react';
import {StarRatingWrapper, Votes} from "../styled";
import ReactStars from "react-stars/dist/react-stars";

const StarsRating = ({rating, vote_count, size, char}) => {
    return (
        <StarRatingWrapper>
            <ReactStars
                value={rating / 2}
                color2={'#ffd700'}
                size={size}
                char={char}/>

            <Votes>{vote_count}</Votes>
        </StarRatingWrapper>
    );
};

export default StarsRating;
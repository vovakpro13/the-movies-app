import React from 'react';
import StarsRating from "../StarsRating/StarsRating";
import {Badges, Description, MovieTitle, Overview, Release} from "../styled";
import {useSelector} from "react-redux";
import GenreBadge from "../GenreBadge/GenreBadge";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const MovieInfo = (props) => {

    const {genres} = useSelector(state => state.genres);


    const {title, overview, vote_average, vote_count,
        genre_ids, release_date} = props;

    return (
        <Description>
            <MovieTitle>{title}</MovieTitle>
            <StarsRating rating={vote_average} vote_count={vote_count}/>
            <Badges>
                {genre_ids.map(id => <GenreBadge genre={genres.filter(g => g.id === id)[0].name}/> ) }
            </Badges>
            <Overview>{overview}</Overview>
            <Release>
                <CalendarTodayIcon color={'primary'} style={{width: '20px'}}/>
                <span>{release_date}</span>
            </Release>
        </Description>
    );
};

export default MovieInfo;
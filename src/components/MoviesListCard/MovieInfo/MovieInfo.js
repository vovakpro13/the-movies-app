import React from 'react';
import StarsRating from "../StarsRating/StarsRating";
import {Badges, Description, MovieTitle, Overview, Release} from "../styled";
import {useSelector} from "react-redux";
import GenreBadge from "../GenreBadge/GenreBadge";
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const MovieInfo = (props) => {

    const {
        genres:{genres},
        app:{theme}
    } = useSelector(state => state);


    const {title, overview, vote_average, vote_count,
        genre_ids, release_date} = props;

    return (
        <Description theme={theme}>
            <MovieTitle theme={theme}>{title}</MovieTitle>
            <StarsRating rating={vote_average} vote_count={vote_count}/>
            <Badges>
                {genre_ids.map(id => <GenreBadge key={id} genre={genres.filter(g => g.id === id)[0].name}/> ) }
            </Badges>
            <Overview theme={theme}>{overview}</Overview>
            <Release theme={theme}>
                <CalendarTodayIcon color={'primary'} style={{width: '20px'}}/>
                <span>{release_date}</span>
            </Release>
        </Description>
    );
};

export default MovieInfo;
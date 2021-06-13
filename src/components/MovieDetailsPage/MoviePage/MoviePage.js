import React from 'react';
import {useSelector} from "react-redux";
import {urls} from "../../../constants";

import {
    BlurContainer, Info, MoviePageWrapper,
    OverBlock, Poster, MovieOverview,
    Title, Adult, TagLine, Money, Budget,
    Revenue, Companies, ReleaseDate, URL, Runtime
} from "./styled";
import {Badges, Release} from "../../MoviesListCard/styled";

import StarsRating from "../../MoviesListCard/StarsRating/StarsRating";
import GenreBadge from "../../MoviesListCard/GenreBadge/GenreBadge";
import Company from "./Company";
import LinkIcon from '@material-ui/icons/Link';
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';

const MoviePage = ({movie}) => {

    const {theme} = useSelector(state => state.app);
    const {
        adult, backdrop_path, budget, genres, homepage,
        title, overview, poster_path, production_companies,
        release_date, revenue, runtime, tagline, vote_average
    } = movie;

    return (
        <MoviePageWrapper>

            <Poster>
                <OverBlock>
                    <StarsRating rating={vote_average} size={28} char={'☆'}/>
                    <Adult adult={adult}>{adult ? '18+' : '18' }</Adult>
                </OverBlock>
                <img loading={'lazy'} src={urls.image + poster_path} alt={"title"}/>
            </Poster>

            <BlurContainer url={urls.image + backdrop_path}>
                <Info  theme={theme}>
                    <Title theme={theme}><span>{title}</span>
                        <Badges>
                            {genres.map(g => <GenreBadge key={g.id} genre={g.name}/> ) }
                        </Badges></Title>
                    <TagLine theme={theme}>{tagline}</TagLine>

                    <MovieOverview theme={theme}>{overview}</MovieOverview>

                    <Runtime theme={theme}>
                        <QueryBuilderIcon style={{width: '20px'}}/>
                        <span>Runtime:</span> {runtime} min
                    </Runtime>

                    <Money theme={theme}>
                        {
                            budget > 0 &&
                            <Budget>
                                Budget: <span>${budget}</span>
                            </Budget>
                        }
                        {
                            revenue > 0 &&
                            <Revenue theme={theme}>
                                Revenue: <span>${revenue}</span>
                            </Revenue>
                        }

                    </Money>

                    <URL theme={theme} href={homepage} target={'_blank'}><LinkIcon/> Homepage</URL>

                    <h4>Companies</h4>
                    <Companies>
                        {production_companies.map(c => <Company key={c.id} {...c}/>)}
                    </Companies>

                    <ReleaseDate>
                        {
                            release_date &&  <Release>
                                <CalendarTodayIcon style={{width: '16px'}}/>
                                <span>{release_date}</span>
                            </Release>
                        }

                    </ReleaseDate>
                </Info>
            </BlurContainer>
        </MoviePageWrapper>
    );
};

export default MoviePage;
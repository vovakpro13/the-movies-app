import React from 'react';
import {
    BlurContainer,
    Info,
    MoviePageWrapper,
    OverBlock,
    Poster,
    MovieOverview,
    Title,
    Adult,
    TagLine,
    Money, Budget, Revenue, Companies, ReleaseDate, URL
} from "./styled";
import StarsRating from "../../MoviesListCard/StarsRating/StarsRating";
import {Badges, Release} from "../../MoviesListCard/styled";
import GenreBadge from "../../MoviesListCard/GenreBadge/GenreBadge";
import Company from "./Company";
import {urls} from "../../../constants";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";


const MoviePage = ({movie}) => {

    const {
        adult, backdrop_path, budget, genres, homepage,
        title, overview, popularity, poster_path, production_companies,
        production_countries, release_date, revenue, runtime, spoken_languages,
        status, tagline, vote_average
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
                <Info>
                    <Title>{title}
                        <Badges>
                            {genres.map(g => <GenreBadge genre={g.name}/> ) }
                        </Badges></Title>
                    <TagLine>{tagline}</TagLine>
                    <MovieOverview>{overview}</MovieOverview>
                    <Money>
                        {
                            budget !== 0 &&
                            <Budget>
                                Budget: <span>${budget}</span>
                            </Budget>
                        }
                        {
                            revenue !== 0 &&
                            <Revenue>
                                Revenue: <span>${revenue}</span>
                            </Revenue>
                        }

                    </Money>
                    <URL href={homepage} target={'_blank'}>{homepage}</URL>
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
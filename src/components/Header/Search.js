import React, {useRef} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import {SearchBlock} from "./styled";
import {clearSearchMovieGenres, fetchMovies, fetchMoviesBySearch, setMoviesSearch} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

const Search = () => {
    const {movies:{search}, app:{theme}} = useSelector(state => state);
    const dispatch = useDispatch();
    const history = useHistory();

    const confirmSearch = (search) => {
        dispatch(clearSearchMovieGenres());

        if (history.location.pathname !== '/'){
            history.push('/')
        }

        if (search){
            dispatch(setMoviesSearch(search));
            dispatch(fetchMoviesBySearch(1));
            return false;
        }
        dispatch(setMoviesSearch(''));
        dispatch(fetchMovies());



    }

    const changeSearchText = ({target:{value}}) => {
        dispatch(setMoviesSearch((value)))
        !value && confirmSearch();
        return false
    }

    const handleSearch = () => confirmSearch(search)
    const handleEnter = ({key}) => key === 'Enter' && confirmSearch(search)
let r = useRef()
    return (
        <SearchBlock theme={theme} onClick={() => r.current.focus()}>
            <button onClick={handleSearch}><SearchIcon color={theme? 'inherit' : 'primary'}/></button>
            <input ref={r} type={'text'} placeholder={'Search your interesting..'} value={search}
                   onChange={changeSearchText} onKeyPress={handleEnter}/>
        </SearchBlock>
    );
};

export default Search;
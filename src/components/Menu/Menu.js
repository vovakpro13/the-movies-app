import React, {useRef, useState} from 'react';
import {useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {fetchMoviesByGenres, setMoviesSearch, toggleSearchMovieGenre} from "../../redux";
import MenuItem from "./MenuItem";
import {Burger, MenuSpace, MenuWrapper} from "./styled";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


const Menu = () => {
    const {genres: {searchGenres, genres}, app: {theme}} = useSelector(state => state);
    const [menu, setMenu] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const menuRef = useRef();

    const toggleMenu = () => {
        setMenu(!menu)
    }

    window.onclick = (e) => {
        if (menuRef.current && !menuRef.current.contains(e.target)) {
            setMenu(false);
        }
    }

    const pushGenre = (id) => {
        dispatch(toggleSearchMovieGenre(id))
        dispatch(fetchMoviesByGenres(1))
        dispatch(setMoviesSearch(''));
        if (history.location.pathname !== '/') {
            history.push('/')
        }
    }

    return (
        <MenuWrapper ref={menuRef}>
            <Burger theme={theme} onClick={toggleMenu}>
                <span>Genres</span>
                <ArrowDropDownIcon/>
            </Burger>
            <MenuSpace visible={menu}>
                {
                    genres.map(({id, name}) => <MenuItem
                        key={id}
                        title={name}
                        isChosen={searchGenres.find(genreId => genreId === id)}
                        onChoose={() => pushGenre(id)}/>)
                }
            </MenuSpace>
        </MenuWrapper>
    );
};

export default (Menu);
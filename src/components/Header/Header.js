import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {HeaderContent, HeaderWrapper, LogoText, LogoWrapper, Row} from "./styled";
import UserInfo from "./UserInfo/UserInfo";
import Menu from "../Menu/Menu";
import Search from "./Search";
import {Container} from "../../common";
import logo from '../../assets/popcorn.svg';

const Header = () => {
    const {theme} = useSelector(state => state.app);
    return (
        <HeaderWrapper theme={theme}>
            <Container>
                <HeaderContent>
                    <Link to={'/'}>
                        <LogoWrapper>
                            <img src={logo} alt="Logo"/>
                            <LogoText theme={theme}>Corn<span>Film</span></LogoText>
                        </LogoWrapper>
                    </Link>
                    <Row>
                        <Search />
                        <Menu/>
                    </Row>
                    <UserInfo/>
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
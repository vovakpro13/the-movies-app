import React, {useState} from 'react';
import {Link,useHistory} from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';

import {
    Avatar,
    HeaderContent,
    HeaderWrapper,
    LogoText,
    LogoWrapper,
    Row,
    SearchBlock,
    UserName,
    UserSpace
} from "./styled";
import {Container} from "../../common";
import logo from '../../assets/popcorn.svg';
import UserInfo from "../UserInfo/UserInfo";
import Menu from "../Menu/Menu";


const Header = () => {

    const history = useHistory();
    const [searchText, setSearchText] = useState('');

    const changeSearchText = e => {
        setSearchText(e.target.value);
    }

    const handleSearch = () => {
        if (searchText){
            history.push('search?q=' + searchText)
        }
    }

    return (
        <HeaderWrapper>
            <Container>
                <HeaderContent>
                    <Link to={'/'}>
                        <LogoWrapper>
                            <img src={logo} alt="Logo"/>
                            <LogoText>Corn<span>Film</span></LogoText>
                        </LogoWrapper>
                    </Link>
                    <Row>
                        <SearchBlock>
                            <button onClick={handleSearch}><SearchIcon /></button>
                            <input placeholder={'Search your interesting..'} value={searchText} onChange={changeSearchText}/>
                        </SearchBlock>
                        <Menu />
                    </Row>
                    <UserInfo />
                </HeaderContent>
            </Container>
        </HeaderWrapper>
    );
};

export default Header;
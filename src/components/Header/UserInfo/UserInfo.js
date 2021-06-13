import React from 'react';
import {useSelector} from "react-redux";

import {Avatar, UserName, UserSpace} from "./styled";

const UserInfo = () => {
    const {theme} = useSelector(state => state.app);
    return (
        <UserSpace>
            <Avatar>
                <img src="https://avatars.githubusercontent.com/u/73073894?v=4" alt=""/>
            </Avatar>
            <UserName  theme={theme}>Volodya</UserName>
        </UserSpace>
    );
};

export default UserInfo;
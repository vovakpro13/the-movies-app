import React from 'react';
import {useSelector} from "react-redux";

import {CompanyWrapper} from "./styled";
import {urls} from "../../../constants";

const Company = ({name, logo_path}) => {
    const {theme} = useSelector(state => state.app);
    return (
        <CompanyWrapper theme={theme}>
            {logo_path && <img src={urls.image + logo_path } alt="name"/> }
            <span>{name}</span>
        </CompanyWrapper>
    );
};

export default Company;
import React from 'react';
import {CompanyWrapper} from "./styled";
import {urls} from "../../../constants";
import defaultLogo from '../../../assets/gallery.png';
import {useSelector} from "react-redux";
const Company = (props) => {
    const {theme} = useSelector(state => state.app);
    const {name, origin_country, logo_path} = props;

    return (
        <CompanyWrapper theme={theme}>
            {logo_path && <img src={urls.image + logo_path } alt=""/> }
            <span>{name}</span>
        </CompanyWrapper>
    );
};

export default Company;
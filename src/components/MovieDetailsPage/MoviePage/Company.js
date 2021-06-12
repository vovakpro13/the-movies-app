import React from 'react';
import {CompanyWrapper} from "./styled";
import {urls} from "../../../constants";
import defaultLogo from '../../../assets/gallery.png';
const Company = (props) => {
    const {name, origin_country, logo_path} = props;
    console.log(origin_country)
    return (
        <CompanyWrapper>
            {logo_path && <img src={urls.image + logo_path } alt=""/> }
            <span>{name}</span>
        </CompanyWrapper>
    );
};

export default Company;
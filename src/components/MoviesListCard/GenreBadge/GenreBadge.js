import React from 'react';
import {Badge} from "../styled";
import {useSelector} from "react-redux";

const GenreBadge = ({genre}) => {
    const {theme} = useSelector(state => state.app);

    return (
        <Badge theme={theme}>{genre}</Badge>
    );
};

export default GenreBadge;
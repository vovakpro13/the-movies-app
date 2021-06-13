import React from 'react';
import {useSelector} from "react-redux";

import {Badge} from "../styled";

const GenreBadge = ({genre}) => {
    const {theme} = useSelector(state => state.app);
    return <Badge theme={theme}>{genre}</Badge>;
};

export default GenreBadge;
import React from 'react';
import {Badge} from "../styled";

const GenreBadge = ({genre}) => {
    return (
        <Badge>{genre}</Badge>
    );
};

export default GenreBadge;
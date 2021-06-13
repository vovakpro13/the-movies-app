import React from 'react';
import {Item} from "./styled";

const MenuItem = ({title, onChoose, isChosen}) => {
    return (
        <Item onClick={onChoose} chosen={isChosen}>
            <span>{title}</span>
        </Item>
    );
};

export default MenuItem;
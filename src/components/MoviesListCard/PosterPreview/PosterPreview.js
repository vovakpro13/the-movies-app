import React from 'react';

import {PosterPreviewWrapper} from "../styled";
import {urls} from "../../../constants";

const PosterPreview = ({title, img}) => {
    return (
        <PosterPreviewWrapper>
            <img src={urls.image + img} alt={title}/>
        </PosterPreviewWrapper>
    )
};

export default PosterPreview;
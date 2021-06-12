import React from 'react';
import styled from "styled-components";
import {CircularProgress} from "@material-ui/core";

const Preloader = ({width}) => {
    return (
        <PreloaderWrapper >
            <CircularProgress width={width}/>
        </PreloaderWrapper>
    );
};

const PreloaderWrapper = styled.div`
    width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px
`;

export default Preloader;
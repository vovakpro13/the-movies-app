import React from 'react';
import styled from "styled-components";
import sorry from '../assets/sorry.svg';
import {useSelector} from "react-redux";
import {theme} from "../constants";

export const NotFound = ({code, text}) => {
    const {theme} = useSelector(state => state.app);

    return (
        <Wrapper theme={theme}>
            <img src={sorry} alt="Not found"/>
            <h3>{code} </h3>
            <span>{text}</span>
        </Wrapper>
    );
};

const Wrapper = styled.div`
  width: 270px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  background-color: ${props => (props.theme === true) ? theme.dark.cardBackground : theme.white} ;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 1px 5px 12px ${props => (props.theme === true) ? theme.dark.cardBackground : '#dbdbdb'} ;

  color: ${props => (props.theme === true) ? theme.dark.text : theme.black};
  img {
    width: 200px;
  }

  h3 {
    font-size: 50px;
    font-weight: 300;
    margin-top: 15px;
  }

  span {
    margin-top: 10px;
    max-width: 200px;
    line-height: 24px;
    text-align: center;
  }
`;

export default NotFound;
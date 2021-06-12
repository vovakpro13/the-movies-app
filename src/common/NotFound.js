import React from 'react';
import styled from "styled-components";
import sorry from '../assets/sorry.svg';

const NotFound = ({code, text}) => {
    return (
        <Wrapper>
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
  background-color: white;
  padding: 15px 30px;
  border-radius: 8px;
  box-shadow: 1px 5px 12px #dbdbdb;

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
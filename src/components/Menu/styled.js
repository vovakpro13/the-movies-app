import styled from "styled-components";
import {theme} from "../../constants";

const MenuWrapper = styled.div`
  transition-duration: 0.5s;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  margin-left: 10px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 100;
  background-color: transparent;
`;

const MenuSpace = styled.div`
  transition-duration: 0.5s;
  overflow-y: scroll;
  max-height: ${props => props.visible ? '350px' : '0px'};
  border-top: ${props => props.visible ? '1px solid grey' : '0'};
  margin-top: 15px;
  box-sizing: border-box;
  top: 0;
  border-radius: 4px;


  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #F5F5F5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    -webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, .3);
    background-color: #d4d4d4;
  }
`;

const Burger = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${props => (props.theme === true) ? theme.white : '#585858'}; ;

  span {
    font-weight: 300;
    margin-right: -2px;
    
    @media (max-width: 435px) {
      display: none;
    }
  }
`;

const Item = styled.div`
  border-bottom: 1px solid #eaeaea;
  padding: 12px 25px 5px;
  cursor: pointer;
  background-color: ${props => props.chosen ? '#bbbbbb': '#fff'};
  color: ${props => props.chosen ? 'white': 'black'};
  
  span {
    font-weight: 300;
    font-size: 17px;
  }
  
  &:hover{
    opacity: 0.9;
  }
`;


export {MenuWrapper, MenuSpace, Burger, Item};
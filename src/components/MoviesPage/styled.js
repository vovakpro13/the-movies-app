import styled from "styled-components";
import {theme} from "../../constants";

const MoviesPageWrapper = styled.div`
  min-height: 100vh;
  margin-top: 9vh;
  background-color: ${props => (props.theme === true) ? theme.dark.background : 'transparent'};
`;

const ThemeBlock = styled.div`
  padding: 20px 20px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const ThemeSwitch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export {MoviesPageWrapper, ThemeBlock, ThemeSwitch}
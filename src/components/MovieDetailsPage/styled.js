import styled from "styled-components";
import {theme} from "../../constants";

const DetailsPageWrapper = styled.div`
  width: 100%;
  min-height: 91vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.theme === true) ? theme.dark.background : 'transparent'};
`;

export {DetailsPageWrapper}
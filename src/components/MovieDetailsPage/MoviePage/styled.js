import styled from "styled-components";
import {theme} from "../../../constants";

const MoviePageWrapper = styled.div`
  display: flex;
  align-items: normal;
  margin: 40px 0;
  
  @media (max-width: 435px){
    flex-direction: column;
    align-items: center;
  }
  
`;

const Poster = styled.div`
  position: relative;
  img{
    width: 370px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    
    @media (max-width: 790px){
      width: 260px;
    }

    @media (max-width: 435px){
      width: 370px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: 0;
    }

    @media (max-width: 380px){
      max-width: 300px;
    }
    
  }
`;

const BlurContainer= styled.div`
  padding:0 20px 0 0;
  width: 100%;
  height: inherit;
  background: url(${props => props.url})  no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 790px){
    border-bottom-left-radius: 10px;
  }

  @media (max-width: 435px){
    width: 370px;
    border-top-right-radius: 0;
  }

  @media (max-width: 380px){
    max-width: 300px;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 30px;
  background: ${props => (props.theme === true) 
          ? theme.dark.movieDetailsBackground 
          : theme.light.movieDetailsBackground
  };
  //background-color: rgba(255, 255, 255, 0.7);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(6px);
  
  @media (max-width: 790px){
    border-bottom-left-radius: 10px;
  }

  @media (max-width: 435px){
    width: 370px;
  }

  @media (max-width: 380px){
    max-width: 300px;
  }
  
  h4{
    margin: 15px 0 9px;
    color: ${props => (props.theme === true) ? theme.dark.text : theme.black };
  }
`;



const OverBlock = styled.div`
  position: absolute;
  top: 0;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  width: 100%;
  border-top-left-radius: 10px;
  display: flex;
  align-items: center;
  padding: 0 17px;
  justify-content: space-between;
  
  @media (max-width: 435px){
    border-top-right-radius: 10px;
  }

`;

const Title = styled.div`
  font-weight: 500;
  letter-spacing: 0.4px;
  font-size: 28px;
  display: flex;
  justify-content: space-between;

  span{
    color: ${props => (props.theme === true) ? theme.white : theme.black };

  }
  @media (max-width: 790px){
    display: block;
    margin-bottom: 6px;
  }
  
`;

const MovieOverview = styled.div`
  margin-top: 20px;
  font-weight: 300;
  font-size: 17px;
  color: ${props => (props.theme === true) ? theme.dark.text : theme.black };
`;

const Adult = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: rgb(255, 255, 255);
  border: 1px solid rgba(255, 255, 255, 0.62);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: ${props => props.adult ? 'red' : 'green'};
  font-weight: 500;
`;

const TagLine = styled.span`
  margin: 2px 0 8px;
  font-size: 17px;
  font-weight: 400;
  padding-bottom: 2px;
  border-bottom: 1px solid;
  color: ${props => (props.theme === true) ? theme.dark.text : theme.black };
`;
const Money = styled.div`
  margin: 20px 0;
  color: ${props => (props.theme === true) ? theme.dark.text : theme.black };
`;
const Budget = styled.div`
  
  span{
    font-weight: 300;

  }
`;
const Revenue = styled.div`
  span {
    color: ${props => (props.theme === true) ? theme.dark.text : '#055005' };
    font-weight: 300;
  }
`;

const Companies = styled.div`
  display: flex;
  align-items: normal;
  justify-content: flex-start;
  margin-top: 5px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;


const CompanyWrapper = styled.div`
  background: ${props => (props.theme === true) ? '#000' : theme.light.companyBackground };
  color: ${props => (props.theme === true) ? theme.dark.text : theme.black};
  border-radius: 7px;
  padding: 14px;
  flex-basis: 18%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 15px;
  margin-bottom: 15px;
  
  img {
    width: 40px;
    margin-right: 10px;
  }

  span {
    display: block;
    text-align: center;
    font-size: 14px;
  }

`;

const ReleaseDate = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 15px 25px;
  color: ${props => (props.theme === true) ? theme.dark.text : theme.black };
`;

const URL = styled.a`
  margin-bottom: 15px;
  color: ${props => (props.theme === true) ? theme.dark.text : '#0a5461' };
  display: flex;
  align-items: center;
  :hover {
    transition-duration: 0.2s;
    color: ${props => (props.theme === true) ? theme.black : theme.dark.text  };
  }
`;

const Runtime = styled.div`
  color: ${props => (props.theme === true) ? theme.dark.text : theme.black };
  margin-top: 15px;
  align-items: center;
  display: flex;
  font-weight: 300;
  
  span{
    margin:0  3px;
    font-weight: 400;
  }
  
`;
export {MoviePageWrapper, Runtime,CompanyWrapper,ReleaseDate, URL, Companies, TagLine,Revenue,Budget,Money, Poster, Info, Title, OverBlock, BlurContainer,Adult, MovieOverview};
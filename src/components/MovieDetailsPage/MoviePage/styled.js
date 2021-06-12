import styled from "styled-components";

const MoviePageWrapper = styled.div`
  display: flex;
  align-items: normal;
  margin-bottom: 50px;
  
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

const Info = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px 20px;
  background: linear-gradient(148deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.6) 100%);
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
    margin-top: 15px;
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
  opacity: 0.8;

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
  color: black;
  display: flex;
  justify-content: space-between;

  @media (max-width: 790px){
    display: block;
    margin-bottom: 6px;
  }

  
`;

const MovieOverview = styled.div`
  color: black;
  margin-top: 20px;
  font-weight: 300;
  font-size: 17px;
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
`;
const Money = styled.div`
  margin: 20px 0;
`;
const Budget = styled.div`
  color: black;
  span{
    font-weight: 300;

  }
`;
const Revenue = styled.div`
  span {
    color: #055005;
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
  background-color: rgba(255, 255, 255, 0.85);
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
`;
const URL = styled.a`
  margin-bottom: 15px;
  color: rgba(6, 33, 62, 0.65);

  :hover {
    transition-duration: 0.2s;
    color: rgb(0, 0, 0);
  }
`;
export {MoviePageWrapper,CompanyWrapper,ReleaseDate, URL, Companies, TagLine,Revenue,Budget,Money, Poster, Info, Title, OverBlock, BlurContainer,Adult, MovieOverview};
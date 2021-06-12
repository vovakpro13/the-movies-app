import styled from "styled-components";

const CardWrapper = styled.div`
  width: 240px;
  border-radius: 4px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  margin-bottom:30px;
  justify-content: flex-start;

  @media (max-width: 1030px){
    width: 247px;
  }

  @media (max-width: 790px){
    width: 280px;
  }

  @media (max-width: 435px){
    width: 290px;
  }

  @media (max-width: 330px){
    width: 275px;
  }
`;

const PosterPreviewWrapper = styled.div`
  img{
    width: 100%;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    margin: 0;
    padding: 0;
  }
`;

const Description = styled.div`
  background-color: #ffffff;
  padding: 10px 15px;
  border: 1px solid #dcdcdc;
  border-top: none;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  margin-top: -5px;
`;

const MovieTitle = styled.p`
  color: #131313;
  font-size: 19px;
`;

const StarRatingWrapper = styled.div`
  margin: 4px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const Votes = styled.div`
  padding-left: 6px;
  font-size: 13px;
  color: #a5a5a5;
`;

const Badge = styled.div`
  border-radius: 5px;
  padding: 2px 5px;
  background-color: #efefef;
  margin: 4px 3px;
  color: #040e39;
  font-size: 14px;
`;

const Overview = styled.div`
  color: #5f5f5f;
  font-size: 14px;
  margin-top: 10px;
  line-height: 21px;
`;

const Release = styled.div`
  color: #2a2a2a;
  font-size: 15px;
  margin-top: 15px;
  display: flex;
  align-items: center;
  font-style: italic;
  span{
    margin-left: 6px;
    font-weight: 300;
  }
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export {
    CardWrapper,
    Description,
    PosterPreviewWrapper,
    StarRatingWrapper,
    MovieTitle,
    Badge, Overview, Badges,
    Votes, Release
}
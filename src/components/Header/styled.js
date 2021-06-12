import styled from "styled-components";

const HeaderWrapper = styled.header`
  width: 100%;
  height: 70px;
  box-shadow: 0.5px 0.866px 0.5px rgba(0, 0, 0, 0.15);
  background-color: #ffffff;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 45px;
    margin-right: 17px;
  }
`;

const LogoText = styled.p`
  font-size: 23px;
  letter-spacing: 0.4px;
  color: #343434;

  span {
    padding: 0 4px;
    background-color: #313131;
    color: white;
    margin-left: 3px;
    border-radius: 3px;
  }

  @media (max-width: 435px) {
    display: none;
  }
`;

const SearchBlock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 300px;
  height: 30px;
  border-radius: 50px;
  background-color: rgba(247, 246, 246, 0.47);
  border: 1px solid #e7e7e7;
  padding: 3px 10px;
  margin-right: 17px;

  input {
    background-color: inherit;
    outline: none;
    border: none;
    width: 90%;
    border-radius: inherit;
    padding: 0 5px;
    @media (max-width: 435px){
      font-size: 12px;
    }
  }

  button {
    outline: none;
    border: none;
    background-color: inherit;
    color: #494949;
    cursor: pointer;
  }

  @media (max-width: 435px){
    width: 200px;
  }
  @media (max-width: 435px){
    width: 170px;
    height: 25px;
  }
  @media (max-width: 330px){
    width: 130px;
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;


export {
    HeaderWrapper, HeaderContent, LogoWrapper, LogoText
    , SearchBlock, Row
}
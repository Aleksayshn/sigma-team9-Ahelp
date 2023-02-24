import styled from 'styled-components';

export const Main = styled.main`
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;

export const Goals = styled.div`
  padding-top: 138px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 45%;
  margin: 0 auto;
 h2 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 40px;
  }
`;

export const Works = styled.div`
  max-width: 65%;
  margin-left: auto;
  margin-right: auto;

  padding-top: 40px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  h2 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 40px;
  }
`;

export const TypeWorks = styled.div`
  display: flex;
  align-items: flex-start;
  text-align: center;
  h2 {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 40px;
  }
`;

export const CardsBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CardsBlockImg = styled.div`
margin-bottom: 20px;
`;

const ThirdBlockWrapper = styled.div`
  margin-top: 80px;

  & > h2 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  & > span {
    font-size: 18px;
    color: #666;
    margin-bottom: 20px;
    display: block;
  }


  & > .OurGoal__third-block__img-wrap {
    margin-top: 40px;

    & > img {
      width: 100%;
      height: auto;
    }
  }




`;
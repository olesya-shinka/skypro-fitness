import styled from "styled-components";
  
export const Container = styled.div`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
`;
  
export const HeaderNav = styled.nav`
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
`;
  
export const Course = styled.main`
  margin-top: 75px;
  height: 310px;
`;

export const CourseBox = styled.div`
  height: 310px;
  width: 1160px;
  display: flex;
  justify-content: space-between;
  background: rgba(205, 205, 205, 0.10); 
  border-radius: 30px;
`;

export const CourseYoga = styled.h1`
  padding-left: 30px;
  margin-top: 30px;
  font-size: 64px;
  font-weight: 400;
  line-height: 72px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const CourseImgBox = styled.div`
  width: 425px;
  height: 310px;
  position: relative;
  overflow: hidden;
`;

// export const CourseImg = styled.img`
//   background: #FAFAFA;
//   position: absolute;
//   transform: translate(-8px, -172px);
//   width: 427px;
//   height: 550px;
// `;

export const Tender = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
`;

export const TenderTitle = styled.h2`
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const Offers = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 87px;
`;

export const OffersBox = styled.div`
  display: flex;
  gap: 24px;
`;

export const OffersNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1202px;
  background: #c7e957;
  width: 67px;
  height: 67px;
  color: #000;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
`;

export const P = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin-top: 0;
  font-family: "StratosSkyeng", sans-serif;
`;

export const OffersText = styled.div`
  width: 244px;
`;

export const PNum = styled.p`
  color: #000;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const DirectionsTitle = styled.h2`
  margin-bottom: 22px;
  font-size: 40px;
  font-weight: 400;
  line-height: 48px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const DirectionsLine = styled.div`
  display: flex;
  column-gap: 168px;
  padding-left: 35px;
`;

export const DirectionsText = styled.ul`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const Li = styled.li`
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
`;

export const DescribeText = styled.p`
  margin-top: 75px;
  margin-bottom: 75px;
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const RegisterBox = styled.div`
  background: #f9ebff;
  height: 300px;
  border-radius: 30px;
  display: flex;
  margin-bottom: 95px;
`;

export const Application = styled.div`
  padding-left: 52px;
`;

export const ApplicationText = styled.h3`
  color: #000;
  margin-bottom: 46px;
  font-size: 32px;
  font-weight: 400;
  line-height: 40px;
  font-family: "StratosSkyeng", sans-serif;
  padding-top: 35px;
`;

export const ApplicationBtn = styled.button`
  border-radius: 46px;
  width: 275px;
  height: 52px;
  background: #580ea2;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  font-family: "StratosSkyeng", sans-serif;
  :hover{
    background: #DAF289;
  }
  :active{
    background: #EBFFAB;
  }
`;

export const CourseImgAddBox = styled.div`
  margin-top: -165px;
`;
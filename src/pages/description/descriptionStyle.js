import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 30px;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 20px;
  padding-bottom: 95px;
  padding-left: 20px;
`;

export const Header = styled.header``;

export const Container = styled.div`
  font-size: 24px;
  line-height: 32px;
`;

export const TitleBox = styled.div`
  background-color: rgba(205, 205, 205, 0.1);
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  margin-top: 40px;
  height: 310px;
  backdrop-filter: blur(14.51865291595459px);
`;

export const Title = styled.h1`
  margin: 30px;
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 64px;
  font-style: normal;
  line-height: 72px; /* 112.5% */
  letter-spacing: -0.8px;
`;

export const ForYou = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-size: 40px;
  line-height: 48px;
  margin-top: 75px;
  margin-bottom: 20px;
`;

export const ForYouList = styled.ol`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 87px;
  max-height: 128px;
`;

export const ForYouListItem = styled.li`
  counter-increment: item;
  display: flex;
  align-items: flex-start;
  ::before {
    margin-right: 24px;
    content: counter(item);
    background: #c7e957;
    border-radius: 100%;
    color: #000;
    width: 69px;
    text-align: center;
    display: inline-block;
    padding: 10px;
  }
`;

export const Directions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
  margin-top: 50px;
`;

export const DirectionsList = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`;

export const DirectionsListItem = styled.li`
  list-style-type: disc;
  list-style-position: inside;
`;

export const Results = styled.div`
  margin-bottom: 75px;
`;

export const ResultsText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
`;

export const Application = styled.div`
  background: #f9ebff;
  border-radius: 30px;
  padding: 46px 52px;
  margin-bottom: 95px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ApplicationText = styled.p`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 32px;
  font-style: normal;
  line-height: 40px; /* 125% */
  margin-bottom: 34px;
`;

export const CourseImg = styled.img`
  border-radius: 30px;
  background-position: 50% 50%;
  background-position: right;
  background-repeat: no-repeat;
  background-size: contain;
  fill: transparent;
`;

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LoadingCircle = styled.div`
  margin-top: 100px;
  margin-left:140px;
  position: relative;
  text-align: center; 
  padding: 20px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
::before {
  content: ''; /
  position: absolute;
  border: 2px solid #3D64FF; 
  left: -20px;
  opacity: 0;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite; 
}
@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
::after,
::before {
  content: '';
  position: absolute;
  border: 2px solid #3D64FF;
  left: -20px;
  opacity: 0;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite;
}

::after {
  animation-delay: 1.25s;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
`;

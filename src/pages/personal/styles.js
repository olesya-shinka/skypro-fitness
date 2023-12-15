/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Wrap = styled.div`
  font-family: "StratosSkyeng";
  font-style: normal;
  position: relative;
  width: 100%;
  background: #fafafa;
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
`;
export const Content = styled.div`
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TitleText = styled.span`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  font-feature-settings:
    "pnum" on,
    "lnum" on;
  color: #000000;
  padding-top: 74px;
`;

export const Cards = styled.div`
  padding-top: 20px;
  text-align: center;
`;

export const TitleTextLogin = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings:
    "pnum" on,
    "lnum" on;
  color: #000000;
  padding-top: 40px;
`;
export const TitleTextPass = styled.span`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  font-feature-settings:
    "pnum" on,
    "lnum" on;
  color: #000000;
  padding-top: 20px;
`;
export const ChangeDate = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  row-gap: 14px;
  padding-bottom: 75px;
`;
export const ChangeButton = styled.button`
  width: 275px;
  height: 52px;
  left: 140px;
  top: 360px;
  background: #580ea2;
  border-radius: 46px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: -0.05px;
  font-feature-settings:
    "pnum" on,
    "lnum" on;
  color: #ffffff;
  border: none;
  &:hover {
    background-color: #3f007d;
  }

  &:active {
    background-color: #271a58;
  }
`;
export const CourseWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TitleCourse = styled.div`
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  font-feature-settings:
    "pnum" on,
    "lnum" on;
  color: #000000;
`;

export const ProfCard = styled.img`
  width: 360px;
  height: 480px;
  left: 0px;
  top: 0px;
  border-radius: 30px;
  position: absolute;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Параметры тени */
`;
export const Course = styled.div`
  background: tracnsparent;
  box-shadow: -10px 10px 15.999px 0px rgba(0, 0, 0, 0.10), 10px -10px 16px 0px rgba(0, 0, 0, 0.10);
2x;
  color: black;
  height: 480px;
  width: 360px;
  border-radius: 30px;
  display: inline-block;
  position: relative;
  z-index: 0;
  background-position: 50% 50%;
  background-size: auto;

  `;


export const ProfList = styled.ul`
  padding: 0px;
  margin: 0px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 140px;
`;
export const Prof = styled.div`
  position: relative;
`;
export const ProfButton = styled.button`
  width: 136px;
  height: 43px;
  left: 30px;
  top: 410px;
  background: #c7e957;
  border-radius: 80px;
  font-family: "StratosSkyeng";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 115%;
  font-feature-settings:
    "pnum" on,
    "lnum" on;
  color: #000000;
  position: absolute;
  border: none;
`;

export const Text = styled.span`
  margin-left: 10px;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
`;

export const Courses = styled.div`
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  padding: 10px;
`;
export const CourseName = styled.h2`
  color: #000;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: -0.5px;
  width: 290px;
  padding-top: 30px;
  padding-left: 30px;
  position: relative;
  z-index: 1;
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
`
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
  padding-left: calc(50% - 800px);
  padding-right: calc(50% - 800px);
`;
export const Content = styled.div`
  margin-left: 140px;
  margin-right: 140px;
`;

export const Title = styled.div`
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  padding-bottom: 40px;
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
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5); /* Параметры тени */
`;
export const ProfList = styled.ul`
  padding: 0px;
  margin: 0px;
  padding-top: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 40px;
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

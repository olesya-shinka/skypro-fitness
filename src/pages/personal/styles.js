import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  @font-face {
    font-family: "StratosSkyeng", sans-serif;
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../../../public/fonts/StratosSkyeng.woff2") format("woff2"),
      url("../../../public/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  } 
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: StratosSkyeng, sans-serif;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
`
export const Wrap = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const TitleText = styled.span`
  font-size: 48px;
  line-height: 56px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 74px;
`;

export const TitleTextLogin = styled.span`
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  padding-top: 40px;
`;
export const TitleTextPass = styled.span`
  font-size: 24px;
  line-height: 32px;
  font-feature-settings: "pnum" on, "lnum" on;
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
  font-feature-settings: "pnum" on, "lnum" on;
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
  font-size: 48px;
  line-height: 56px;
  font-feature-settings: "pnum" on, "lnum" on;
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
  font-size: 20px;
  line-height: 115%;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #000000;
  position: absolute;
  border: none;
`;

export const Text = styled.span`
  margin-left: 10px;
`;

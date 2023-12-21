import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  background-color: #271a58;
  width: 100%;
  height: 100%;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 140px;
  margin-right: 140px;
`;

export const Header = styled.div`
  display: flex;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.h1`
  color: var(--monochrome-white-20, #fff);
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
  letter-spacing: -0.05px;
  font-family: "StratosSkyeng", sans-serif;
  margin-top: 100px;
  opacity: 0.5;
`;
export const Slogan = styled.p`
  color: #f4f4ff;
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 91.5%;
  letter-spacing: -1.169px;
  font-family: "StratosSkyeng", sans-serif;
  width: 830px;
  height: 110px;
  margin-top: 17px;
  margin-bottom: 52px;
`;
export const SaleSticker = styled.image`
  width: 151.741px;
  height: 212.27px;
  fill: #271a58;
  stroke-width: 2px;
  stroke: #ff8071;
  position: relative;
  top: 80px;
`;
export const Courses = styled.div`
  display: grid;
  box-sizing: border-box
  margin-left: 140px;
  grid-gap: 37px 44px;
  grid-template-columns: repeat(3, 360px);
  position: relative;

`;

export const Course = styled.div`
  background: tracnsparent;
  box-shadow: -10px 10px 15.999px 0px rgba(0, 0, 0, 0.10), 10px -10px 16px 0px rgba(0, 0, 0, 0.10);
2x;
  color: black;
  height: 480px;
  width: 360px;
  border-radius: 30px;
  margin-top: 20px;
  display: inline-block;
  position: relative;
  z-index: 0;
  background-image: url(${(props) => props.image});
  background-position: 50% 50%;
  background-size: auto;
  :hover{
 transform: scale(1.03);
 transition: 2seconds ease-in-out;
  }
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
export const CourseImg = styled.img`
  height: 480px;
  width: 360px;
  border-radius: 30px;
  background-position: 50% 50%;
  background-size: cover;
`;
//z-index: -1; если указать то картинки совсем исчезают

export const ButtonUp = styled.button`
  display: inline-flex;
  width: 147px;
  height: 48px;
  padding: 7px 24px 9px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 46px;
  background: #c7e957;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: -0.1px;
  margin-top: 34px;
  margin-bottom: 60px;
  :hover {
    background: #daf289;
  }
  :active {
    background: #ebffab;
  }
`;
export const Link = styled(NavLink)`
  text-decoration: none;
`;

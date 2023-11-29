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
`

export const Container = styled.div`
  background-color: #271A58;
  width: 100%;
  height: 100%;
      `
  
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 140px;
  margin-right: 140px;
  `

export const Header = styled.div`
  display: flex;
  `
export const Text = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.h1`
  color: var(--monochrome-white-20, #FFF);
  font-variant-numeric: lining-nums proportional-nums;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%; 
  letter-spacing: -0.05px;
  font-family: "StratosSkyeng", sans-serif;
  margin-top: 100px;
  opacity: 0.5;
    `
export const Slogan = styled.p`
  color: #F4F4FF;
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
     `
export const SaleSticker = styled.image`
  width: 151.741px;
  height: 212.27px;
  fill: #271A58;
  stroke-width: 2px;
  stroke: #FF8071;
  position: relative;
  top: 80px;


`
export const Courses = styled.div`
  display: grid;
  margin-left: 140px;
  grid-gap: 37px 44px;
  grid-template-columns: repeat(3, 360px);


`
export const Course = styled.image`
  color: black;
  height: 480px;
  width: 360px;
  border-radius: 30px;
  box-shadow: -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.10), 10px -10px 16px 0px rgba(0, 0, 0, 0.10);
  background-size: cover;

  `
export const CourseYoga = styled(Course)`
background-image: url("./img/card1.svg");

`
export const CourseStrech = styled(Course)`
background-image: url("./img/card2.svg");

`

export const CourseDance = styled(Course)`
background-image: url("./img/card3.svg");
height: 440px;
width: 330px;
`
export const CourseStep = styled(Course)`
background-image: url("./img/card4.svg");

`

export const CourseBodyflex = styled(Course)`
background-image: url("./img/card5.svg");

`

  
export const CourseName = styled.h2`
color: #000;
font-variant-numeric: lining-nums proportional-nums;
font-family: Abhaya Libre ExtraBold;
font-size: 36px;
font-style: normal;
font-weight: 800;
line-height: 110%;
letter-spacing: -0.5px;
width: 290px;
padding-top: 30px;
padding-left: 30px;
`


export const ButtonUp= styled.button`
  display: inline-flex;
  width: 147px;
  height: 48px;
  padding: 7px 24px 9px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 46px;
  background: #C7E957;
  color: #000;
  text-align: center;
  font-variant-numeric: lining-nums proportional-nums;
  font-family: "StratosSkyeng", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 133.333% */
  letter-spacing: -0.1px;
  margin-top: 34px;
  :hover{
    background: #DAF289;
  }
  :active{
    background: #EBFFAB;
  }
`

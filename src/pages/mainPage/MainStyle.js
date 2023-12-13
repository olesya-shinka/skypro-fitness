/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";
export const Container = styled.div`
  background-color: #271A58;
  width: 100%;
  height: 2400px;

  `
export const LoadingCircle = styled.div`
  margin-top: 100px;
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

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 140px;
  margin-right: 140px;
  `

export const Header = styled.div`
  display: flex;
  gap: 15px;
  `
export const Text = styled.div`
display: flex;
flex-direction: column;
margin-left: -140px;
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
export const SaleSticker = styled.div`
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
  line-height: 32px; 
  letter-spacing: -0.1px;
  margin-top: 34px;
  margin-bottom: 60px;
  :hover{
    background: #DAF289;
  }
  :active{
    background: #EBFFAB;
  }
`
export const Sidebar = styled.div`
  max-width: 1200px;
  min-height: 100px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  row-gap: 10px;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

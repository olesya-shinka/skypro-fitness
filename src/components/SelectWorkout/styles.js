/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const SelectContainer = styled.div`
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectWrapper = styled.div`
  width: 444px;
  max-height: 660px;
  border-radius: 12px;
  background: #ffffff;
  padding: 36px 53px 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SelectCloseIconSvg = styled.svg`
  width: 20px;
  height: 23px;
  position: absolute;
  top: 15px;
  left: 410px;
  cursor: pointer;
`;

export const SelectTitle = styled.div`
  font-size: 32px;
  margin-bottom: 40px;
  color: #000000;
  text-align: center;
`;

export const SelectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 12px;
  padding-left: 10px;
  padding-right: 10px;
  overflow-y: auto;
  -ms-overflow-style: none; /* IE и Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
`;

export const SelectItem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 23px;
width: 278px;
border-radius: 26px;
border: 1px solid
  // ${({ $workoutStatus }) => ($workoutStatus ? "#06B16E" : "#06B16E")};
font-size: 20px;
letter-spacing: -0.05px;
text-align: center;
padding: 12px 30px 17px;
cursor: pointer;
position: relative;
`;

export const SelectItemCheckboxImg = styled.svg`
width: 28px;
height: 26px;
position: absolute;
left: 242px;
top: 12px;
fill: #06B16E;
`;

export const SelectItemType = styled.span`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.016px;
  margin-top: 6px;
`;
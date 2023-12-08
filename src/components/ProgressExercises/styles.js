/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

const getProgressColor = (index) => {
  const colors = ["progressOrange", "progressBlue", "progressPurple"];
  const order = index + 1;
  return order % 2 === 0 ? colors[0] : order % 3 === 0 ? colors[1] : colors[2];
};

export const ProgressBlock = styled.div`
  padding: 32px 44px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.grayLight};
`;

export const ProgressTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 30px;
  text-align: center;
`;

export const ProgressStats = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const ProgressStatsItem = styled.div`
  display: flex;
  align-items: center;
  > div:last-child {
    border: 2px solid
      ${({ theme, $colorIndex = 0 }) => {
        const color = getProgressColor($colorIndex);
        return theme.colors[color];
      }};
    > div {
      background: ${({ theme, $colorIndex = 0 }) => {
        const color = getProgressColor($colorIndex);
        return theme.colors[color];
      }};
    }
  }
`;

export const ProgressName = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  max-width: 230px;
`;

export const ProgressBar = styled.div`
  box-sizing: border-box;
  width: 280px;
  height: 40px;
  border-radius: 22px;
  overflow: hidden;
`;

export const Progress = styled.div`
  color: ${({ theme, $colorIndex = 0, $percentage = 0 }) => {
    const color = getProgressColor($colorIndex);
    return $percentage < 15 ? theme.colors[color] : theme.colors.white;
  }};
  width: ${({ $percentage }) => $percentage + "%"};
  height: 100%;
  position: relative;
  > span {
    position: absolute;
    right: ${({ $percentage = 0 }) => {
      return $percentage < 15 ? "-4rem" : "1rem";
    }};
  }
`;

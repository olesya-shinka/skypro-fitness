import styled from "styled-components";

const Col1 = styled.div`
  background-color: #565eef;
`;
const ColBg1 = styled.div`
  background-color: #edecff;
  border: 2px solid #565eef;
`;
const Col2 = styled.div`
  background-color: #ff6d00;
`;
const ColBg2 = styled.div`
  background-color: #fff2e0;
  border: 2px solid #ff6d00;
`;
const Col3 = styled.div`
  background-color: #9a48f1;
`;
const ColBg3 = styled.div`
  background-color: #f9ebff;
  border: 2px solid #9a48f1;
`;
const Col4 = styled.div`
  background-color: #88ad1b;
`;

const ColBg4 = styled.div`
  background-color: #f2fbd6;
  border: 2px solid #88ad1b;
`;
const Col5 = styled.div`
  background-color: #007fff;
`;
const ColBg5 = styled.div`
  background-color: #e6f9ff;
  border: 2px solid #007fff;
`;

export const Progress = styled.div`
  background-color: #f2f2f2;
  border-radius: 30px;
  max-width: 638px;
`;

export const Title = styled.h2`
  margin: 0 0 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

export const ListExercises = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const NameExercise = styled.span`
  max-width: 278px;
`;

export const ProgressBar = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  min-width: 278px;
  height: 36px;
  border-radius: 22px;
  background-color: ${ColBg1} || ${ColBg2} || ${ColBg3} || ${ColBg4} || ${ColBg5};
`;

export const Done = styled.div`
  position: absolute;
  height: 100%;
  border-radius: 22px 0px 0px 22px;
  background-color: ${Col1} || ${Col2} || ${Col3} || ${Col4} || ${Col5};
`;

export const Percent = styled.span`
  position: absolute;
  text-align: center;
`;

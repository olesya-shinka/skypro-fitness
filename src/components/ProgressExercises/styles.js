import styled from "styled-components";
import { ColorType } from '@/theme/themeTypes'

export const Progress = styled.div`
  padding: 36px 44px;
  background-color: #f2f2f2;
  border-radius: 30px;
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

export const ListExercisesItem = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
`;

export const NameExercises = styled.span`
  max-width: 278px;
`;

export const ProgressBar = styled.div`
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  min-width: 278px;
  height: 36px;
  border-radius: 22px;
`;

export const Done = styled.div`
  position: absolute;
  height: 100%;
  border-radius: 22px 0px 0px 22px;
`;

export const Percent = styled.span`
  position: absolute;
  text-align: center;
`;

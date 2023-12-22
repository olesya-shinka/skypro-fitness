import styled from "styled-components";

export const Progress = styled.div`
  background-color: #f2f2f2;
  border-radius: 30px;
  max-width: 638px;
  padding: 32px 44px;
  border-radius: 30px;
  color: black;
`;

export const Title = styled.h2`
  margin: 0 0 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
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
  @media (max-width: 1024px) {
    font-size: 20px;
  }
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
`;

export const Done = styled.div`
  position: absolute;
  height: 100%;
  border-radius: 22px 0px 0px 22px;
`;

export const Percent = styled.span`
  position: absolute;
  text-align: center;
  padding-left: 3px;
`;

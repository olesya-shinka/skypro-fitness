/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Wrapper = styled.div`
  font-size: 30px;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  padding-bottom: 95px;
`;

export const Header = styled.header``;

export const Container = styled.div`
  font-size: 24px;
  line-height: 32px;
  margin-top: 75px;
`;

export const TitleBox = styled.div`
  background-color: rgba(205, 205, 205, 0.1);
  display: flex;
  justify-content: space-between;
  border-radius: 30px;
  height: 310px;
`;

export const Title = styled.h1`
  margin: 30px;
`;

export const ForYou = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  font-size: 40px;
  line-height: 48px;
  margin-top: 75px;
  margin-bottom: 20px;
`;

export const ForYouList = styled.ol`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 87px;
`;

export const ForYouListItem = styled.li`
  counter-increment: item;
  display: flex;
  align-items: flex-start;
  ::before {
    margin-right: 24px;
    content: counter(item);
    background: #c7e957;
    border-radius: 50%;
    color: #000;
    width: 67px;
    text-align: center;
    display: inline-block;
    padding: 10px;
  }
`;

export const Directions = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 75px;
`;

export const DirectionsList = styled.ul`
  columns: 2;
  -webkit-columns: 2;
  -moz-columns: 2;
`;

export const DirectionsListItem = styled.li`
  list-style-type: disc;
  list-style-position: inside;
`;

export const Results = styled.div`
  margin-bottom: 75px;
`;

export const ResultsText = styled.p`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 35px;
  text-align: center;
`;

export const Application = styled.div`
  background: #f9ebff;
  border-radius: 30px;
  padding: 46px 52px;
  margin-bottom: 95px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ApplicationText = styled.p`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 35px;
  text-align: center;
`;

/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

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

export const Enter = styled.button`
  border: none;
  border-radius: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 24px;
  letter-spacing: -0.05px;
  width: 77px;
  height: 36px;
  background-color: #140d40;
  color: #fff;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  :hover {
    background-color: #2d1f79;
  }
  :active {
    background-color: #3b29a1;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  justify-content: flex-end;
  margin-left: 750px;
  max-width: 200px;
  :hover {
    cursor: pointer;
  }
`;

export const NameUser = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  border: 2px
`;

export const Contain = styled.div`
  background-color: transparent;
  place-self: center start;
  cursor: pointer;
`;

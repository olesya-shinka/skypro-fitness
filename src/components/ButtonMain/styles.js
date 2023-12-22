import styled from "styled-components";

export const Btn = styled.button`
  width: 278px;
  height: 52px;
  font-size: 18px;
  padding: 10px;
`;
export const White = styled.button`
  width: 278px;
  height: 52px;
  font-size: 18px;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #d0cece;
  color: #000000;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  :hover {
    background-color: #d0cece;
  }
  :active {
    background-color: #d9d9d9;
  }
`;

export const Violet = styled.button`
  width: 278px;
  height: 52px;
  font-size: 18px;
  padding: 10px;
  background-color: #580ea2;
  color: #fff;
  @media (max-width: 1024px) {
    font-size: 16px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
  }
  :hover {
    background-color: #3f007d;
  }
  :active {
    background-color: #271a58;
  }
`;

/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const SelectContainer = styled.div`
  max-width: 444px
  background: #ffffff
  border-radius: 12px
  padding-bottom: 14px
  padding-top: 3px
`;

export const SelectTitle = styled.h1`
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  padding-bottom: 40px;
`;

export const SelectList = styled.ul`
  margin-left: 36px;
  margin-right: 7px;
  overflow: hidden;
  overflow-y: scroll;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.05);
  max-height: 510px;

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
  border: 1px solid ${({ $isFinished }) => ($isFinished ? "#06B16E" : "#000000")};
  font-size: 20px;
  letter-spacing: -0.05px;
  text-align: center;
  padding: 12px 10px 17px;
  cursor: pointer;
  position: relative;
  color: ${({ $isFinished }) => ($isFinished ? "#06B16E" : "#000000")};
`;

export const SelectItemCheckboxImg = styled.svg`
  width: 28px;
  height: 26px;
  position: absolute;
  left: 242px;
  top: 12px;
`;

export const SelectItemType = styled.p`
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 0.001em;
  margin-top: 6px;
`;

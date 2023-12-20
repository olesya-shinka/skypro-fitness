/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleModal = styled.h2`
  margin: 0;
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 32px;
  line-height: 1.25;
`;

export const InputsModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
`;

export const InputText = styled.label`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  letter-spacing: -0.05px;
`;
export const closerBlog = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
`;

export const Closer = styled.img`
  padding: 10px;
  cursor: pointer;
`;
export const Wrapper = styled.div`
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

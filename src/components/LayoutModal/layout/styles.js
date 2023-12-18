/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5000;
`;

export const Modal = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  padding: 33px 47px 44px;
  display: grid;
  justify-items: center;
  max-width: 450px;
`;

export const ModalClose = styled.div`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 0.3;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  ,
  :before,
  after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 33px;
    width: 2px;
    background-color: #fff;
  }
  ,
  :before {
    transform: rotate(45deg);
  }
  ,
  :after {
    transform: rotate(-45deg);
  }
`;

export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  width: 444px;
  height: 554px;
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

export const InputsText = styled.label`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 1px 6px;
  font-family: inherit;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.05px;
  border: none;
  outline: none;
  border-bottom: 1px solid #d0cece;
  ::placeholder {
    color: #d0cece;
  }
  :focus {
    border-bottom: 1px solid #580ea2;
  }
`;

export const Message = styled.span`
  color: red;
  text-align: center;
`;

export const ContentSuccess = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 444px;
  padding: 42px 42px 0;
  background: #ffffff;
  border-radius: 12px;
`;

export const SuccessText = styled.h2`
  font-weight: 400;
  font-size: 40px;
  line-height: 1.2;
  text-align: center;
  margin: 0;
  margin-bottom: 10px;
`;

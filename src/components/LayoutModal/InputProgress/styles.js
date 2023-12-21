import styled from "styled-components";

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

export const ErrorMessage = styled.span`
  color: red;
  text-align: center;
`;

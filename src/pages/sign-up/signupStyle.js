import styled from "styled-components";

export const Login = styled.div`
  display: flex;
  height: 100vh;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  font-family: "StratosSkyeng", sans-serif;
`;

export const LoginBox = styled.div`
  display: flex;
  width: 366px;
  height: 439px;
  border-radius: 12px;
  background: #fff;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
  row-gap: 38px;
`;

export const LoginFormText = styled.input`
  width: 278px;
  outline: none;
  border: none;
  border-bottom: 1px solid #d0cece;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
`;

export const RegBtn = styled.button`
  margin-top: 60px;
  width: 278px;
  height: 52px;
  border-radius: 46px;
  border: none;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  background: #580ea2;
  color: #fff;
  cursor: pointer;
  :hover {
    background: #daf289;
  }
  :active {
    background: #271a58;
  }
`;

export const error = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  font-family: "StratosSkyeng", sans-serif;
  color: #dd4333;
`;

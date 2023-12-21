import styled from "styled-components";

export const GetBtn = styled.button`
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
  font-family: "StratosSkyeng", sans-serif;
  :hover {
    background: #daf289;
  }
  :active {
    background: #271a58;
  }
`;

export const Login = styled.div`
  background-color: #f5f5f5;
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
  padding-top: 33px;
  align-items: center;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 38px;
  row-gap: 38px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const LoginFormText = styled.input`
  width: 278px;
  outline: none;
  border: none;
  border-bottom: 1px solid #d0cece;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  font-family: "StratosSkyeng", sans-serif;
`;
export const error = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  font-family: "StratosSkyeng", sans-serif;
  color: #dd4333;
`;

export const RegBtn = styled.button`
  color: black;
  margin-top: 20px;
  width: 278px;
  height: 52px;
  border: 1px solid #d0cece;
  background: #fff;
  border-radius: 46px;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
  font-family: "StratosSkyeng", sans-serif;
  :hover {
    background: #f4f5f6;
  }
  :active {
    background: #d9d9d9;
  }
`;

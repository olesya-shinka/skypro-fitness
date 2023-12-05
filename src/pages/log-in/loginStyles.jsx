import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  @font-face {
    font-family: "StratosSkyeng", sans-serif;
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../../../../public/fonts/StratosSkyeng.woff2") format("woff2"),
      url("../../../../public/fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  } 
`;
  
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
    :hover{
      background: #DAF289;
    }
    :active {
      background: #271a58;
    }
   `

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
    font-family: "StratosSkyeng", sans-serif;
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


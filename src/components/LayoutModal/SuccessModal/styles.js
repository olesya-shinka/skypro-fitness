import styled from "styled-components";

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
  color: black;
  @media (max-width: 1024px) {
    font-size: 32px;
  }
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

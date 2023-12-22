import styled from "styled-components";

export const Container = styled.div`
  padding-left: calc(50% - 580px);
  padding-right: calc(50% - 580px);
  background-color: rgba(250, 250, 250, 1);
  @media (max-width: 1274px) {
    padding-left: calc(50% - 450px);
    padding-right: calc(50% - 450px);
  }
  @media (max-width: 1024px) {
    padding-left: calc(50% - 450px);
    padding-right: calc(50% - 450px);
  }
  @media (max-width: 768px) {
    padding-left: calc(50% - 345px);
    padding-right: calc(50% - 345px);
  }
`;

export const Main = styled.main``;

export const Heading = styled.h1`
  margin: 0 0 40px;
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  margin-top: 70px;
  @media (max-width: 1024px) {
    font-size: 44px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const Player = styled.div`
  height: 639px;
  width: 100%;
`;

export const Exercises = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 94px;
  margin-top: 75px;
`;

export const ContentExercises = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleExercises = styled.h2`
  margin: 0 0 30px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  font-family: "StratosSkyeng", sans-serif;
  @media (max-width: 1024px) {
    font-size: 28px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const ListExercises = styled.ul`
  max-width: 440px;
  margin: 0px 0px 40px;
  font-family: "StratosSkyeng", sans-serif;
`;

export const ListExercisesItem = styled.li`
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  list-style: inside;
  padding-left: 20px;
`;

export const ButtonProgress = styled.button`
  border-radius: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  line-height: 24px;
  letter-spacing: -0.05px;
  width: 275px;
  height: 52px;
  background-color: rgba(88, 14, 162, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 18px;
  ::hover {
    cursor: pointer;
    color: rgba(39, 26, 88, 1);
    transform: scale(1.004);
  }
`;

export const Progress = styled.div`
  padding: 36px 44px;
  background-color: #f2f2f2;
  border-radius: 30px;
`;

export const TitleProgress = styled.h2`
  margin: 0 0 40px;
  font-weight: 400;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

export const ListProgress = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 26px;
  list-style: none;
  margin: 15px;
  font-size: 24px;
  padding: 0;
`;

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

export const LoadingCircle = styled.div`
  margin-top: 100px;
  position: relative;
  text-align: center; 
  padding: 20px;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  margin-left: 500px;
::before {
  content: ''; /
  position: absolute;
  border: 2px solid #3D64FF; 
  left: -20px;
  opacity: 0;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite; 
}
@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
::after,
::before {
  content: '';
  position: absolute;
  border: 2px solid #3D64FF;
  left: -20px;
  opacity: 0;
  right: -20px;
  top: -20px;
  bottom: -20px;
  border-radius: 50%;
  animation: pulse 2.5s linear infinite;
}

::after {
  animation-delay: 1.25s;
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  }
}
`;
export const WrapperModal = styled.div`
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

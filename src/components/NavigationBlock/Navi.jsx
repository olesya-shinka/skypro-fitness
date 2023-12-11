/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
//import ButtonEnter from "./ButtonEnter";
import User from "./User";
import Logo from "./Logo";
import ButtonEnter from "./ButtonEnter";

export const NavigateBlock = () => {
  return (
    <S.Sidebar>
      <Logo />
      {user ? <User /> : <ButtonEnter/>}
      {/* позже будет логика: если юзер = true, то Имя, если false, то кнопка Войти */}
      {/* <ButtonEnter /> */}
    </S.Sidebar>
  );
};

export default NavigateBlock;

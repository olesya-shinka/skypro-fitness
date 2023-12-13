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
import { useEffect, useState } from "react";


export const NavigateBlock = ({ login, onClick }) => {
  
  return (
    <S.Sidebar  >
      <Logo />
      {login !== null ? <User /> : <ButtonEnter onClick={onClick} />}
    </S.Sidebar>
  );
};

export default NavigateBlock;

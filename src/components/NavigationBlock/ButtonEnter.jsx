/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { NavLink } from "react-router-dom";
import * as S from "./styles";

const ButtonEnter = ({ ...attrs }) => {
  return (
    <NavLink to="/Login">
      <S.Enter {...attrs}>Войти</S.Enter>
    </NavLink>
  );
};

export default ButtonEnter;

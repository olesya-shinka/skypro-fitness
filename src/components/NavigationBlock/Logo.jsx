/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { NavLink, useLocation } from "react-router-dom";
import * as S from "./styles";

const Logo = () => {
  const location = useLocation();
  const isMainPage = location.pathname === "/"
  return (
    <NavLink to="/">
      <S.Contain>
        {isMainPage ? (<img src="/img/logo_main.svg" alt="logo" />) : (<img src="/img/logo.svg" alt="logo" />)}
      </S.Contain>
    </NavLink>
  );
};

export default Logo;

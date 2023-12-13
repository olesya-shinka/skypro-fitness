/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useLocation } from "react-router-dom";
import * as S from "./styles";
import { useState } from "react";

const User = ({email}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleVisibility = () => setOpenMenu(!openMenu);
  const location = useLocation();
  const isMainPage = location.pathname === "/"
  return (
    <S.User onClick={toggleVisibility}  color = {isMainPage ? "#ffffff" : "#000000"}>
      <img src="/img/avatar.png" alt="avatar" />
      <S.NameUser $color = {isMainPage ? "#ffffff" : "#000000"}>{email}</S.NameUser>
      &#9660;
      {openMenu ? (
        <S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.Menulink to="/" color = {isMainPage ? "#ffffff" : "#000000"}>На главную</S.Menulink>
            </S.MenuItem>
            <S.MenuItem>
              <S.Menulink to="/PersonalPage" color = {isMainPage ? "#ffffff" : "#000000"}>Профиль</S.Menulink>
            </S.MenuItem>
            <S.MenuItem>
              <S.Menulink to="/Login" color = {isMainPage ? "#ffffff" : "#000000"}>Выйти</S.Menulink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>
      ) : (
        ""
      )}
    </S.User>
  );
};

export default User;

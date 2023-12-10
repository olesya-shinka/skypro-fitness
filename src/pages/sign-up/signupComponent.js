/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./signupStyle.jsx";
import "./signupComponent.js";
import LogoSvg from "../description/LogoSvg.jsx";

export default function SignUpPage() {
  return (
    <S.Login>
      <S.LoginBox>
        <LogoSvg />
        <S.LoginForm>
          <S.LoginFormText placeholder="Логин" type="text"></S.LoginFormText>
          <S.LoginFormText placeholder="Пароль" type="password"></S.LoginFormText>
          <S.LoginFormText placeholder="Повторите пароль" type="password"></S.LoginFormText>
        </S.LoginForm>
        <S.RegBtn type="button">Зарегистрироваться</S.RegBtn>
      </S.LoginBox>
    </S.Login>
  );
}

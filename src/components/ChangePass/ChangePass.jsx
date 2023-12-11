/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import * as S from "./styles";

export const ChangePass = ({ setIsEditPass }) => {
  const [error, setError] = useState("");
  console.log(setError);

  // const handleClose = () => {
  //   setIsEditPass(false);
  // };

  return (
    <S.Wrapper>
      <S.ModalBlock>
        {/* <S.Closer src="/img/close.png" alt="закрыть" onClick={handleClose} /> */}
        <S.ModalFormLogin action="#">
          <S.ModalFormLoginImg src="/img/logo.png" alt="logo" />

          <S.Content>
            <S.Text>Новый пароль:</S.Text>
            <S.ModalFormLoginInput>
              <S.ModalInput type="password" placeholder="Пароль" />
            </S.ModalFormLoginInput>
            <S.ModalFormLoginInput>
              <S.ModalInput type="password" placeholder="Повторите пароль" />
            </S.ModalFormLoginInput>
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
          </S.Content>

          <S.ModalFormLoginButtons>
            <S.ModalButtonEnter>Сохранить</S.ModalButtonEnter>
          </S.ModalFormLoginButtons>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.Wrapper>
  );
};

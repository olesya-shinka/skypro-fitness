/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState } from "react";
import * as S from "./styles";

export const ChangeEmail = ({ setIsEditEmail }) => {
  const [error, setError] = useState(null);
  console.log(setError);
  // const handleClose = () => {
  //   setIsEditEmail(false);
  // };

  return (
    <S.Wrapper>
      <S.ModalBlock>
        {/* <S.Closer src="/img/close.png" alt="закрыть" onClick={handleClose} /> */}
        <S.ModalFormLogin action="#">
          <S.ModalFormLoginImg src="/img/logo.png" alt="logo" />
          <S.Content>
            <S.Text>Новый логин:</S.Text>
            <S.ModalFormLoginInput>
              <S.ModalInput placeholder="Логин" />
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

/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { passwordSelector } from "../../store/selectors/user";
import { Link } from "react-router-dom";
import { changePassword } from "../../authApi";
import { setPassword } from "../../store/slices/userSlice";

export const ChangePass = ({ setIsEditPass }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [offButton, setOffButton] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const valueOldPass = useSelector(passwordSelector);

  const [errorsForm, setErrorsForm] = useState({
    newPassword: "",
    confirmPassword: ""
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errorsForm };
    const passPattern = /^[^\s]+$/g;

    if (newPassword.trim() === "") {
      newErrors.password = "Введите пароль";
      isValid = false;
    } else if (!passPattern.test(newPassword)) {
      newErrors.newPassword = "Пароль не должен содержать пробелы";
      isValid = false;
    } else {
      newErrors.newPassword = "";
    }

    if (confirmPassword.trim() === "") {
      newErrors.confirmPassword = "Подтвердите пароль";
      isValid = false;
    } else if (confirmPassword !== newPassword) {
      newErrors.confirmPassword = "Пароли не совпадают";
      isValid = false;
    } else {
      newErrors.newPassword = "";
    }

    setErrorsForm(newErrors);

    return isValid;
  };

  //сброс ошибок валидации
  useEffect(() => {
    setError(null);
  }, [newPassword, confirmPassword]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.password = "";
    setErrorsForm(newErrors);
  }, [newPassword]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.confirmPassword = "";
    setErrorsForm(newErrors);
  }, [confirmPassword]);

  const handleChangePassword = async () => {
    if (validateForm()) {
      try {
        const response = await changePassword(valueOldPass, newPassword);
        setIsEditPass(false);
        console.log(response);
        dispatch(
          setPassword({
            password: newPassword,
          })
        );
        console.log('yes')
        setOffButton(true);
      } catch (error) {
        setError(error.message);
      } finally {
        setOffButton(false);
      }
    }
  };

  return (
    <S.Wrapper>
      <S.ModalBlock>
        <S.Closer
          src="/img/close.png"
          alt="закрыть"
          onClick={() => {
            setIsEditPass(false);
          }}
        />
        <S.ModalFormLogin action="#">
        <Link to="/">
          <S.ModalFormLoginImg src="/img/logo.png" alt="logo" />
          </Link>
          <S.Content>
            <S.Text>Новый пароль:</S.Text>
            {errorsForm.confirmPassword && <S.ErrorMessage>{errorsForm.confirmPassword}</S.ErrorMessage>}
            {errorsForm.newPassword && <S.ErrorMessage>{errorsForm.newPassword}</S.ErrorMessage>}
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.ModalFormLoginInput>
              <S.ModalInput
                placeholder="Пароль"
                type="password"
                value={newPassword}
                onChange={(event) => {
                  setNewPassword(event.target.value);
                }}
              />
            </S.ModalFormLoginInput>
            <S.ModalFormLoginInput>
              <S.ModalInput
                type="password"
                placeholder="Повторите пароль"
                value={confirmPassword}
                onChange={(event) => {
                  setConfirmPassword(event.target.value);
                }}
              />
            </S.ModalFormLoginInput>

          </S.Content>
          <S.ModalFormLoginButtons>
            <S.ModalButtonEnter onClick={handleChangePassword} disabled={offButton}>{offButton ? "Сохраняем новый пароль" : "Сохранить"}</S.ModalButtonEnter>
          </S.ModalFormLoginButtons>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.Wrapper>
  );
};

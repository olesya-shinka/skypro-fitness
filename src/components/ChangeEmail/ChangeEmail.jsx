import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { passwordSelector } from "../../store/selectors/user";
import { setEmail } from "../../store/slices/userSlice";
import { changeLogin } from "../../authApi";
import { Link } from "react-router-dom";
import * as S from "./styles";

export const ChangeEmail = ({ setIsEditEmail }) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [offButton, setOffButton] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const valueOldPass = useSelector(passwordSelector);

  //валидация
  const [errorsForm, setErrorsForm] = useState({
    email: ""
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errorsForm };
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (newEmail.trim() === "") {
      newErrors.email = "Введите почту";
      isValid = false;
    } else if (!emailPattern.test(newEmail)) {
      newErrors.email = "Введите корректную почту";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    setErrorsForm(newErrors);

    return isValid;
  };

  //сброс ошибок валидации
  useEffect(() => {
    setError(null);
    const newErrors = { ...errorsForm };
    newErrors.email = "";
    setErrorsForm(newErrors);
  }, [newEmail]);

  const handleChangeEmail = async () => {
    if (validateForm()) {
      try {
        const response = await changeLogin(newEmail, valueOldPass);
        setIsEditEmail(false);
        console.log(response);
        dispatch(
          setEmail({
            email: newEmail
          })
        );
        console.log("yes");
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
            setIsEditEmail(false);
          }}
        />
        <S.ModalFormLogin action="#">
          <Link to="/">
            <S.ModalFormLoginImg src="/img/logo.png" alt="logo" />
          </Link>
          <S.Content>
            <S.Text>Новый логин:</S.Text>
            {errorsForm.email && <S.ErrorMessage>{errorsForm.email}</S.ErrorMessage>}
            {error && <S.ErrorMessage>{error}</S.ErrorMessage>}
            <S.ModalFormLoginInput>
              <S.ModalInput
                type="text"
                placeholder="Логин"
                value={newEmail}
                onChange={(event) => {
                  setNewEmail(event.target.value);
                }}
              />
            </S.ModalFormLoginInput>
          </S.Content>
          <S.ModalFormLoginButtons>
            <S.ModalButtonEnter onClick={handleChangeEmail} disabled={offButton}>
              {offButton ? "Сохраняем новый логин" : "Сохранить"}
            </S.ModalButtonEnter>
          </S.ModalFormLoginButtons>
        </S.ModalFormLogin>
      </S.ModalBlock>
    </S.Wrapper>
  );
};

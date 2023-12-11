/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as S from "./signupStyle.js";
import LogoSvg from "../description/LogoSvg.jsx";
import { register } from "../../authApi.js";
import { setUser } from "../../store/slices/userSlice.js";

export function SignUpPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [offButton, setOffButton] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const [errorsForm, setErrorsForm] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errorsForm };
    const passPattern = /^[^\s]+$/g;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.trim() === "") {
      newErrors.email = "Введите почту";
      isValid = false;
    } else if (!emailPattern.test(email)) {
      newErrors.email = "Введите корректную почту";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (password.trim() === "") {
      newErrors.password = "Введите пароль";
      isValid = false;
    } else if (!passPattern.test(password)) {
      newErrors.password = "Пароль не должен содержать пробелы";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (confirmPassword.trim() === "") {
      newErrors.password = "Подтвердите пароль";
      isValid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Пароли не совпадают";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    setErrorsForm(newErrors);

    return isValid;
  };

  //сброс ошибок валидации
  useEffect(() => {
    setError(null);
  }, [email, password, confirmPassword]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.email = "";
    setErrorsForm(newErrors);
  }, [email]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.password = "";
    setErrorsForm(newErrors);
  }, [password]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.confirmPassword = "";
    setErrorsForm(newErrors);
  }, [confirmPassword]);

  const handleReg = async () => {
    if (validateForm()) {
      try {
        const response = await register(email, password, confirmPassword);
        //dodelat
        dispatch(
          setUser({
            email: response.email,
            id: response.uid,
            token: response.accessToken,
            password: password
          })
        );
        setOffButton(true);
        navigate("/");
      } catch (error) {
        setError(error.message);
      } finally {
        setOffButton(false);
      }
    }
  };

  return (
    <S.Login>
      <S.LoginBox>
        <LogoSvg />
        <S.LoginForm>
          <S.LoginFormText
            placeholder="Логин"
            type="text"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}></S.LoginFormText>
          {errorsForm.email && <S.error>{errorsForm.email}</S.error>}
          <S.LoginFormText
            placeholder="Пароль"
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}></S.LoginFormText>
          {errorsForm.password && <S.error>{errorsForm.password}</S.error>}
          <S.LoginFormText
            placeholder="Повторите пароль"
            type="password"
            value={confirmPassword}
            onChange={(event) => {
              setConfirmPassword(event.target.value);
            }}></S.LoginFormText>
          {errorsForm.confirmPassword && <S.error>{errorsForm.confirmPassword}</S.error>}
        </S.LoginForm>
        {error && <S.error>{error}</S.error>}
        <S.RegBtn type="button" onClick={handleReg} disabled={offButton}>
          {offButton ? "Осуществляем регистрацию" : "Зарегистрироваться"}
        </S.RegBtn>
      </S.LoginBox>
    </S.Login>
  );
}

export default SignUpPage;

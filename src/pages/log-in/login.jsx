import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import * as S from "./loginStyles.js";
import LogoSvg from "../description/LogoSvg.jsx";
import { login } from "../../authApi.js";
import { setUser } from "../../store/slices/userSlice.js";
export default function SignInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [offButton, setOffButton] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  //валидация
  const [errorsForm, setErrorsForm] = useState({
    email: "",
    password: "",
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

    setErrorsForm(newErrors);

    return isValid;
  };

  //сброс ошибок валидации
  useEffect(() => {
    setError(null);
  }, [email, password]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.email = "";
    setErrorsForm(newErrors);
  }, [email, errorsForm]);

  useEffect(() => {
    const newErrors = { ...errorsForm };
    newErrors.password = "";
    setErrorsForm(newErrors);
  }, [password, errorsForm]);

  const handleLogin = async () => {
    if (validateForm()) {
      try {
        const response = await login(email, password);
        //dodelat
        dispatch(
          setUser({
            email: response.email,
            id: response.uid,
            token: response.accessToken,
          })
        );
        setOffButton(true);
        navigate("/");
      } catch (error) {
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        ) {
          setError("Неправильная авторизация");
        } else {
          setError(error.message);
        }
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
            type="text"
            placeholder="Логин"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></S.LoginFormText>
          {errorsForm.email && <S.error>{errorsForm.email}</S.error>}
          <S.LoginFormText
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></S.LoginFormText>
          {errorsForm.password && <S.error>{errorsForm.password}</S.error>}
        </S.LoginForm>
        {error && <S.error>{error}</S.error>}

        <S.GetBtn type="button" onClick={handleLogin} disabled={offButton}>
        {offButton ? "Осуществляем вход" : "Войти"}
        </S.GetBtn>
        <S.RegBtn type="button">
          <Link to="/SignUp">Зарегистрироваться</Link>
        </S.RegBtn>
      </S.LoginBox>
    </S.Login>
  );
}

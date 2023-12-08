import * as S from "./loginStyles.jsx"
import "./loginStyles.jsx"
// import Header from "../../components/Header/Header.js"
import LogoSvg from '../../components/Header/LogoSvg'
// import LogoSvg from '../description/LogoSvg.jsx'

export default function SignInPage() {
    return (
        <S.Login>
            
            <S.LoginBox>
            <LogoSvg/>
            <S.LoginForm>
                <S.LoginFormText type="text" placeholder="Логин"></S.LoginFormText>
                <S.LoginFormText type="password" placeholder="Пароль"></S.LoginFormText>
            </S.LoginForm>
            <S.GetBtn type='button'>Войти</S.GetBtn>
            <S.RegBtn type='button'>Зарегистрироваться</S.RegBtn>
            </S.LoginBox>
        </S.Login>

    )

}
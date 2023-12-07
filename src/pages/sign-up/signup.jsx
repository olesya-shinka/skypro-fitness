import * as S from "./signupStyle.js"
import './signup.jsx'
import LogoSvg from '../description/LogoSvg.jsx'

export default function SignUpPage() {

    return (
        <S.Login>
            <S.LoginBox>
                <LogoSvg/>
                <S.LoginForm>
                    <S.LoginFormText placeholder="Логин" type="text"></S.LoginFormText>
                    <S.LoginFormText placeholder="Пароль" type="password"></S.LoginFormText>
                    <S.LoginFormText placeholder="Повторите пароль" type="password"></S.LoginFormText>
                </S.LoginForm>
                <S.RegBtn type='button'>Зарегистрироваться</S.RegBtn>
            </S.LoginBox>
        </S.Login>

    )

}
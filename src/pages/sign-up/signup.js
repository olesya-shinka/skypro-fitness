import * as S from "./signupStyle.jsx"
import './signup.js'
// import LogoSvg from '../description/LogoSvg.jsx'
import LogoSvg from '../../components/Header/LogoSvg'
// import Header from "../../components/Header/Header.js"


export default function SignUpPage() {

    return (
        <S.Login>
            {/* <Header /> */}
            <S.LoginBox>
                <LogoSvg />
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
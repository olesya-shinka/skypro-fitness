import { NavLink } from "react-router-dom";
import * as S from "./styles";

const ButtonEnter = ({ ...attrs }) => {
  return (
    <NavLink to = '/Login'>
    <S.Enter >
      Войти
      </S.Enter>
    </NavLink>
  )
}

export default ButtonEnter
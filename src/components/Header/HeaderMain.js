import { Link } from 'react-router-dom'
import * as S from './HeaderMain.style'
import LogoSvgWhite from './LogoSvgWhite'


function HeaderMain() {
  return (
    <S.HeaderMain>
      <LogoSvgWhite />
      <Link to="/Login">
        <S.StyledSmallButton> Войти </S.StyledSmallButton>
      </Link>
    </S.HeaderMain>
  )
}

export default HeaderMain

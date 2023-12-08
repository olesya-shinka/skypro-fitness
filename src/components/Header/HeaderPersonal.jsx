import { useNavigate } from 'react-router-dom'
import SidebarLogin from '../SidebarPersonal/SidebarPersonal'
import * as S from './Header.style'
import LogoSvg from './LogoSvg'


function HeaderProfile() {
    const navigate = useNavigate()
    const goHome = () => {
    navigate('/')
    }

  return (
    <S.HeaderStyle>
      <S.NavLogo onClick={goHome}>
        <LogoSvg />
      </S.NavLogo>
      <SidebarLogin />
    </S.HeaderStyle>
  )
}

export default HeaderProfile
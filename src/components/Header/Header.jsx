import * as S from "./Header.style"
import LogoSvg from "./LogoSvg.jsx" 
import { useNavigate } from 'react-router-dom'


export default function Header() {
    const navigate = useNavigate()
    const goHome = () => {
    navigate('/')
    }
    return ( 
    
        // <S.HeaderNav>
        // <LogoSvg />
        // </S.HeaderNav>
            <S.HeaderStyle>
            <S.NavLogo onClick={goHome}>
            <LogoSvg />
            </S.NavLogo>
            {/* <SidebarLogin /> */}
          </S.HeaderStyle>
    )
}
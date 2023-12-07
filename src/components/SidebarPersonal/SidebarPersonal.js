// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { setLogin } from '../../Store/Slice/Slice'



import * as S from './SidebarPersonal.style'

function SidebarLogin() {
  return (
    <S.SidebarPersonal>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#D9D9D9"/>
      </svg>
      { <S.SidebarPersonalName>{/*user*/}Сергей</S.SidebarPersonalName> }
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308" stroke="black" strokeWidth="2"/>
      </svg>

    </S.SidebarPersonal>
  )
}

export default SidebarLogin

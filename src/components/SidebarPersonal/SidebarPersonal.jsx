// import { useDispatch } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { setLogin } from '../../Store/Slice/Slice'
import { Link } from 'react-router-dom'


// import { useDispatch } from 'react-redux'
import * as S from './SidebarPersonal.style'

function SidebarLogin() {
  // const dispatch = useDispatch()
  // const user = localStorage.getItem('userEmail')
  // const navigate = useNavigate()

  // const handleLogout = () => {
  //   dispatch({ type: 'setUser', payload: null })
  //   localStorage.clear()
  //   navigate('/')
  // }
  return (
    <S.SidebarPersonal>
      <Link to="/">
      <svg  width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="25" fill="#D9D9D9"/>
      </svg>
      </Link>

      { <S.SidebarPersonalName>Сергей</S.SidebarPersonalName> }
      <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3552 1.03308L6.67761 6.7107L0.999999 1.03308" stroke="black" strokeWidth="2"/>
      </svg>

    </S.SidebarPersonal>
  )
}

export default SidebarLogin

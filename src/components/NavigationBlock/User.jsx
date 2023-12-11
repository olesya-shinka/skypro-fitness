/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";

const User = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleVisibility  = () => setOpenMenu(!openMenu);
  return (

      <S.User onClick ={toggleVisibility}>
        <img src="/img/avatar.png" alt="avatar" />
        <S.NameUser >name</S.NameUser>
        &#9660;
        {openMenu ? 
        (<S.NavMenu>
          <S.MenuList>
            <S.MenuItem>
              <S.Menulink to="/">На главную</S.Menulink>
            </S.MenuItem>
            <S.MenuItem>
              <S.Menulink to="/PersonalPage/:id">Профиль</S.Menulink>
            </S.MenuItem>
            <S.MenuItem >
              <S.Menulink to="/Login">Выйти</S.Menulink>
            </S.MenuItem>
          </S.MenuList>
        </S.NavMenu>) 
        : ('')}
      </S.User>

  );
};

export default User;

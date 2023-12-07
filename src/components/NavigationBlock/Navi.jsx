import * as S from "./styles";
//import ButtonEnter from "./ButtonEnter";
import User from "./User";
import Logo from "./Logo";
import ButtonEnter from "./ButtonEnter";

const NavigateBlock = ({children}) => {
  const currentUser =1
  return (
    <S.Sidebar>
      <Logo />
      {currentUser ? <User /> : <ButtonEnter/>}
      {/* позже будет логика: если юзер = true, то Имя, если false, то кнопка Войти */}
      {/* <ButtonEnter /> */}
      {children}
    </S.Sidebar>
  );
};

export default NavigateBlock;

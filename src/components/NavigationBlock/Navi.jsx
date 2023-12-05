import * as S from "./styles";
//import ButtonEnter from "./ButtonEnter";
import User from "./User";
import Logo from "./Logo";

const NavigateBlock = () => {
  return (
    <S.Sidebar>
      <Logo />
      <User />
      {/* позже будет логика: если юзер = true, то Имя, если false, то кнопка Войти */}
      {/* <ButtonEnter /> */}
    </S.Sidebar>
  );
};

export default NavigateBlock;

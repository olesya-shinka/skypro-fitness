import * as S from "./styles";
//import ButtonEnter from "./ButtonEnter";
import User from "./User";

const NavigateBlock = () => {
  return (
    <S.Sidebar>
      <img src="img/logo.svg" alt="logo" />
      <User />
      {/* позже будет логика: если юзер = true, то Имя, если false, то кнопка Войти */}
      {/* <ButtonEnter /> */}
    </S.Sidebar>
  );
};

export default NavigateBlock;

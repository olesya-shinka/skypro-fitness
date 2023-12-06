import * as S from "./styles";
import ButtonEnter from "./ButtonEnter";
import User from "./User";
import Logo from "./Logo";

const NavigateBlock = () => {
  return (
    <S.Sidebar>
      <Logo />
      <User />
      <ButtonEnter />
    </S.Sidebar>
  );
};

export default NavigateBlock;

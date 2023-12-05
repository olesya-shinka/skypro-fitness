import * as S from "./styles";
import ButtonEnter from "./ButtonEnter";

const NavigateBlock = () => {
  return (
    <S.Sidebar>
      <img src="img/logo.svg" alt="logo" />
      Имя
      <ButtonEnter />
    </S.Sidebar>
  );
};

export default NavigateBlock;

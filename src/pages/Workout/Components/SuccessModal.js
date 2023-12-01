import * as S from "./styles";
import { ReactComponent as HandOk } from "./handOk.svg";
import MaketModal from "./../../MaketModal/MaketModal";
import { useEffect } from "react";

const SuccessModal = ({ setIsSuccessModalShow }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccessModalShow(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsSuccessModalShow]);

  return (
    <MaketModal>
      <S.ContentSuccess>
        <S.SuccessText>Ваш прогресс засчитан!</S.SuccessText>
        <HandOk />
      </S.ContentSuccess>
    </MaketModal>
  );
};

export default SuccessModal;

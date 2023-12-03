import * as S from "./styles";
import { ReactComponent as HandOk } from "./handOk.svg";
import LayoutModal from "../layout/LayoutModal";
import { useEffect } from "react";

const SuccessModal = ({ setIsSuccessModalShow }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccessModalShow(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [setIsSuccessModalShow]);

  return (
    <LayoutModal>
      <S.ContentSuccess>
        <S.SuccessText>Ваш прогресс засчитан!</S.SuccessText>
        <HandOk />
      </S.ContentSuccess>
    </LayoutModal>
  );
};

export default SuccessModal;

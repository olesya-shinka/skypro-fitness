/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { ReactComponent as HandOk } from "./handOk.svg";
import LayoutModal from "../layout/LayoutModal";
import { useEffect } from "react";

export const SuccessModal = ({ setIsShown }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setIsShown]);

  return (
    <LayoutModal>
      <S.ContentSuccess>
        <S.SuccessText content="Ваш прогресс засчитан!" />
        <HandOk />
      </S.ContentSuccess>
    </LayoutModal>
  );
};

export default SuccessModal;

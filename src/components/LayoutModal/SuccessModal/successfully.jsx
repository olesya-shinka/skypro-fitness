import * as S from "./styles";
import { ReactComponent as HandOk } from "./handOk.svg";
import LayoutModal from "../layout/LayoutModal";
import { useEffect } from "react";

export const Successfully = ({ setIsShown }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [setIsShown]);
  return (
    <LayoutModal>
      <S.SuccessText>Вы успешно записались!</S.SuccessText>
      <HandOk />
    </LayoutModal>
  );
};

import * as S from "./styles";
import { ReactComponent as HandOk } from "./handOk.svg";
import LayoutModal from "../layout/LayoutModal";

export const Successfully = ({ setIsShown }) => {
  return (
    <S.Wrapper>
      <LayoutModal>
        <S.closerBlog>
          <S.Closer
            src="/img/close.png"
            alt="закрыть"
            onClick={() => {
              setIsShown(false);
            }}
          />
        </S.closerBlog>
        <S.SuccessText>Вы успешно записались!</S.SuccessText>
        <HandOk />
      </LayoutModal>
    </S.Wrapper>
  );
};

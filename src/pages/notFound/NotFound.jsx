/* eslint-disable prettier/prettier */
/* eslint-disable consistent-return */
import NotFoundContent from "../../components/NotFoundContent/NotFound";
import * as S from "./styles";

export function NotFound() {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Content>
          <NotFoundContent />
        </S.Content>
      </S.Container>
    </S.Wrapper>
  );
}
export default NotFound;

import * as S from "./styles";

export const LayoutModal = ({ children, onClick }) => {
  return (
    <S.Wrapper>
      <S.Modal>{children}</S.Modal>
      <S.ModalClose onClick={onClick} />
    </S.Wrapper>
  );
};

export default LayoutModal;

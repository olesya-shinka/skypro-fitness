import * as S from "./styles";

const MaketModal = ({ children, onClick }) => {
  return (
    <S.Wrapper>
      <S.Modal>{children}</S.Modal>
      <S.ModalClose onClick={onClick} />
    </S.Wrapper>
  );
};

export default MaketModal;

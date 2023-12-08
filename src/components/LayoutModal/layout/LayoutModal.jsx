/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";

const LayoutModal = ({ children, onClick }) => {
  return (
    <S.Wrapper>
      <S.Modal>{children}</S.Modal>
      <S.ModalClose onClick={onClick} />
    </S.Wrapper>
  );
};

export default LayoutModal;

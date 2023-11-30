import * as S from "./styles";
import MaketModal from "./MaketModal";

const SuccessModal = () => {

  return (
    <MaketModal>
      <S.ContentSuccess>
        <S.SuccessText>Ваш прогресс засчитан!</S.SuccessText>
      </S.ContentSuccess>
    </MaketModal>
  );
};

export default SuccessModal;

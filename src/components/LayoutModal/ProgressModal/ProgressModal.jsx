import * as S from "./styles";
import InputProgress from "../InputProgress/InputProgress";

const ProgressModal = () => {
  return (
    <S.FormModal>
      <S.TitleModal>Мой прогресс</S.TitleModal>
      <S.InputsModal>
        <S.InputsText>
          Сколько раз вы сделали упражнение?
          <InputProgress />
        </S.InputsText>
        <S.InputsText>
          Сколько раз вы сделали упражнение?
          <InputProgress />
        </S.InputsText>
        <S.InputsText>
          Сколько раз вы сделали упражнение?
          <InputProgress />
        </S.InputsText>
      </S.InputsModal>
      <S.ButtonProgress type="submit">Отправить</S.ButtonProgress>
    </S.FormModal>
  );
};
export default ProgressModal;

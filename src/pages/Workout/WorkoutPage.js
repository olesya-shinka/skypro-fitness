import * as S from "./styles";
import ReactPlayer from "react-player";

const Workout = () => {
  return (
    <S.Container>
      <S.Header></S.Header>
      <S.Main>
        <S.Heading>Йога</S.Heading>
        <S.Title>Красота и здоровье / Йога на каждый день / 2 день</S.Title>
        <S.Player>
        <ReactPlayer
            url={`www.youtube.com/embed/oqe98Dxivns`}
            width="100%"
            height="100%"
          />
        </S.Player>
        <S.Exercises>
          <S.ContentExercises>
            <S.TitleExercises>Упражнения</S.TitleExercises>
            <S.ListExercises>
              <S.ListExercisesItem>
                Наклон вперед (10 повторений) 
                Наклон назад (10 повторений)
                Поднятие ног, согнутых в коленях (5 повторений)
              </S.ListExercisesItem>
            </S.ListExercises>
            <S.ButtonProgress>Заполнить свой прогресс</S.ButtonProgress>
          </S.ContentExercises>
          <S.Progress>
            <S.TitleProgress>Мой прогресс по тренировке:</S.TitleProgress>
            <S.ListProgress>проценты</S.ListProgress>
          </S.Progress>
        </S.Exercises>
      </S.Main>
      <S.Wrapper>
        <S.Modal>gfd</S.Modal>
        <S.ModalClose />
      </S.Wrapper>
      <S.FormModal>
        <S.TitleModal>Мой прогресс</S.TitleModal>
        <S.InputsModal>
          <S.InputsText>
            Сколько раз вы сделали упражнение?
            <S.Input>
              Введите значение
              <S.Message>gfdgfdgdfg</S.Message>
            </S.Input>
          </S.InputsText>
        </S.InputsModal>
        <S.ButtonProgress>Отправить</S.ButtonProgress>
      </S.FormModal>
      <S.Wrapper>
        <S.Modal>
          <S.ModalClose>
            <S.ContentSuccess>
              <S.SuccessText>Ваш прогресс засчитан!</S.SuccessText>
            </S.ContentSuccess>
          </S.ModalClose>
        </S.Modal>
      </S.Wrapper>
    </S.Container>
  );
};

export default Workout;

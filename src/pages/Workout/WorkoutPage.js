import * as S from "./styles";
import ReactPlayer from "react-player";
import ProgressModal from "./ProgressModal";
import SuccessModal from "./SuccessModal";
import MaketModal from "./MaketModal";
import { useState } from "react";

const WorkoutPage = () => {
  const [isProgressModalShow, setIsProgressModalShow] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);

  const handleClick = () => setIsProgressModalShow(true);
  const openClosedProgModal = () => {
    setIsProgressModalShow(!isProgressModalShow);
  };

  const handleSendClick = () => {
    setIsProgressModalShow(false);
    setIsSuccessModalShow(true);
  };

  return (
    <S.Container>
      <S.Header />
      <S.Main>
        <S.Heading>Йога</S.Heading>
        <S.Title>Красота и здоровье / Йога на каждый день / 1 день</S.Title>
        <S.Player>
          <ReactPlayer
            url={`www.youtube.com/embed/oqe98Dxivns`}
            width="100%"
            height="100%"
          />
        </S.Player>
        <S.Exercises onClick={handleClick}>
          <S.ContentExercises>
            <S.TitleExercises>Упражнения</S.TitleExercises>
            <S.ListExercises>
              <S.ListExercisesItem>
                Наклон вперед (10 повторений)
              </S.ListExercisesItem>
              <S.ListExercisesItem>
                Наклон назад (10 повторений)
              </S.ListExercisesItem>
              <S.ListExercisesItem>
                Поднятие ног, согнутых в коленях (5 повторений)
              </S.ListExercisesItem>
            </S.ListExercises>
            <S.ButtonProgress>Заполнить свой прогресс</S.ButtonProgress>
          </S.ContentExercises>
          <S.Progress>
            <S.TitleProgress>Мой прогресс по тренировке:</S.TitleProgress>
            <S.ListProgress>Наклоны вперед</S.ListProgress>
            <S.ListProgress>Наклоны назад</S.ListProgress>
            <S.ListProgress>Поднятие ног, согнутых в коленях</S.ListProgress>
          </S.Progress>
        </S.Exercises>
      </S.Main>
      {isProgressModalShow && (
        <MaketModal onClick={openClosedProgModal}>
          <ProgressModal onClick={handleSendClick} />
        </MaketModal>
      )}
      {isSuccessModalShow && (
        <MaketModal onClick={openClosedProgModal}>
          <SuccessModal setIsSuccessModalShown={setIsSuccessModalShow} />
        </MaketModal>
      )}
    </S.Container>
  );
};

export default WorkoutPage;

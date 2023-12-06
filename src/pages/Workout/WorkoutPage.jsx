import * as S from "./styles";
import ReactPlayer from "react-player";
import ProgressModal from "./../../components/LayoutModal/ProgressModal/ProgressModal";
import SuccessModal from "./../../components/LayoutModal/SuccessModal/SuccessModal";
import LayoutModal from "../../components/LayoutModal/layout/LayoutModal";
import { useState } from "react";
import NavigateBlock from "../../components/NavigationBlock/Navi";
import ProgressExercises from "../../components/ProgressExercises/ProgressExercises";

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
      <S.Header>
        <NavigateBlock />
      </S.Header>
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
          <ProgressExercises />
        </S.Exercises>
      </S.Main>
      {isProgressModalShow && (
        <LayoutModal onClick={openClosedProgModal}>
          <ProgressModal onClick={handleSendClick} />
        </LayoutModal>
      )}
      {isSuccessModalShow && (
        <SuccessModal setIsSuccessModalShow={setIsSuccessModalShow} />
      )}
    </S.Container>
  );
};

export default WorkoutPage;

/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import ReactPlayer from "react-player/youtube";
import ProgressModal from "./../../components/LayoutModal/ProgressModal/ProgressModal";
import SuccessModal from "./../../components/LayoutModal/SuccessModal/SuccessModal";
import LayoutModal from "../../components/LayoutModal/layout/LayoutModal";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCourses } from "../../store/selectors/course";
import { selectWorkouts } from "../../store/slices/workoutsSlice";
import NavigateBlock from "../../components/NavigationBlock/Navi";
import ProgressExercises from "../../components/ProgressExercises/ProgressExercises";
import ExercisesList from "../../components/Exercises/Exercises";
import SelectWorkout from "../../components/SelectWorkout/SelectWorkout";

const WorkoutPage = () => {
  const workoutId = useParams();
  const dispatch = useDispatch();

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
          <ReactPlayer url={`www.youtube.com/embed/oqe98Dxivns`} width="100%" height="100%" />
        </S.Player>
        {currentWorkout && currentWorkout.length > 0 && (
          <S.Exercises onClick={handleClick}>
            <ExercisesList exercises={currentWorkout} onClick={handleClick} />
            <ProgressExercises exercises={currentWorkout} />
          </S.Exercises>
        )}
      </S.Main>
      {isProgressModalShow && (
        <LayoutModal onClick={openClosedProgModal}>
          <ProgressModal onClick={handleSendClick} />
        </LayoutModal>
      )}
      {isSuccessModalShow && <SuccessModal setIsSuccessModalShow={setIsSuccessModalShow} />}
      {isTrainingModalShown && (
        <LayoutModal>
          <SelectWorkout openClosedTrainingModal={openClosedTrainingModal} />
        </LayoutModal>
      )}
    </S.Container>
  );
};

export default WorkoutPage;

/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useEffect } from "react";

import { ExercisesList } from "../../components/Exercises/Exercises";
import { ProgressExercises } from "../../components/ProgressExercises/ProgressExercises";
import { ProgressModal } from "../../components/LayoutModal/ProgressModal/ProgressModal";
import { SuccessModal } from "../../components/LayoutModal/SuccessModal/SuccessModal";
import { SelectWorkout } from "../../components/SelectWorkout/SelectWorkout";
import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";

import { NavigateBlock } from "../../components/NavigationBlock/Navi";

import {
  allWorkoutSelector,
  currentCourseSelector,
  courseList
} from "../../store/selectors/coursesNew";
import { getExecises, getWorkouts } from "../../Api";
import {
  setExercisesList,
  setSelectedWorkout,
  setWorkoutList
} from "../../store/slices/courseWorkoutSlise";
import { listExercises } from "../../store/selectors/coursesNew";

export const WorkoutPage = () => {
  const workoutId = useParams();
  const dispatch = useDispatch();
  // const { id } = useSelector(selectUser);

  // const allCourses = useSelector(courseList);
  const workoutList = useSelector(allWorkoutSelector);
  // const workoutList = useSelector((state) => {state.workoutList});
  const exercisesList = useSelector(listExercises);
  const exercises = exercisesList?.filter((exercise) => workout.exercise === exercise);
  //const exercises = useSelector(listExercises);
  const currentCourse = useSelector(currentCourseSelector);

  const workout = workoutList?.filter((workout) => workout._id === workoutId.id);
  console.log(workout);
  // let currentWorkout;

  // for (const course in allCourses) {
  //   allCourses[course].workouts.map((wo) =>
  //     wo._id === workoutId.id
  //       ? wo.progress !== undefined
  //         ? (currentWorkout = wo.progress)
  //         : (currentWorkout = wo.exercises)
  //       : ""
  //   );
  // }

  const title = `${workout}`;

  // const coursesList = useSelector(selectCourses);
  // const currentCourse = coursesList.filter((course) => course.workout.includes(workoutId.id));

  const [isProgressModalShow, setIsProgressModalShow] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  const [isTrainingModalShow, setIsTrainingModalShow] = useState(false);

  const handleClick = () => setIsProgressModalShow(true);

  const openClosedProgModal = () => {
    setIsProgressModalShow(!isProgressModalShow);
  };

  const handleSendClick = () => {
    setTimeout(() => {
      dispatch(userCourses(id));
    }, 500);
    setIsProgressModalShow(false);
    setIsSuccessModalShow(true);
  };

  return (
    <S.Container>
      <S.Main>
        <NavigateBlock page="Other" />
        <S.Heading>{workout.name}</S.Heading>
        <S.Title>{workout.name}</S.Title>
        <S.Player>
          <ReactPlayer url={workout.video} width="100%" height="100%" />
        </S.Player>
        <S.Exercises>
          <ExercisesList workout={workout.exercises} onClick={handleClick} />
          <ProgressExercises workout={exercises} />
        </S.Exercises>
      </S.Main>
      {isProgressModalShow && (
        <LayoutModal onClick={openClosedProgModal}>
          <ProgressModal onClick={handleSendClick} />
        </LayoutModal>
      )}
    </S.Container>
  );
};

export default WorkoutPage;

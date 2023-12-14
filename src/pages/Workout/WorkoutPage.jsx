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
  courseList,
  listExercises
} from "../../store/selectors/coursesNew";
import { getExecises, getWorkouts } from "../../Api";
import {
  setExercisesList,
  setSelectedWorkout,
  setWorkoutList
} from "../../store/slices/courseWorkoutSlise";

const WorkoutPage = () => {
  const workoutId = useParams();
  console.log(workoutId);
  const dispatch = useDispatch();
  // const { id } = useSelector(selectUser);

  // const allCourses = useSelector(courseList);
  const workoutList = useSelector(allWorkoutSelector);
  const currentCourse = useSelector(currentCourseSelector);
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

  const workout = workoutList?.filter((workout) => workout._id === workoutId.id);
  console.log(workout);

  const title = `${workout.name} / ${workout.details}`;

  // const coursesList = useSelector(selectCourses);
  // const currentCourse = coursesList.filter((course) => course.workout.includes(workoutId.id));

  const [isProgressModalShow, setIsProgressModalShow] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  const [isTrainingModalShow, setIsTrainingModalShow] = useState(false);

  const handleClick = () => setIsProgressModalShow(true);

  const openClosedProgModal = () => {
    setIsProgressModalShow(!isProgressModalShown);
  };

  const handleSendClick = () => {
    setTimeout(() => {
      dispatch(userCourses(id));
    }, 500);
    setIsProgressModalShow(false);
    setIsSuccessModalShow(true);
  };

  const titleClick = () => {
    setIsTrainingModalShow(true);
    dispatch(userCourses(id));
  };

  const openClosedTrainingModal = () => {
    setIsTrainingModalShow(!isTrainingModalShow);
  };

  return (
    <S.Container>
      <S.Main>
        <NavigateBlock page="Other" />
        <S.Heading>{workoutList.name}</S.Heading>
        <S.Title>{workoutList.name}</S.Title>
        <S.Player>
          <ReactPlayer url={exercises.video} width="100%" height="100%" />
        </S.Player>
        {currentWorkout && currentWorkout.length > 0 && (
          <S.Exercises>
            <ExercisesList exercises={exercises} onClick={handleClick} />
            <ProgressExercises exercises={currentWorkout} />
          </S.Exercises>
        )}
      </S.Main>
      {isProgressModalShow && (
        <LayoutModal onClick={openClosedProgModal}>
          <ProgressModal
            exercises={workoutId.exercises}
            onClick={handleSendClick}
            courseName={currentCourse.name}
            workoutName={workoutId.id}
          />
        </LayoutModal>
      )}
    </S.Container>
  );
};

export default WorkoutPage;

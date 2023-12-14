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
import { getExecises } from "../../Api";
import { setExercisesList } from "../../store/slices/courseWorkoutSlise";

const WorkoutPage = () => {
  const workoutId = useParams();
  const dispatch = useDispatch();
  // const { id } = useSelector(selectUser);

  useEffect(() => {
    getExecises()
      .then((data) => {
        dispatch(setExercisesList(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // const allCourses = useSelector(courseList);
  const workoutList = useSelector(allWorkoutSelector);
  const exercises = useSelector(listExercises);
  let currentCourse = useSelector(currentCourseSelector);
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

  const workout = workoutList?.filter((workout) => workout.includes(workout._id));
  const exercise = exercises?.filter((exercise) => workout.exercise.includes(exercise.name));
  // let currentWorkout = workout.includes(workoutId.exercises)
  // console.log(currentWorkout)

  const title = `${workout.name} / ${workout.exercises} / ${exercise.name}`;

  const [isProgressModalShow, setIsProgressModalShow] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  const [isTrainingModalShow, setIsTrainingModalShow] = useState(false);

  const handleClick = () => setIsProgressModalShow(true);

  const openClosedProgModal = () => {
    setIsProgressModalShow(!isProgressModalShow);
  };

  const handleSendClick = () => {
    setTimeout(() => {
      dispatch(currentCourse(id));
    }, 500);
    setIsProgressModalShow(false);
    setIsSuccessModalShow(true);
  };

  const titleClick = () => {
    setIsTrainingModalShow(true);
    dispatch(currentCourse(id));
  };

  const openClosedTrainingModal = () => {
    setIsTrainingModalShow(!isTrainingModalShow);
  };

  return (
    <S.Container>
      <S.Main>
        <NavigateBlock page="Other" />
        <S.Heading>{currentCourse.name}</S.Heading>
        <S.Title onClick={titleClick}>{title}</S.Title>
        <S.Player>
          <ReactPlayer url={exercise.video} width="100%" height="100%" />
        </S.Player>
        {/* {currentWorkout && currentWorkout.length > 0 && (
          <S.Exercises>
            <ExercisesList exercises={currentWorkout} onClick={handleClick} />
            <ProgressExercises exercises={currentWorkout} />
          </S.Exercises>
        )} */}
      </S.Main>
      {isProgressModalShow && (
        <LayoutModal onClick={openClosedProgModal}>
          <ProgressModal
            exercises={workout.exercises}
            onClick={handleSendClick}
            courseName={currentCourse.name}
            workoutName={workoutId.id}
          />
        </LayoutModal>
      )}
      {isSuccessModalShow && <SuccessModal setIsSuccessModalShow={setIsSuccessModalShow} />}
      {isTrainingModalShow && (
        <LayoutModal onClick={openClosedTrainingModal}>
          <SelectWorkout openClosedTrainingModal={openClosedTrainingModal} />
        </LayoutModal>
      )}
    </S.Container>
  );
};

export default WorkoutPage;

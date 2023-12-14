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
  //const workoutId = useParams();
  // const exerciseId = useParams();
  const [isProgressModalShow, setIsProgressModalShow] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  const dispatch = useDispatch();
  const workoutList = useSelector(allWorkoutSelector);
  const exercises = useSelector(listExercises);
  let currentCourse = useSelector(currentCourseSelector);
  let currentWorkout;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => setLoading(!loading), 2000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  // useEffect(() => {
  //   getWorkouts()
  //     .then((data) => {
  //       dispatch(setWorkoutList(data));
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     })
  //     .finally(() => setLoading(false));
  // }, []);

  // useEffect(() => {
  //   getExecises()
  //     .then((data) => {
  //       dispatch(setExercisesList(data));
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  // const workouts = [];
  // const allWorkouts = Object.keys(workouts).map((workout) => {
  //   return { id: _id, name: workouts[workout], video: workouts[video], user_id: workouts[user_id] };
  // });
  // console.log(allWorkouts);

  // const allCourses = useSelector(courseList);

  // for (const workout in workoutList) {
  //   workoutList[workout].workouts.map((wo) =>
  //     wo._id === workoutId.id
  //       ? wo.progress !== undefined
  //         ? (currentWorkout = wo.progress)
  //         : (currentWorkout = wo.exercises)
  //       : ""
  //   );
  // }
  // for (const exercise in workoutList) {
  //   workoutList[exercise]._id.map((wo) =>
  //     wo._id === exerciseId.id
  //       ? wo.progress !== undefined
  //         ? (currentExercise = wo.progress)
  //         : (currentExercise = wo.exercises)
  //       : ""
  //   );
  // }

  //const workout = workoutList?.filter((workout) => workout._id === workoutId.id);
  // const exercise = exercises?.filter((exercise) => workout.exercise.name === exercise);

  const title = `${workoutList.name}`;

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

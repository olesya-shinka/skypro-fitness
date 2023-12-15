/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

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
import { selectUser } from "../../store/selectors/user";

export const WorkoutPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timerId = setInterval(() => setLoading(!loading), 2000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  const courseId = useParams().id;
  const workoutId = useParams().id;
  const courses = useSelector(courseList);
  const course = courses.filter((course) => course.id === courseId.id);
  const workouts = useSelector(allWorkoutSelector);
  const workout = workouts?.filter((workout) => workout.id === workoutId.id);
  console.log("workout", workout);

  //const currentCourse = useSelector(currentCourseSelector);
  // let currentWorkout;

  // for (const course in courses) {
  //   courses[course].workouts.map((wo) =>
  //     wo._id === workoutId.id
  //       ? wo.progress !== undefined
  //         ? (currentWorkout = wo.progress)
  //         : (currentWorkout = wo.exercises)
  //       : ""
  //   );
  // }

  //const title = `${workout.name}`;

  // const coursesList = useSelector(selectCourses);
  // const currentCourse = coursesList.filter((course) => course.workout.includes(workoutId.id));

  const [isProgressModalShow, setIsProgressModalShow] = useState(false);
  const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);

  const handleClick = () => setIsProgressModalShow(true);

  const openClosedProgModal = () => {
    setIsProgressModalShow(!isProgressModalShow);
  };

  const handleSendClick = () => {
    setTimeout(() => {
      dispatch();
    }, 500);
    setIsProgressModalShow(false);
    setIsSuccessModalShow(true);
  };

  return (
    <S.Container>
      {loading ? (
        <S.Main>
          <NavigateBlock page="Other" />
          <S.Heading>{course.nameRu}</S.Heading>
          <S.Title>{workout.name}</S.Title>
          <S.Player>
            <ReactPlayer url={workout.video} width="100%" height="100%" />
          </S.Player>
          <S.Exercises>
            <ExercisesList onClick={handleClick} />
            <ProgressExercises />
          </S.Exercises>
        </S.Main>
      ) : (
        <S.LoadingCircle />
      )}
      {isProgressModalShow && (
        <LayoutModal onClick={openClosedProgModal}>
          <ProgressModal onClick={handleSendClick} />
        </LayoutModal>
      )}
      {isSuccessModalShow && <SuccessModal setIsSuccessModalShow={setIsSuccessModalShow} />}
    </S.Container>
  );
};

export default WorkoutPage;

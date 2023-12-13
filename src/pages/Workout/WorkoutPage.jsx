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

import { ExercisesList } from "../../components/Exercises/Exercises";
import { ProgressExercises } from "../../components/ProgressExercises/ProgressExercises";
import { ProgressModal } from "../../components/LayoutModal/ProgressModal/ProgressModal";
import { SuccessModal } from "../../components/LayoutModal/SuccessModal/SuccessModal";
import { SelectWorkout } from "../../components/SelectWorkout/SelectWorkout";
import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";

import { selectWorkouts } from "../../store/slices/workoutsSlice";
import { selectCourses } from "../../store/selectors/course";
import { NavigateBlock } from "../../components/NavigationBlock/Navi";
import { userCourses } from "../../Api";
import { selectUser } from "../../store/selectors/user";
import { selectUserCourses } from "../../store/selectors/progress";
import {
  allWorkoutSelector,
  currentCourseSelector,
  courseList
} from "../../store/selectors/coursesNew";

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
    setIsTrainingModalShow(!isTrainingModalShown);
  };

  return (
    <S.Container>
      <S.Main>
        <S.Heading>{currentCourse.nameRU}</S.Heading>
        <S.Title onClick={titleClick}>{workout.details ? title : workout.name}</S.Title>
        <S.Player>
          <ReactPlayer url={workout.video || ""} width="100%" height="100%" />
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

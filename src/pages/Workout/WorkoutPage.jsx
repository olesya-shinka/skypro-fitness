/* eslint-disable no-unused-vars */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

import { ExercisesList } from "../../components/Exercises/Exercises";
import { ProgressExercises } from "../../components/ProgressExercises/ProgressExercises";
import { ProgressModal } from "../../components/LayoutModal/ProgressModal/ProgressModal";
import { SuccessModal } from "../../components/LayoutModal/SuccessModal/SuccessModal";
import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";
import { NavigateBlock } from "../../components/NavigationBlock/Navi";

import { allWorkoutSelector, courseList } from "../../store/selectors/coursesNew";
import { setPracticeProgress } from "../../store/slices/courseWorkoutSlise";

//import { selectUser } from "../../store/selectors/user";
import { getProgress } from "../../Api";
import { userProgress } from "../../store/selectors/progress";

export const WorkoutPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timerId = setInterval(() => setLoading(!loading), 2000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  const workoutId = useParams().workoutId;
  const progressId = useParams().progressId;
  const courses = useSelector(courseList);
  const course = courses.filter((course) => course.workouts.includes(workoutId));
  const workouts = useSelector(allWorkoutSelector);
  const workout = workouts?.filter((workout) => workout._id === workoutId);

  const progresses = useSelector(userProgress);
  const progress = progresses?.filter((progress) => progress.workouts_id === progressId);

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

  useEffect(() => {
    getProgress({
      workouts_id: workoutId
    })
      .then((data) => {
        dispatch(setPracticeProgress(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <S.Container>
      <S.Main>
        <NavigateBlock page="Other" />
        <S.Heading>{course.length > 0 ? course[0].nameRU : "название курса не получено"}</S.Heading>
        <S.Title>{workout.length > 0 ? workout[0].name : "название на получено"}</S.Title>
        {loading ? (
          <S.Player>
            <ReactPlayer
              url={workout.length > 0 ? workout[0].video : "видео не получено"}
              width="100%"
              height="100%"
            />
          </S.Player>
        ) : (
          <S.LoadingCircle />
        )}
        <S.Exercises>
          <ExercisesList
            exercises={
              workout.length > 0 && workout[0].exercises
                ? workout[0].exercises
                : ["список упражнений пуст"]
            }
            onClick={handleClick}
          />

          <ProgressExercises exercises={workout[0]?.exercises} />
        </S.Exercises>
      </S.Main>

      {isProgressModalShow && (
        <LayoutModal onClick={openClosedProgModal}>
          <ProgressModal
            onClick={handleSendClick}
            exercises={workout[0].exercises}
            course={course[0].nameRU}
            workout={workout}
          />
        </LayoutModal>
      )}
      {isSuccessModalShow && <SuccessModal setIsSuccessModalShow={setIsSuccessModalShow} />}
    </S.Container>
  );
};

export default WorkoutPage;

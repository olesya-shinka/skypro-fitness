/* eslint-disable no-unused-vars */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentCourseSelector, allWorkoutSelector } from "../../store/selectors/coursesNew";
import { idSelector } from "../../store/selectors/user";

export function SelectWorkout({ setIsShowForm }) {
  const allWorkouts = useSelector(allWorkoutSelector);
  const currentCourse = useSelector(currentCourseSelector);
  const currentWorkoutList = currentCourse.workouts;
  const userId = useSelector(idSelector);

  // Состояние для отфильтрованных тренировок
  const [currentWorkouts, setCurrentWorkouts] = useState([]);

  useEffect(() => {
    const filterWorkout = () => {
      const filteredWorkout = allWorkouts.filter((workout) =>
        currentWorkoutList.includes(workout._id)
      );
      setCurrentWorkouts(filteredWorkout);
    };
    filterWorkout();
  }, []);
  // console.log(currentWorkouts);
  const exercises = currentWorkouts[0]?.exercises;
  // console.log(exercises);

  // Создаем state с начальным состоянием
  const [workoutStatus, setWorkoutStatus] = useState({});
  // useEffect(() => {
  //   console.log(workoutStatus);
  // }, [workoutStatus]);

  useEffect(() => {
    const checkDone = () => {
      for (let i = 0; i < currentWorkouts.length; i++) {
        const currentWorkout = currentWorkouts[i];

        // Проход по всем упражнениям в текущей тренировке
        for (let j = 0; j < currentWorkout.exercises.length; j++) {
          const exercise = currentWorkout.exercises[j];

          const targretProgress = exercises.find(
            (exercise) => exercise.progress && exercise.progress[userId]
          );
          if (!targretProgress || !targretProgress.progress[userId]) {
            setWorkoutStatus((prevStatus) => ({
              ...prevStatus,
              [currentWorkout._id]: false
            }));
          } else {
            const progressObject = targretProgress.progress[userId];
            const progressIds = Object.keys(progressObject);
            const lastProgressId = progressIds[progressIds.length - 1];
            const done = progressObject[lastProgressId];

            // Проверка, что прогресс равен количеству повторений
            if (exercise.quantity > done) {
              setWorkoutStatus((prevStatus) => ({
                ...prevStatus,
                [currentWorkout._id]: false
              }));
            } else {
              setWorkoutStatus((prevStatus) => ({
                ...prevStatus,
                [currentWorkout._id]: true
              }));
            }
          }
        }
      }
    };
    checkDone();
  }, [currentWorkouts, exercises, userId]);

  return (
    <S.SelectContainer>
      <S.SelectWrapper>
        <S.SelectCloseIconSvg
          onClick={() => {
            setIsShowForm(false);
          }}>
          <use xlinkHref="/icons/sprite.svg#icon-close" />
        </S.SelectCloseIconSvg>
        <S.SelectTitle>Выберите тренировку</S.SelectTitle>
        <S.SelectList>
          {currentWorkouts?.map((workout, index) => (
            <NavLink key={workout._id} to={`/WorkoutPage/${workout._id}`}>
              <S.SelectItem>{workout.name}</S.SelectItem>
              <S.SelectItemType>{workout.details}</S.SelectItemType>
            </NavLink>
          ))}
        </S.SelectList>
      </S.SelectWrapper>
    </S.SelectContainer>
  );
}
export default SelectWorkout;

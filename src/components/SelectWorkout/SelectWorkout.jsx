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
  const isFinished = true;
  useEffect(() => {
    console.log(workoutStatus);
  }, [workoutStatus]);

  useEffect(() => {
    const checkDone = () => {
      for (let i = 0; i < currentWorkouts.length; i++) {
        const currentWorkout = currentWorkouts[i];

        // Проход по всем упражнениям в текущей тренировке
        for (let j = 0; j < currentWorkout.exercises?.length; j++) {
          const exercise = currentWorkout.exercises[j];
          console.log(exercise);

          if (!exercise.progress || !exercise.progress[userId]) {
            setWorkoutStatus((prevStatus) => ({
              ...prevStatus,
              [currentWorkout._id]: false
            }));
          } else {
            const progressUser = exercise?.progress[userId];
            const progressIds = Object.keys(progressUser);
            const lastProgressId = progressIds[progressIds.length - 1];
            const done = progressUser[lastProgressId];
            console.log("done", done);

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
              <S.SelectItem
                style={{
                  color: workoutStatus[workout._id] ? "#06B16E" : "#000000",
                  border: `1px solid ${workoutStatus[workout._id] ? "#06B16E" : "#000000"}`
                }}>
                {workout.name}
                {workoutStatus[workout._id] && (
                  <S.SelectItemCheckboxImg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="26"
                      viewBox="0 0 28 26"
                      fill="none">
                      <circle cx="12" cy="13.5" r="11.5" stroke="#06B16E" />
                      <path d="M6 9.81034L11.775 15.5L27 0.5" stroke="#06B16E" />
                    </svg>
                  </S.SelectItemCheckboxImg>
                )}
              </S.SelectItem>
            </NavLink>
          ))}
        </S.SelectList>
      </S.SelectWrapper>
    </S.SelectContainer>
  );
}
export default SelectWorkout;
// isFinished ? (
//   <S.SelectItemCheckboxImg>
//     <use xlinkHref="/img/isFinished.svg" />
//   </S.SelectItemCheckboxImg>
// ) : (
//   ""
// )

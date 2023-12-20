/* eslint-disable no-unused-vars */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentCourseSelector, allWorkoutSelector } from "../../store/selectors/coursesNew";
// import { selectCurrentWorkout } from "../../store/slices/workoutsSlice";
// import { selectUserCourses } from "../../store/selectors/progress";
// import { selectUser } from "../../store/selectors/user";
// import { userCourses } from "../../Api";
// import { getCurrentWorkouts } from "./utils";

export function SelectWorkout({ setIsShowForm }) {
  const allWorkouts = useSelector(allWorkoutSelector);
  const currentCourse = useSelector(currentCourseSelector);
  const currentWorkoutList = currentCourse.workouts;

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
  console.log(currentWorkouts);
  // const exercises = currentWorkouts[0].exercises;
  // console.log(exercises);

  // const getDone = ({ needed }) => {
  //   const targretProgress = exercises.find(
  //     (exercise) => exercise.progress && exercise.progress[userId]
  //   );
  //   if (!targretProgress || !targretProgress.progress[userId]) {
  //     console.log("Прогресс не найден, возвращено 0");
  //     return 0;
  //   }
  //   const progressObject = targretProgress.progress[userId];
  //   const progressIds = Object.keys(progressObject);
  //   const lastProgressId = progressIds[progressIds.length - 1];
  //   const done = progressObject[lastProgressId];
  //   console.log(done);
  //   let result = Math.round((done / needed) * 100);
  //   console.log(needed);
  //   if (result > 100) {
  //     result = 100;
  //   }
  //   return result;
  // };

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

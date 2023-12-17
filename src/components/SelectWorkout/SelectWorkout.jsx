/* eslint-disable no-unused-vars */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { currentCourseSelector, allWorkoutSelector } from "../../store/selectors/coursesNew";
// import { selectCurrentWorkout } from "../../store/slices/workoutsSlice";
import { selectUserCourses } from "../../store/selectors/progress";
// import { selectUser } from "../../store/selectors/user";
// import { userCourses } from "../../Api";
import { getCurrentWorkouts } from "./utils";

export function SelectWorkout({ setIsShowForm }) {
  const allWorkouts = useSelector(allWorkoutSelector);
  const currentCourse = useSelector(currentCourseSelector);
  const currentWorkoutList = currentCourse.workouts;

  const selectWorkouts = getCurrentWorkouts(currentWorkoutList, allWorkouts);

  // Состояние для отфильтрованных тренировок
  const [currentWorkouts, setCurrentWorkouts] = useState([]);

  // useEffect(() => {
  //   const filterWorkout = () => {
  //     const filteredWorkout = allWorkouts.filter((workout) =>
  //       currentWorkoutList.includes(workout._id)
  //     );
  //     setCurrentWorkouts(filteredWorkout);
  //   };
  //   filterWorkout();
  // }, []);

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
          {selectWorkouts?.map((workout) => (
            <NavLink key={workout._id} to={`/WorkoutPage/${workout._id}`}>
              <S.SelectItem>{workout.name}</S.SelectItem>
              <S.SelectItemType></S.SelectItemType>
            </NavLink>
          ))}
        </S.SelectList>
      </S.SelectWrapper>
    </S.SelectContainer>
  );
}
export default SelectWorkout;

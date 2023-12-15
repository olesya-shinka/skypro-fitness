/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
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
              <S.SelectItemType></S.SelectItemType>
            </NavLink>
          ))}
        </S.SelectList>
      </S.SelectWrapper>
    </S.SelectContainer>
  );
}
export default SelectWorkout;

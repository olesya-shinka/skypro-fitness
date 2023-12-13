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
import { useDispatch, useSelector } from "react-redux";
import { currentCourseSelector, allWorkoutSelector } from "../../store/selectors/coursesNew";
import { getWorkouts } from "../../Api";
import { setWorkoutList } from "../../store/slices/courseWorkoutSlise";
// import { selectCurrentWorkout } from "../../store/slices/workoutsSlice";
// import { selectUserCourses } from "../../store/selectors/progress";
// import { selectUser } from "../../store/selectors/user";
// import { userCourses } from "../../Api";
// import { getCurrentWorkouts } from "./utils";

export function SelectWorkout({ openClosedTrainingModal }) {
  const dispatch = useDispatch();

  useEffect(() => {
    getWorkouts()
      .then((data) => {
        dispatch(setWorkoutList(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const allWorkouts = useSelector(allWorkoutSelector);
  const currentCourse = useSelector(currentCourseSelector);
  const currentWorkoutList = currentCourse.workouts;
  console.log(currentWorkoutList);

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

  return (
    <S.SelectContainer>
      <S.SelectWrapper>
        <S.SelectTitle>Выберите тренировку</S.SelectTitle>
        <S.SelectList>
          {currentWorkouts?.map((workout) => (
            <NavLink to={`/workout/${workout._id}`}>
              <S.SelectItem key={workout._id} onClick={openClosedTrainingModal}>
                {workout.name}
              </S.SelectItem>
              <S.SelectItemType>{workout.details}</S.SelectItemType>
            </NavLink>
          ))}
        </S.SelectList>
      </S.SelectWrapper>
    </S.SelectContainer>
  );
}
export default SelectWorkout;

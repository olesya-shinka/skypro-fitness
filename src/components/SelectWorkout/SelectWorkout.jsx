/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentCourse } from "../../store/selectors/coursesNew";
import { getWorkouts } from "../../Api";
import { selectCurrentWorkout } from "../../store/slices/workoutsSlice";
import { selectUserCourses } from "../../store/selectors/progress";
import { selectUser } from "../../store/selectors/user";
import { userCourses } from "../../Api";
import { getCurrentWorkouts } from "./utils";

export function SelectWorkout({ openClosedTrainingModal }) {
  const [allWorkouts, setAllWorkouts] = useState(null);
  const dispatch = useDispatch;

  // useEffect(() => {
  //   getWorkouts()
  //     .then((data) => {
  //       setAllWorkouts(data);
  //       console.log(allWorkouts);
  //       // dispatch(setCourseList(data));
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  const currentCourseUs = useSelector(currentCourse);
  const currentWorkoutList = currentCourseUs.workouts;

  console.log(currentCourseUs);

  // const currentUserCourses = useSelector(selectUserCourses);

  // const selectWorkouts = getCurrentWorkouts(currentUserCourses, workouts);

  return (
    <S.SelectContainer>
      <S.SelectTitle>Выберите тренировку</S.SelectTitle>
      <S.SelectList>
        {/* {currentCourseUs?.map((workout) => (
          <NavLink to={`/workout/${workout._id}`}>
            <S.SelectItem key={workout._id} onClick={openClosedTrainingModal}>
              {workout.name}
            </S.SelectItem>
            <S.SelectItemType>{workout.details}</S.SelectItemType>
          </NavLink>
        ))} */}
      </S.SelectList>
    </S.SelectContainer>
  );
}
export default SelectWorkout;

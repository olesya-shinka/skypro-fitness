/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import ButtonMain from "../../ButtonMain/ButtonMain";
import { addProgress } from "../../../Api";
import { selectUser } from "../../../store/selectors/user";
import InputProgress from "../InputProgress/InputProgress";
import { getUserProgress } from "./utils";

export const ProgressModal = ({ exercises, onClick, courseName }) => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectUser);
  const userProfile = useSelector((state) => state.profile.list);

  let currentCourseId;
  let currentCourse;
  let currentWorkoutIndex;

  for (const courseId in userProfile) {
    if (userProfile[courseId].name === courseName) {
      currentCourseId = courseId;
      currentCourse = userProfile[courseId];
    }
  }

  currentCourse.workouts.map((wo, woIndex) =>
    wo.exercises.map((ex) =>
      exercises.map((userEx) => (userEx.name === ex.name ? (currentWorkoutIndex = woIndex) : ""))
    )
  );

  const addUserProgress = (data) => {
    const progress = getUserProgress(data, exercises);

    dispatch(
      addProgress({
        id: id,
        courseId: currentCourseId,
        workoutIndex: currentWorkoutIndex,
        progress: progress
      })
    );
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    addUserProgress(data);
    onClick();
  };

  return (
    <S.FormModal onSubmit={handleSubmit(onSubmit)}>
      <S.TitleModal>Мой прогресс</S.TitleModal>
      <S.InputsModal>
        {exercises?.map((exercise) => (
          <S.InputText key={exercise.id}>
            {`Сколько раз вы сделали упражнение? "${exercise.name.split("(")[0]}" ?`}
            <InputProgress name={exercise.name} register={register} errors={errors} />
          </S.InputText>
        ))}
      </S.InputsModal>
      <ButtonMain type="submit" content="Отправить" />
    </S.FormModal>
  );
};
export default ProgressModal;

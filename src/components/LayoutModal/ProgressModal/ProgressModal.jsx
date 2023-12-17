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
import { getUserProgress } from "../../../Api";
import { userProgress } from "../../../store/selectors/progress";

export const ProgressModal = ({ exercises, onClick, course, workout }) => {
  const dispatch = useDispatch();
  const { id } = useSelector(selectUser);

  let currentCourseId;
  let currentCourse;
  let currentworkoutId;

  for (const courseId in userProgress) {
    if (userProgress[courseId[0]].name === course) {
      currentCourseId = courseId;
      currentCourse = userProgress[courseId];
    }
  }

  workout.map((wo, woIndex) =>
    wo.exercises.map((ex) =>
      exercises.map((userEx) => (userEx.name === ex.name ? (currentworkoutId = woIndex) : ""))
    )
  );

  const addUserProgress = (data) => {
    const progress = getUserProgress(data, exercises);

    dispatch(
      addProgress({
        id: id,
        courseId: currentCourseId,
        workout: currentworkoutId,
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
          <S.InputText key={exercise.name}>
            {`Сколько раз вы сделали упражнение "${exercise.name.split("(")[0]}" ?`}
            <InputProgress name={exercise.name} register={register} errors={errors} />
          </S.InputText>
        ))}
      </S.InputsModal>
      <ButtonMain type="submit" content="Отправить" />
    </S.FormModal>
  );
};
export default ProgressModal;

/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import ButtonMain from "../../ButtonMain/ButtonMain";
import { idSelector } from "../../../store/selectors/user";
import InputProgress from "../InputProgress/InputProgress";
import { updateProgress2 } from "../../../Api/progressApi";
import { getWorkouts } from "../../../Api";
import { setWorkoutList } from "../../../store/slices/courseWorkoutSlise";
// import { addProgress } from "../../../Api";
// import { getUserProgress, postProgress, getProgress } from "../../../Api";
// import { courseList } from "../../../store/selectors/coursesNew";
// import { userProgress } from "../../../store/selectors/progress";

export const ProgressModal = ({ exercises, onClick, course, workout }) => {
  const dispatch = useDispatch();
  const userId = useSelector(idSelector);
  const onSubmit = async (data) => {
    const progress = {};

    // Собираем данные о прогрессе из инпутов
    exercises.forEach((exercise, index) => {
      const exerciseNumber = index;
      const exerciseId = `${workout[0]._id}_exercise${exerciseNumber}`;

      // Значение прогресса из соответствующего инпута
      const exerciseProgress = parseInt(data[`exercise_${exerciseId}`], 10) || 0;

      // Заполняем объект progress
      progress[exerciseId] = exerciseProgress;
    });

    // Добавляем или обновляем прогресс в базе данных
    for (let i = 0; i < exercises.length; i++) {
      const exerciseNumber = i;
      const exerciseId = `${workout[0]._id}_exercise${exerciseNumber}`;
      const exerciseProgress = progress[exerciseId];

      await updateProgress2(userId, workout[0]._id, exerciseNumber, exerciseProgress);
    }

    getWorkouts()
      .then((data) => {
        dispatch(setWorkoutList(data));
      })
      .catch((error) => {
        console.log(error.message);
      });

    // Диспетчим действие добавления прогресса в Redux (если это нужно)
    // dispatch(
    //   addProgress({
    //     workoutId: workout._id,
    //     progress: progress
    //   })
    // );

    onClick(); // Закрываем модальное окно или делаем что-то еще
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  //const courses = useSelector(courseList);

  // const addUserProgress = (data) => {
  //   const progress = getUserProgress(data, exercises);

  //   dispatch(
  //     addProgress({
  //       workoutId: workout._id,
  //       progress: progress
  //     })
  //   );
  // };

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors }
  // } = useForm();

  // const onSubmit = async (data) => {
  //   addUserProgress(data);
  //   onClick();
  // };
  return (
    <S.FormModal onSubmit={handleSubmit(onSubmit)}>
      <S.TitleModal>Мой прогресс</S.TitleModal>
      <S.InputsModal>
        {exercises?.map((exercise, index) => (
          <S.InputText key={exercise.name}>
            {`Сколько раз вы сделали упражнение "${exercise.name.split("(")[0]}" ?`}
            <InputProgress
              name={`exercise_${workout[0]._id}_exercise${index}`}
              register={register}
              errors={errors}
            />
          </S.InputText>
        ))}
      </S.InputsModal>
      <ButtonMain type="submit" content="Отправить" />
    </S.FormModal>
  );
};
export default ProgressModal;

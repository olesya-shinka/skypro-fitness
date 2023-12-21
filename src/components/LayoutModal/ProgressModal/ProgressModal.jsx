import * as S from "./styles";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import ButtonMain from "../../ButtonMain/ButtonMain";
import { idSelector } from "../../../store/selectors/user";
import InputProgress from "../InputProgress/InputProgress";
import { useState } from "react";
import { updateProgress2 } from "../../../Api/progressApi";
import { getWorkouts } from "../../../Api";
import { setWorkoutList } from "../../../store/slices/courseWorkoutSlise";

export function ProgressModal({ exercises, onClick, workout, setIsProgressModalShow }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({});
  const [complete, setComplete] = useState({});
  const userId = useSelector(idSelector);
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: {
        done: e.target.value,
        goal: e.target.id
      }
    });
    if (e.target.value >= Number(e.target.id)) {
      setComplete({
        ...complete,
        [e.target.name]: { done: "complete" }
      });
    }
  };
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

    onClick(); // Закрываем модальное окно или делаем что-то еще
  };

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <S.FormModal onSubmit={handleSubmit(onSubmit)}>
      <S.closerBlog>
        <S.Closer
          src="/img/close.png"
          alt="закрыть"
          onClick={() => {
            setIsProgressModalShow(false);
          }}
        />
      </S.closerBlog>
      <S.TitleModal>Мой прогресс</S.TitleModal>
      <S.InputsModal>
        {exercises?.map((exercise, index) => (
          <S.InputText key={exercise.name}>
            {`Сколько раз вы сделали упражнение "${exercise.name.split("(")[0]}" ?`}
            <InputProgress
              name={`exercise_${workout[0]._id}_exercise${index}`}
              register={register}
              errors={errors}
              onChange={onChange}
            />
          </S.InputText>
        ))}
      </S.InputsModal>
      <ButtonMain type="submit" content="Отправить" />
    </S.FormModal>
  );
}
export default ProgressModal;

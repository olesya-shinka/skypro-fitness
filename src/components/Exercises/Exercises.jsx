/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import ButtonMain from "../ButtonMain/ButtonMain";

export const ExercisesList = ({ onClick, exercises }) => {
  return (
    <div className="content">
      <S.TitleExercises>Упражнения</S.TitleExercises>
      <S.ListExercises>
        {exercises?.map((exercise, i) => (
          <S.ListExercisesItem key={i}>{exercise.name}</S.ListExercisesItem>
        ))}
      </S.ListExercises>
      <ButtonMain content="Заполнить свой прогресс" onClick={onClick} />
    </div>
  );
};

export default ExercisesList;

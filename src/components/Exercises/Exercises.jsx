import * as S from "./styles";
import ButtonMain from "../ButtonMain/ButtonMain";
//import { useEffect } from "react";

export const ExercisesList = ({ onClick, exercises }) => {
  //useEffect(() => console.log(exercises), [exercises]);
  return (
    <div>
      <S.TitleExercises>Упражнения</S.TitleExercises>
      <S.ListExercises>
        {exercises.map((exercise, i) => (
          <S.ListExercisesItem key={i}>{exercise.name}</S.ListExercisesItem>
        ))}
      </S.ListExercises>
      <ButtonMain content="Заполнить свой прогресс" onClick={onClick} />
    </div>
  );
};

export default ExercisesList;

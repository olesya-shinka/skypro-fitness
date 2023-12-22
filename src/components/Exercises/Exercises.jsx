import * as S from "./styles";
import ButtonMain from "../ButtonMain/ButtonMain";

export const ExercisesList = ({ onClick, exercises }) => {
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

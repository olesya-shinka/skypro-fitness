import ButtonMain from "../Ui/ButtonMain";
import * as S from "./styles";

const ExercisesList = ({ exercises, onClick }) => {
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

import * as S from "./styles";

export const ProgressExercises = ({ exercises }) => {
  return (
    <S.Progress>
      <S.Title>Мой прогресс по тренировке:</S.Title>
      <S.ListExercises>
        {exercises?.map((exercise, i) => {
          const percent = Math.round(
            ((Number(exercise.exercisesDone) || 0) / exercise.quantity) * 100
          );

          return (
            <S.ListItem key={i + 1}>
              <S.NameExercise>{exercise.name.split("(")[0]}</S.NameExercise>
              <S.ProgressBar>
                <S.Done style={{ width: `${percent}%` }}></S.Done>
                <S.Percent
                  style={{
                    left: `${percent}px`,
                    color: percent > 0 ? "#fff" : "#000"
                  }}>
                  {percent}%
                </S.Percent>
              </S.ProgressBar>
            </S.ListItem>
          );
        })}
      </S.ListExercises>
    </S.Progress>
  );
};

export default ProgressExercises;

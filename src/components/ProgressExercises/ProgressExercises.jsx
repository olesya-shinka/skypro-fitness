import * as S from "./styles";

const ProgressExercises = ({ exercises }) => {
  return (
    <S.Progress>
      <S.Title>Мой прогресс по тренировке:</S.Title>
      <S.ListExercises>
        {exercises?.map((exercise, i) => {
          const percent = Math.round(
            ((Number(exercise.exercisesDone) || 0) / exercise.count) * 100
          );

          return (
            <S.ListExercisesItem key={i + 1}>
              <S.NameExercises>{exercise.name.split("(")[0]}</S.NameExercises>
              <S.ProgressBar>
                <S.Done style={{ width: `${percent}%` }}></S.Done>
                <S.Percent
                  style={{
                    left: `${percent}px`,
                    color: percent > 0 ? "#fff" : "#000",
                  }}
                >
                  {percent}%
                </S.Percent>
              </S.ProgressBar>
            </S.ListExercisesItem>
          );
        })}
      </S.ListExercises>
    </S.Progress>
  );
};

export default ProgressExercises;

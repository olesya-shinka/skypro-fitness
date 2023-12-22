/* eslint-disable no-unused-vars */
import * as S from "./styles";

export const ProgressExercises = ({ exercises, userId }) => {
  const getDone = ({ needed, exercise }) => {
    if (!exercise?.progress) {
      return 0;
    }

    const progressUser = exercise?.progress[userId];

    if (!progressUser) {
      return 0;
    }

    const progressIds = Object.keys(progressUser);
    const lastProgressId = progressIds[progressIds.length - 1];
    const done = progressUser[lastProgressId];

    let result = Math.round((done / needed) * 100);
    if (result > 100) {
      result = 100;
    }
    return result;
  };

  const colors = [
    { fill: "#565EEF", bcg: "#EDECFF" },
    { fill: "#FF6D00", bcg: "#FFF2E0" },
    { fill: "#9A48F1", bcg: "#F9EBFF" },
    { fill: "#00C90D", bcg: "#e6fae7" },
    { fill: "#E40045", bcg: "#fce6ec" }
  ];

  return (
    <S.Progress>
      <S.Title>Мой прогресс по тренировке:</S.Title>
      <S.ListExercises>
        {exercises?.map((exercise, index) => {
          const percent = getDone({
            needed: exercise.quantity,
            exercise: exercise
          });

          return (
            <S.ListItem key={index + 1}>
              <S.NameExercise>{exercise.name.split("(")[0]}</S.NameExercise>
              <S.ProgressBar
                style={{
                  backgroundColor: colors[index].bcg,
                  border: `2px solid ${colors[index]?.fill}`
                }}>
                <S.Done
                  style={{
                    width: `${percent}%`,
                    backgroundColor: colors[index]?.fill
                  }}></S.Done>
                <S.Percent
                  style={{
                    color: percent > 0 ? "#fff" : "#000",
                    left: `${percent}px`
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

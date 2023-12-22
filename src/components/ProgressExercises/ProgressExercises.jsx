/* eslint-disable no-unused-vars */
import * as S from "./styles";

export const ProgressExercises = ({ exercises, userId }) => {
  console.log("все упражнения", exercises);
  const getDone = ({ needed, exercise }) => {
    console.log(exercise);
    if (!exercise?.progress) {
      console.log("Прогресс не найден или не является массивом, возвращено 0");
      return 0;
    }
    const progressUser = exercise?.progress[userId];

    if (!progressUser) {
      console.log("Прогресс не найден, возвращено 0");
      return 0;
    }

    const progressIds = Object.keys(progressUser);
    // console.log(progressIds);
    const lastProgressId = progressIds[progressIds.length - 1];
    // console.log(lastProgressId);
    const done = progressUser[lastProgressId];
    console.log("выполнено", done);
    let result = Math.round((done / needed) * 100);
    // console.log("нужно сделать", needed);
    if (result > 100) {
      result = 100;
    }
    return result;
  };
  // console.log(exercises);

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

import * as S from "./styles";

export const ProgressExercises = ({ exercises, userId }) => {
  const getDone = ({ needed }) => {
    const targretProgress = exercises.find((exercise) => exercise.progress[userId]);
    console.log(targretProgress);
    const progressObject = targretProgress.progress[userId];
    // Получите первый ключ из объекта прогресса
    const firstProgressId = Object.keys(progressObject)[0];
    const done = progressObject[firstProgressId];
    console.log(done);
    let result = (done / needed) * 100;
    console.log(needed);
    if (result > 100) {
      result = 100;
    }
    return result;
  };
  console.log(exercises);

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
        {exercises?.map((exercise, i, index) => {
          const percent = getDone({ needed: exercise.quantity });

          return (
            <S.ListItem key={i + 1}>
              <S.NameExercise>{exercise.name.split("(")[0]}</S.NameExercise>
              <S.ProgressBar
                style={{
                  width: `${percent}%`,
                  background: colors[index],
                  border: `2px solid ${colors[index]?.bcg}`
                }}>
                <S.Done></S.Done>
                <S.Percent
                  style={{
                    left: `${percent}px`,
                    color: percent > 0 ? "#fff" : "#000",
                    background: colors[index]?.fill
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

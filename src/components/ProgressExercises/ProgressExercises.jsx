import * as S from "./styles";

export const ProgressExercises = ({ exercises, userId }) => {
  const getDone = ({ needed }) => {
    const targretProgress = exercises.find(
      (exercise) => exercise.progress && exercise.progress[userId]
    );
    if (!targretProgress || !targretProgress.progress[userId]) {
      console.log("Прогресс не найден, возвращено 0");
      return 0;
    }
    const progressObject = targretProgress.progress[userId];
    // Получите первый ключ из объекта прогресса
    const firstProgressId = Object.keys(progressObject)[0];
    const done = progressObject[firstProgressId];
    console.log(done);
    let result = Math.round((done / needed) * 100);
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
        {exercises?.map((exercise, index) => {
          const percent = getDone({ needed: exercise.quantity });

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
                    // display: "flex",
                    // textAlign: "right",
                    // marginRight: `${100 - percent}%`,
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

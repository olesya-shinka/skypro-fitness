import * as S from "./styles";

export const ProgressExercises = ({ exercises }) => {
  // getProgressInPercent = ({ exercises }) => {
  //   const getDone = ({ exercise, needed }) => {
  //     const done = exercise.progress?.find((item) => item.id === userId)[0];
  //     console.log(done);
  //     let result = (done / needed) * 100;
  //     if (result > 100) {
  //       result = 100;
  //     }
  //     return result;
  //   };
  //   console.log(exercises);

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
          let percent = 0;

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

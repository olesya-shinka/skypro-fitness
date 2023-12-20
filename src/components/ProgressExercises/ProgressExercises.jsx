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

  return (
    <S.Progress>
      <S.Title>Мой прогресс по тренировке:</S.Title>
      <S.ListExercises>
        {exercises?.map((exercise, i) => {
          const percent = getDone({ needed: exercise.quantity });
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

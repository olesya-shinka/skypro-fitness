/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { calculator } from "./utils";
import * as S from "./styles";

export const ProgressExercises = ({ exercises, progress }) => {
  const currentExercises = exercises.exercises;

  const currentProgress = progress ? Object.keys(progress).map((key) => progress[key]) : null;
  return (
    <S.ProgressBlock>
      <S.ProgressTitle>Мой прогресс по тренировке:</S.ProgressTitle>

      <S.ProgressStats>
        {currentExercises && currentProgress
          ? currentExercises.map(({ name, quantity }, index) => {
              const done = Number(currentProgress[index]);
              return (
                <S.ProgressStatsItem $colorIndex={index} key={index}>
                  <S.ProgressName>{name}</S.ProgressName>

                  <S.ProgressBar>
                    <S.Progress $percentage={calculator(done, quantity)}>
                      <span>{calculator(done, quantity)} %</span>
                    </S.Progress>
                  </S.ProgressBar>
                </S.ProgressStatsItem>
              );
            })
          : null}
      </S.ProgressStats>
    </S.ProgressBlock>
  );
};

export default ProgressExercises;

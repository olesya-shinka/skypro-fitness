import * as S from "./styles";

export default function SelectWorkout() {
  const lessons = [
    {
      id: "1",
      isFinished: true,
      name: "Утренняя практика",
      dis: "Йога на каждый день / 1 день ",
    },
    {
      id: "3",
      isFinished: true,
      name: "Красота и здоровье",
      dis: "Йога на каждый день / 2 день ",
    },
    {
      id: "4",
      isFinished: false,
      name: "Асаны стоя",
      dis: "Йога на каждый день / 3 день ",
    },
    {
      id: "5",
      isFinished: false,
      name: "Растягиваем мышцы бедра",
      dis: "Йога на каждый день / 4 день ",
    },
    {
      id: "6",
      isFinished: false,
      name: "Гибкость спины",
      dis: "Йога на каждый день / 5 день ",
    },
  ];
  const LessonList = lessons.map((lesson) => (
    <S.SelectItem $isFinished={lesson.isFinished}>
      {lesson.name}
      {lesson.isFinished ? (
        <S.SelectItemCheckboxImg>
          <use xlinkHref="/img/isFinished.svg" />
        </S.SelectItemCheckboxImg>
      ) : (
        ""
      )}
      <S.SelectItemType>{lesson.dis}</S.SelectItemType>
    </S.SelectItem>
  ));

  return (
    <S.SelectContainer>
      <S.SelectWrapper>
        <S.SelectTitle>Выберите тренировку</S.SelectTitle>
        <S.SelectList>{LessonList}</S.SelectList>
      </S.SelectWrapper>
    </S.SelectContainer>
  );
}

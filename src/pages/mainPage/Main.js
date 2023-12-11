import { useEffect, useState } from "react";
import { Courses } from "../../components/Courses/Courses";
import * as S from "./MainStyle";
import { getCourses } from "../../Api";
export const MainPage = () => {
  const [courses, setСourses] = useState([]);
  useEffect(() => {
    getCourses()
      .then((data) => {
        console.log(data);
        setСourses(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  const ButtonUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      <S.Container>
        <S.Main>
          <S.Header>
            <S.Text>
              <S.Title>Онлайн-тренировки для занятий дома</S.Title>
              <S.Slogan>Начните заниматься спортом и улучшите качество жизни</S.Slogan>
            </S.Text>
            <S.SaleSticker>
              <img src="/img/saleSticker.svg" alt="Sale Stiker"></img>
            </S.SaleSticker>
          </S.Header>

          <Courses courses={courses} />

          <S.ButtonUp onClick={ButtonUp}>Наверх&#129045;</S.ButtonUp>
        </S.Main>
      </S.Container>
    </>
  );
};

import { useEffect } from "react";
import { Courses } from "../../components/Courses/Courses";
import * as S from "./MainStyle";
import NavigateBlock from "../../components/NavigationBlock/Navi";
import { useSelector } from "react-redux";
import { courseList } from "../../store/selectors/coursesNew";

export const MainPage = ({ loading, setLoading }) => {
  useEffect(() => {
    // Заводим таймер
    const timerId = setInterval(() => setLoading(!loading), 5000);
    // Данная функция вызывается при удалении компонента из DOM
    return () => {
      // Наводим порядок после удаления компонента
      clearInterval(timerId);
    };
  }, []);

  const ButtonUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const courses = useSelector(courseList);

  return (
    <>
      <S.Container>
        <S.Main>
          <NavigateBlock page="Main_Page" />
          <S.Header>
            <S.Text>
              <S.Title>Онлайн-тренировки для занятий дома</S.Title>
              <S.Slogan>Начните заниматься спортом и улучшите качество жизни</S.Slogan>
            </S.Text>
            <S.SaleSticker>
              <img src="/img/saleSticker.svg" alt="Sale Stiker"></img>
            </S.SaleSticker>
          </S.Header>
          {loading ? (
            <>
              <Courses courses={courses} />
              <S.ButtonUp onClick={ButtonUp}>Наверх↑</S.ButtonUp>
            </>
          ) : (
            <S.LoadingCircle></S.LoadingCircle>
          )}
        </S.Main>
      </S.Container>
    </>
  );
};

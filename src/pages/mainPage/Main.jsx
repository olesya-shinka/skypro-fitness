import { useEffect, useState } from "react";
import { Courses } from "../../components/Courses/Courses";
import * as S from "./MainStyle";
import { getCourses } from "../../Api";
import NavigateBlock from "../../components/NavigationBlock/Navi";
import { useDispatch } from "react-redux";
import { setCourseList } from "../../store/slices/courseWorkoutSlise";
import { useSelector } from "react-redux";
import { courseList } from "../../store/selectors/coursesNew";

export const MainPage = () => {
  // const [courses, setСourses] = useState([]);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    // Заводим таймер
    const timerId = setInterval(() => setLoading(!loading), 5000);
    // Данная функция вызывается при удалении компонента из DOM
    return () => {
      // Наводим порядок после удаления компонента
      clearInterval(timerId);
    };
  }, []);

  useEffect(() => {
    getCourses()
      .then((data) => {
        console.log(data);
        // setСourses(data);
        dispatch(setCourseList(data));
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
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
              <S.ButtonUp onClick={ButtonUp}>Наверх&#129045;</S.ButtonUp>
            </>
          ) : (
            <S.LoadingCircle></S.LoadingCircle>
          )}
        </S.Main>
      </S.Container>
    </>
  );
};

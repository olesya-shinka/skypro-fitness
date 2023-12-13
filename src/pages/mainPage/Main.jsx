/* eslint-disable prettier/prettier */
import { useEffect } from "react";
import { Courses } from "../../components/Courses/Courses";
import * as S from "./MainStyle";
import { getCourses } from "../../Api";
import { useDispatch } from "react-redux";
import { setCourseList } from "../../store/slices/courseWorkoutSlise";
import { useSelector } from "react-redux";
import { courseList } from "../../store/selectors/coursesNew";

export const MainPage = () => {
  // const [courses, setСourses] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getCourses()
      .then((data) => {
        // console.log(data);
        // setСourses(data);
        dispatch(setCourseList(data));
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
  const courses = useSelector(courseList);

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

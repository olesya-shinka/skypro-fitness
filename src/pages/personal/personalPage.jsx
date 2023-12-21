import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectWorkout from "../../components/SelectWorkout/SelectWorkout";
import { ChangeEmail } from "../../components/ChangeEmail/ChangeEmail";
import { ChangePass } from "../../components/ChangePass/ChangePass";
import { getWorkouts } from "../../Api";
import { courseList } from "../../store/selectors/coursesNew";
import { emailSelector, passwordSelector, idSelector } from "../../store/selectors/user";
import { setCurrentCourse, setWorkoutList } from "../../store/slices/courseWorkoutSlise";
import { images } from "../../components/images/Images";
import NavigateBlock from "../../components/NavigationBlock/Navi";

export const PersonalPage = ({ loading }) => {
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditPass, setIsEditPass] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const courses = useSelector(courseList);
  const userId = useSelector(idSelector);
  const dispatch = useDispatch();
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);

  //получить курсы юзера

  const coursesForUser = courses.filter(
    (course) => course.users && course.users.some((user) => user === userId)
  );

  useEffect(() => {
    getWorkouts()
      .then((data) => {
        dispatch(setWorkoutList(data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const handleCard = (course) => {
    dispatch(setCurrentCourse(course));
    localStorage.setItem("selectedCourse", JSON.stringify(course));
    setIsShowForm(true);
  };
  return (
    <S.Wrap>
      <S.Content>
        <NavigateBlock page="Other" />
        <S.Title>
          <S.TitleText>Мой профиль</S.TitleText>
          <S.TitleTextLogin>
            Логин:<S.Text>{email}</S.Text>
          </S.TitleTextLogin>
          {isEditEmail ? <ChangeEmail setIsEditEmail={setIsEditEmail} /> : null}
          <S.TitleTextPass>
            Пароль:<S.Text>{password}</S.Text>
          </S.TitleTextPass>
          {isEditPass ? <ChangePass setIsEditPass={setIsEditPass} /> : null}
        </S.Title>
        <S.ChangeDate>
          <S.ChangeButton onClick={() => setIsEditEmail(true)}>Редактировать логин</S.ChangeButton>
          <S.ChangeButton onClick={() => setIsEditPass(true)}>Редактировать пароль</S.ChangeButton>
        </S.ChangeDate>
        <S.CourseWrap>
          <S.Title>Мои курсы</S.Title>

          {loading ? (
            <S.ProfList>
              {coursesForUser.map((course, index) => (
                <S.Prof key={index} id={course.id}>
                  <S.CourseName>{course.nameRU}</S.CourseName>
                  <S.ProfCard src={images[index].src} alt="prof_card"></S.ProfCard>

                  <S.ProfButton
                    onClick={() => {
                      handleCard(course);
                    }}>
                    Перейти →
                  </S.ProfButton>
                </S.Prof>
              ))}
            </S.ProfList>
          ) : (
            <S.LoadingCircle></S.LoadingCircle>
          )}
        </S.CourseWrap>
        {isShowForm ? <SelectWorkout setIsShowForm={setIsShowForm}></SelectWorkout> : null}
      </S.Content>
    </S.Wrap>
  );
};

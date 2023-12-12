/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import SelectWorkout from "../../components/SelectWorkout/SelectWorkout";
import { ChangeEmail } from "../../components/ChangeEmail/ChangeEmail";
import { ChangePass } from "../../components/ChangePass/ChangePass";
import { selectUserCourses } from "../../store/selectors/progress";
import { courseList } from "../../store/selectors/coursesNew";
import { userCourses } from "../../Api";
import { emailSelector, passwordSelector } from "../../store/selectors/user";
import { setSelectedCourse } from "../../store/slices/courseWorkoutSlise";
// import { selectCurrentWorkout } from "../../store/slices/workoutsSlice";
// import { selectProfileInfo } from "../../store/slices/userCourseSlice";
import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";
import { CoursesCarts } from "./coursesCarts";

// const courses = [
//   { id: "1", title: "Йога", img: "/img/profCard1.png" },
//   { id: "2", title: "Стретчинг", img: "/img/profCard2.png" },
//   { id: "3", title: "Бодифлекс", img: "/img/profCard5.png" }
// ];

export const PersonalPage = () => {
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditPass, setIsEditPass] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const courses = useSelector(courseList);
  // const courses = useSelector(courseList)
  const dispatch = useDispatch();
  // const [isModalVisible, setModalVisible] = useState(false);
  // const [modal, setModal] = useState(null);
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);
  // const { id } = useSelector(selectUser);
  // const { status } = useSelector(selectProfileInfo);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(userCourses(id));
  //   }, 500);
  // }, [dispatch]);

  // const closeModal = () => {
  //   setModalVisible(false);
  // };
  // const workouts = useSelector(selectCurrentWorkout);
  // if (workouts === null) return null;

  const handleCard = (course) => {
    dispatch(setSelectedCourse(course))
    localStorage.setItem('selectedCourse', JSON.stringify(course))
    setIsShowForm(true)
  }

  return (
    <S.Wrap>
      <S.Content>
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
        <S.ProfList>
            {courses.map((course, index) => (
              <S.Prof key={index} id={course.id}>
                <S.ProfCard src={course.img} alt="prof_card" />

                <S.ProfButton onClick={handleCard}>
                  Перейти →
                </S.ProfButton>
              </S.Prof>
            ))}
          </S.ProfList>
          </S.CourseWrap>

        {isShowForm ? (
          <SelectWorkout setIsShowForm={setIsShowForm}></SelectWorkout>
        ) : null}
        {/* <S.Cards>
            <CoursesCarts courses={Object.values(courses)} button={true} name="select" />
        </S.Cards>
        {isModalVisible && <LayoutModal onClick={closeModal}>{modal}</LayoutModal>} */}
      </S.Content>
    </S.Wrap>
  );
};

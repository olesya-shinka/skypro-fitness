/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import * as S from "./styles";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SelectWorkout from "../../components/SelectWorkout/SelectWorkout";
import { ChangeEmail } from "../../components/ChangeEmail/ChangeEmail";
import { ChangePass } from "../../components/ChangePass/ChangePass";
import { getWorkouts } from "../../Api";
// import { selectUserCourses } from "../../store/selectors/progress";
import { courseList } from "../../store/selectors/coursesNew";
// import { userCourses } from "../../Api";
import { emailSelector, passwordSelector, idSelector } from "../../store/selectors/user";
import { setCurrentCourse, setWorkoutList } from "../../store/slices/courseWorkoutSlise";
// import { selectCurrentWorkout } from "../../store/slices/workoutsSlice";
// import { selectProfileInfo } from "../../store/slices/userCourseSlice";
// import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";
// import { CoursesCarts } from "./coursesCarts";
import { images } from "../../components/images/Images";
import NavigateBlock from "../../components/NavigationBlock/Navi";
import { useParams } from "react-router-dom";

export const PersonalPage = ({ loading }) => {
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditPass, setIsEditPass] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);
  // const [isSuccessModalShow, setIsSuccessModalShow] = useState(false);
  //const [isTrainingModalShow, setIsTrainingModalShow] = useState(false);

  const courses = useSelector(courseList);
  const userId = useSelector(idSelector);
  // const courses = useSelector(courseList)
  const dispatch = useDispatch();
  // const [isModalVisible, setModalVisible] = useState(false);
  // const [modal, setModal] = useState(null);
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);

  //получить курсы юзера
  const filteredCourses = courses.filter((course) => {
    // Проверяем, есть ли пользователь с данным идентификатором в массиве users у курса
    return course.users?.id === userId;
  });
  // const openClosedTrainingModal = () => {
  //   setIsTrainingModalShow(!isTrainingModalShow);
  // };

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
    console.log(course);
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
              {filteredCourses.map((course, index) => (
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
        {/* {isSuccessModalShow && <SuccessModal setIsSuccessModalShow={setIsSuccessModalShow} />}
        {isTrainingModalShow && (
          <LayoutModal onClick={openClosedTrainingModal}>
            <SelectWorkout openClosedTrainingModal={openClosedTrainingModal} />
          </LayoutModal>
        )} */}

        {isShowForm ? <SelectWorkout setIsShowForm={setIsShowForm}></SelectWorkout> : null}
        {/* <S.Cards>
            <CoursesCarts courses={Object.values(courses)} button={true} name="select" />
        </S.Cards>
        {isModalVisible && <LayoutModal onClick={closeModal}>{modal}</LayoutModal>} */}
      </S.Content>
    </S.Wrap>
  );
};

//<S.Course src={images[index].src} alt="prof_card" ><S.CourseName>{course.nameRU}</S.CourseName> </S.Course>

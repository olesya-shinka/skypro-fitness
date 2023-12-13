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
import { userCourses } from "../../Api";
import { selectUser } from "../../store/selectors/user";
// import { selectCurrentWorkout } from "../../store/slices/workoutsSlice";
// import { selectProfileInfo } from "../../store/slices/userCourseSlice";
import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";
import { CoursesCarts } from "./coursesCarts";
import NavigateBlock from "../../components/NavigationBlock/Navi";

// const courses = [
//   { id: "1", title: "Йога", img: "/img/profCard1.png" },
//   { id: "2", title: "Стретчинг", img: "/img/profCard2.png" },
//   { id: "3", title: "Бодифлекс", img: "/img/profCard5.png" }
// ];

export const PersonalPage = () => {
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditPass, setIsEditPass] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  const courses = useSelector(selectUserCourses);
  const dispatch = useDispatch();
  const [isModalVisible, setModalVisible] = useState(false);
  const [modal, setModal] = useState(null);
  const { id } = useSelector(selectUser);
  // const { status } = useSelector(selectProfileInfo);

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch(userCourses(id));
  //   }, 500);
  // }, [dispatch]);

  const closeModal = () => {
    setModalVisible(false);
  };
  // const workouts = useSelector(selectCurrentWorkout);
  // if (workouts === null) return null;

  return (
    <S.Wrap>
      <S.Content>
      <NavigateBlock type="Other" />
        <S.Title>
          <S.TitleText>Мой профиль</S.TitleText>
          <S.TitleTextLogin>
            Логин:<S.Text> sergey.petrov96</S.Text>
          </S.TitleTextLogin>
          {isEditEmail ? <ChangeEmail setIsEditEmail={setIsEditEmail} /> : null}
          <S.TitleTextPass>
            Пароль:<S.Text> 4fkhdj880d</S.Text>
          </S.TitleTextPass>
          {isEditPass ? <ChangePass setIsEditPass={setIsEditPass} /> : null}
        </S.Title>
        <S.ChangeDate>
          <S.ChangeButton onClick={() => setIsEditEmail(true)}>Редактировать логин</S.ChangeButton>
          <S.ChangeButton onClick={() => setIsEditPass(true)}>Редактировать пароль</S.ChangeButton>
        </S.ChangeDate>
        <S.Title>Мои курсы</S.Title>
        <S.Cards>
          {status === "loading"}
          {status === "received" && courses !== null && (
            <CoursesCarts courses={Object.values(courses)} button={true} name="select" />
          )}
        </S.Cards>
        {isModalVisible && <LayoutModal onClick={closeModal}>{modal}</LayoutModal>}
      </S.Content>
    </S.Wrap>
  );
};

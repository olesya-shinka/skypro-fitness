/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { newCourse, userCourses } from "../../Api";
import { selectUser } from "../../store/selectors/user";
import { selectCourses } from "../../store/selectors/course";
import { selectWorkouts } from "../../store/slices/workoutsSlice";
import { selectUserCourses } from "../../store/selectors/progress";
import { getUserWorkouts, doNotAddCourse } from "../../Api";
import { ButtonMain } from "../../components/ButtonMain/ButtonMain";
import { SignInPage } from "../log-in/login";
import { SignUpPage } from "../sign-up/signup";
import * as S from "./descriptionStyle.js";
import { NavigateBlock } from "../../components/NavigationBlock/Navi";
import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";

export default function CourseInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const title = useParams();
  const courseList = useSelector(selectCourses);
  const userCoursesList = useSelector(selectUserCourses);
  const { login } = useSelector(selectUser);

  const allWorkouts = useSelector(selectWorkouts);

  const userWorkouts = getUserWorkouts(allWorkouts, course);

  const isAlreadyAdded = doNotAddCourse(userCoursesList, course);

  const [isModalVisible, setModalVisible] = useState(false);
  const [register, setRegister] = useState(false);
  const { id } = useSelector(selectUser);

  const openCloseModal = () => {
    setModalVisible(!isModalVisible);
    setRegister(false);
  };

  const showSignup = () => {
    setRegister(true);
  };

  const addCourse = () => {
    const idCourse = course[0]._id;
    const name = course[0].name;
    const pathName = course[0].pathName;
    dispatch(
      newCourse({
        id: id,
        idCourse: idCourse,
        name: name,
        pathName: pathName,
        workouts: userWorkouts
      })
    );
    navigate("/profile");
  };

  useEffect(() => {
    if (id !== null) {
      setTimeout(() => {
        dispatch(userCourses(id));
      }, 500);
    }
  }, [dispatch, id]);

  const course = courseList?.filter((course) => course.pathName === title.title);

  return (
    <S.Wrapper>
      <S.Header>
        <NavigateBlock login={login} onClick={openCloseModal} />
      </S.Header>
      <S.Container>
        <S.TitleBox>
          <S.Title>{course[0].name}</S.Title>
        </S.TitleBox>

        <S.ForYou>
          <S.Heading>Подойдет для вас, если:</S.Heading>
          <S.ForYouList>
            {course[0].for_you.reasons.map((reason, i) => (
              <S.ForYouListItem key={i}>{reason}</S.ForYouListItem>
            ))}
          </S.ForYouList>
        </S.ForYou>
        <S.Directions>
          <S.Heading>Направления:</S.Heading>
          <S.DirectionsList>
            {course[0].directions.map((direction, i) => (
              <S.DirectionsListItem key={i}>{direction}</S.DirectionsListItem>
            ))}
          </S.DirectionsList>
        </S.Directions>

        <S.Results>
          <S.ResultsText>{course[0].description}</S.ResultsText>
        </S.Results>

        {!isAlreadyAdded && (
          <S.Application>
            <S.ApplicationText>
              Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления
              и тренера, с которым тренировки принесут здоровье и радость!
            </S.ApplicationText>
            <ButtonMain
              style={{ padding: "10px" }}
              content="Записаться на тренировку"
              onClick={() => {
                login ? addCourse() : openCloseModal();
              }}
            />
          </S.Application>
        )}
      </S.Container>
      {isModalVisible && (
        <LayoutModal onClick={openCloseModal}>
          {!register ? (
            <SignInPage showSignup={showSignup} setModalVisible={setModalVisible} />
          ) : (
            <SignUpPage setModalVisible={setModalVisible} />
          )}
        </LayoutModal>
      )}
    </S.Wrapper>
  );
}

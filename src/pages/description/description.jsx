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
import { courseList } from "../../store/selectors/coursesNew";
import { emailSelector, idSelector } from "../../store/selectors/user";

export default function CourseInfo() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const courseId = useParams().id;
  const params = useParams();
  const courses = useSelector(courseList);
  const email = useSelector(selectUser);
  // const courseList = useSelector(selectCourses);
  // const userCoursesList = useSelector(selectUserCourses);

  // const allWorkouts = useSelector(courseList);

  // const userWorkouts = getUserWorkouts(allWorkouts, course);

  // const isAlreadyAdded = doNotAddCourse(userCoursesList, course);

  const [isModalVisible, setModalVisible] = useState(false);
  const [register, setRegister] = useState(false);
  const userId = useSelector(idSelector);
  console.log(courseId);
  const openCloseModal = () => {
    setModalVisible(!isModalVisible);
    setRegister(false);
  };

  const showSignup = () => {
    setRegister(true);
  };
console.log(courses);

const images = [
  {  id: 1, src: "/img/card-1.png" },
  {  id: 2, src: "/img/card-2.png" },
  {  id: 4, src: "/img/card-3.png" },
  {  id: 0, src: "/img/card-4.png" },
  {  id: 3, src: "/img/card-5.png" }
];
  const course = courses.find((course) => course.id === courseId);
  const image = images.find((image) => image.id === Number(params.id));
  if (course === undefined) {
    console.log(1);
    // navigate("/");
  }

  // const addCourse = () => {
  //   const idCourse = course[0]._id;
  //   const name = course[0].name;
  //   const pathName = course[0].pathName;
  //   dispatch(
  //     newCourse({
  //       id: id,
  //       idCourse: idCourse,
  //       name: name,
  //       pathName: pathName,
  //       workouts: userWorkouts
  //     })
  //   );
  //   navigate("/profile");
  // };

  const addCourse = () => {
    console.log("addCourse");
    // navigate("/PersonalPage");
  };

  // useEffect(() => {
  //   if (id !== null) {
  //     setTimeout(() => {
  //       dispatch(userCourses(id));
  //     }, 500);
  //   }
  // }, [dispatch, id]);

  // const course = courseList?.filter((course) => course.pathName === title.title);
//<S.CourseImg src = {`/img/card-${id  + 1 }.png`}></S.CourseImg>
  return (
    <S.Wrapper>
      <S.Container>
      <NavigateBlock page="Other" />
        <S.TitleBox src = {'/img/card-1.png'}> 
          <S.Title>{course.nameRU}</S.Title>
          <S.CourseImg src = {image.src}></S.CourseImg>
          
        </S.TitleBox>

        <S.ForYou>
          <S.Heading>Подойдет для вас, если:</S.Heading>
          <S.ForYouList>
            {course.fitting.map((reason, i) => (
              <S.ForYouListItem key={i}>{reason}</S.ForYouListItem>
            ))}
          </S.ForYouList>
        </S.ForYou>
        <S.Directions>
          <S.Heading>Направления:</S.Heading>
          <S.DirectionsList>
            {course.directions.map((direction, i) => (
              <S.DirectionsListItem key={i}>{direction}</S.DirectionsListItem>
            ))}
          </S.DirectionsList>
        </S.Directions>

        <S.Results>
          <S.ResultsText>{course.description}</S.ResultsText>
        </S.Results>

        {/* {!isAlreadyAdded && ( */}
        <S.Application>
          <S.ApplicationText>
            Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором направления и
            тренера, с которым тренировки принесут здоровье и радость!
          </S.ApplicationText>
          <ButtonMain
            style={{ padding: "10px" }}
            content="Записаться на тренировку"
            onClick={() => {
              email ? addCourse() : openCloseModal();
            }}
          />
        </S.Application>
        {/* // )} */}
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

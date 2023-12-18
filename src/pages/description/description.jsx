/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ButtonMain } from "../../components/ButtonMain/ButtonMain";
import { SignInPage } from "../log-in/login";
import { SignUpPage } from "../sign-up/signup";
import * as S from "./descriptionStyle.js";
import { NavigateBlock } from "../../components/NavigationBlock/Navi";
import { LayoutModal } from "../../components/LayoutModal/layout/LayoutModal";
import { courseList } from "../../store/selectors/coursesNew";
import { images } from "../../components/images/Images.jsx";
import { Successfully } from "../../components/LayoutModal/SuccessModal/successfully";
import { idSelector } from "../../store/selectors/user";
import { ref, get, update } from "firebase/database";
import { getDatabase } from "firebase/database";


export default function CourseInfo({loading}) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const params = useParams();
  const courseId = useParams().id;

  const courses = useSelector(courseList);

  const [isModalVisible, setModalVisible] = useState(false);
  const [register, setRegister] = useState(false);
  const userId = useSelector(idSelector);
  const openCloseModal = () => {
    setModalVisible(!isModalVisible);
    setRegister(false);
  };

  const showSignup = () => {
    setRegister(true);
  };
  // console.log(courses);
  const course = courses.find((course) => course.id === courseId);
  const image = images.find((image) => image.id === Number(params.id));
  if (course === undefined) {
    // console.log(1);
    // navigate("/");
  }
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   // Заводим таймер
  //   const timerId = setInterval(() => setLoading(!loading), 1000);
  //   // Данная функция вызывается при удалении компонента из DOM
  //   return () => {
  //     // Наводим порядок после удаления компонента
  //     clearInterval(timerId);
  //   };
  // }, []);

  // const addCourse = () => {
  //   console.log("addCourse");
  //   // navigate("/PersonalPage");
  // };

  const [isShown, setIsShown] = useState(false);
const db = getDatabase();
  const addUserToCourse = async () => {
    try {
      //получаем ссылку на объект курса в firebase
      const courseRef = ref(db, `courses/${course._id}`);
      console.log("courseRef", courseRef);

      const snapshot = await get(courseRef);
      const courseFirebase = snapshot.val();

      if (courseFirebase?.users && Array.isArray(courseFirebase.users)) {
        if (courseFirebase.users.includes(userId)) {
          console.log("Пользователь уже записан на курс");
          return;
        }
        courseFirebase.users.push(userId);
      } else {
        courseFirebase.users = [userId];
      }

      // Обновляем объект курса в базе данных
      await update(courseRef, courseFirebase);
      setIsShown(true);
    } catch (error) {
      console.error("Ошибка при добавлении пользователя курс", error);
    }
  };

  // const toggleFIeldset = () => setIsShown(true);

  return (
    <S.Wrapper>
      <S.Container>
        <NavigateBlock page="Other" />
        {loading ? (
          <>
            <S.TitleBox>
              <S.Title>{course.nameRU}</S.Title>
              <S.CourseImg src={image.src}></S.CourseImg>
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
            <S.Application>
              <S.ApplicationText>
                Оставьте заявку на пробное занятие, мы свяжемся с вами, поможем с выбором
                направления и тренера, с которым тренировки принесут здоровье и радость!
              </S.ApplicationText>
              <ButtonMain
                style={{ padding: "10px" }}
                content="Записаться на тренировку"
                onClick={addUserToCourse}
              />
              {isShown && (
                <LayoutModal>
                  <Successfully setIsShown={setIsShown}></Successfully>
                </LayoutModal>
              )}
            </S.Application>
          </>
        ) : (
          <S.LoadingCircle></S.LoadingCircle>
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

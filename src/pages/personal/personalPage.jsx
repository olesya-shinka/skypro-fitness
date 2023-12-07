import * as S from "./styles";
import { useState } from "react";
import SelectWorkout from "../../components/SelectWorkout/SelectWorkout";
import { ChangeEmail } from "../../components/ChangeEmail/ChangeEmail";
import { ChangePass } from "../../components/ChangePass/ChangePass";
// import Header from "../../components/Header/Header.js"
import HeaderProfile from "../../components/Header/HeaderPersonal";

const courses = [
  { id: "1", title: "Йога", img: "/img/profCard1.png" },
  { id: "2", title: "Стретчинг", img: "/img/profCard2.png" },
  { id: "3", title: "Бодифлекс", img: "/img/profCard5.png" },
];

export const PersonalPage = () => {
  const [isEditEmail, setIsEditEmail] = useState(false);
  const [isEditPass, setIsEditPass] = useState(false);
  const [isShowForm, setIsShowForm] = useState(false);

  return (
    <S.Wrap>
      <HeaderProfile />
      <S.Content>
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
          <S.ChangeButton onClick={() => setIsEditEmail(true)}>
            Редактировать логин
          </S.ChangeButton>
          <S.ChangeButton onClick={() => setIsEditPass(true)}>
            Редактировать пароль
          </S.ChangeButton>
        </S.ChangeDate>
        <S.CourseWrap>
          <S.TitleCourse>Мои курсы</S.TitleCourse>
          <S.ProfList>
            {courses.map((course) => (
              <S.Prof key={course.id}>
                <S.ProfCard src={course.img} alt="prof_card" />

                <S.ProfButton onClick={() => setIsShowForm(true)}>
                  Перейти →
                </S.ProfButton>
              </S.Prof>
            ))}
          </S.ProfList>
        </S.CourseWrap>

        {isShowForm ? (
          <SelectWorkout setIsShowForm={setIsShowForm}></SelectWorkout>
        ) : null}
      </S.Content>
    </S.Wrap>
  );
};

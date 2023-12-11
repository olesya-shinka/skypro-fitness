import { useEffect, useState } from 'react';
import { Courses } from '../../components/Courses/Courses';
import * as S from  './MainStyle';
import { getCourses } from '../../Api';
import { useDispatch, useSelector } from 'react-redux';
import { getPageCourses } from '../../store/slices/coursesSlice';
import { PageCoursesSelector } from '../../store/selectors/PageCourses';
//import { PageCoursesSelector } from '../../store/selectors/PageCourses';
export const MainPage = () =>{
    const [courses, setСourses] = useState([]);
    const dispatch = useDispatch();
    //const courses = useSelector(PageCoursesSelector) //- ошибка undefine
    

    useEffect(() => {
        getCourses()
          .then((data) => {
           // console.log(data);
            setСourses(data)
          ///dispatch(getPageCourses(data))
          })
         .catch((error) => {
           console.log(error.message);
         })

      }, [])
const ButtonUp = () => {
    window.scrollTo({ 
        top: 0,  
        behavior: 'smooth'
      }); 
}

    return (
        <>
        <S.GlobalStyle />
    <S.Container>
        <S.Main>
            <S.Header>
                <S.Text>
                <S.Title >Онлайн-тренировки для занятий дома</S.Title>
                <S.Slogan>Начните заниматься спортом и улучшите качество жизни</S.Slogan>
                </S.Text>
                <S.SaleSticker>
                
                    <img src ='/img/saleSticker.svg' alt ='Sale Stiker'></img>
                
                </S.SaleSticker>
                
            </S.Header>

            <Courses courses = {courses}/>

            <S.ButtonUp onClick={ButtonUp}>Наверх&#129045;</S.ButtonUp>
    

        </S.Main>  
    </S.Container>
        </>


    )
}
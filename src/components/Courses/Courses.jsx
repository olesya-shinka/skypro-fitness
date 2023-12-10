import * as S from "./Style";
export const Courses = ({courses}) => {
    //для проверки гет запроса

    const images = [
      { src: '/img/profCard1.png' },
      { src: '/img/profCard2.png' },
      { src: '/img/profCard3.png' },
      { src: '/img/profCard4.png' },
      { src: '/img/profCard5.png' },
      ];

return (
      <S.Courses  >
         {images.map((image) => <S.Link to='/CourseInfo/:id'><S.CourseImg src = {image.src}></S.CourseImg></S.Link>)}
      </S.Courses>

)


}
   
// {courses?.sort((a, b) => a.order - b.order).map((course) => 
//   <S.Link to='/CourseInfo/:id'>
//   <S.Course  key={course.id}   >
//    <S.CourseName>{course.nameRU}</S.CourseName>
//     </S.Course>
//     </S.Link>
    
//     )}
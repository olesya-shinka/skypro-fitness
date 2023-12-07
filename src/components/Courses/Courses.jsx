import { useEffect, useState } from "react";
import * as S from "./Style";
import { getCourses,  getCourses2,  getWorkouts } from "../../Api";
export const Courses = ({courses}) => {
    //для проверки гет запроса

    const images = [
      { src: '/img/card-1.png' },
      { src: '/img/card-2.png' },
      { src: '/img/card-3.png' },
      { src: '/img/card-4.png' },
      { src: '/img/card-5.png' },
      ];

return (
    <S.Courses  >
     
    {courses?.sort((a, b) => a.order - b.order).map((course) => <S.Course  key={course.id}   >
      <S.CourseName>{course.nameRU}</S.CourseName>
      
      </S.Course>)}
      {images.map((image) => <S.CourseImg src = {image.src}></S.CourseImg>)}
    </S.Courses>

)


}

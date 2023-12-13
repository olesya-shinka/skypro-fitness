/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import * as S from "./Style";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
export const Courses = ({ courses }) => {
  const images = [
    { src: "/img/card-1.png" },
    { src: "/img/card-2.png" },
    { src: "/img/card-3.png" },
    { src: "/img/card-4.png" },
    { src: "/img/card-5.png" }
  ];
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const itemsPerPage = 6; //количество элементов на странице
  const offset = currentPage * itemsPerPage;
  const paginatedData = courses.slice(offset, offset + itemsPerPage);
  return (
    <>
      <S.Courses>
        {paginatedData
          ?.sort((a, b) => a.order - b.order)
          .map((course, index) => (
            <S.Link to={`/CourseInfo/${course.id}`} key={course.key}>
              <S.Course image={images[index].src}>
                <S.CourseName>{course.nameRU}</S.CourseName>
              </S.Course>
            </S.Link>
          ))}
      </S.Courses>

      <ReactPaginate
        previousLabel={"Предыдущая"}
        nextLabel={"Следующая"}
        pageCount={Math.ceil(images.length / itemsPerPage)} //общее количество страниц
        marginPagesDisplayed={2} //количество страниц, которые должны быть видны по бокам от текущей страницы
        pageRangeDisplayed={5} //количество видимых страниц внутри компонента
        onPageChange={handlePageChange} //функция-обработчик, которая будет вызываться при каждом клике на страницу
        containerClassName={"pagination"} //класс для обертки пагинации
        activeClassName={"active"} //класс для активной страницы
      />
    </>
  );
};

//{images.map((image) => <S.Link to='/CourseInfo/:id'><S.CourseImg src = {image.src}></S.CourseImg></S.Link>)}
// {courses?.sort((a, b) => a.order - b.order).map((course, id) =>
//       <S.Link to='/CourseInfo/:id'>
//       <S.Course  key={id}   >
//        <S.CourseName>{course.nameRU}</S.CourseName>
//        <S.CourseImg src = {`/img/card-${id  + 1 }.png`}></S.CourseImg>
//         </S.Course>
//         </S.Link>

//         )}

// {courses?.sort((a, b) => a.order - b.order).map((course, index) =>

//       <S.Link to='/CourseInfo/:id'>
//       <S.Course  key={index} image = {images[index] + 1}  >

//        <S.CourseName>{course.nameRU}</S.CourseName>
//         </S.Course>
//         </S.Link>

//         )}

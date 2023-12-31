import * as S from "./Style";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { images } from "../images/Images";
export const Courses = ({ courses }) => {
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

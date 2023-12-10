/* eslint-disable prettier/prettier */
export const selectCoursesInfo = (state) => ({
  status: state.courses.status,
  error: state.courses.error,
  qty: state.courses.list.length
});

export const selectCourses = (state) => state.courses.list;
export default selectCourses;

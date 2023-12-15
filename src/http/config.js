/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const databaseURL = process.env.REACT_APP_FIREBASE_DATABASEURL;

export const BASE_URL = `${databaseURL}`;

//https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/courses
export const COURSES = `${databaseURL}/courses.json`;

//https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/workouts
export const WORKOUTS = `${databaseURL}/workouts.json`;

//export const USER_LOGIN = (id) => `/users/${id}.json?print=pretty`;
//export const USER_PASSWORD = (id) => `/users/${id}/password.json?print=pretty`;

// export const USER_COURSES = (id) => `/users/${id}/courses.json?print=pretty`;
// export const ADD_COURSE = (id) => `/users/${id}/courses.json?print=pretty`;

// export const ADD_PROGRESS = (id, courseId, workoutIndex) =>
//   `/users/${id}/courses/${courseId}/workouts/${workoutIndex}/.json?print=pretty`;

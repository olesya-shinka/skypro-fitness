/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const databaseURL = process.env.REACT_APP_FIREBASE_DATABASEURL;

export const BASE_URL = `${databaseURL}`;

export const COURSES = "/courses.json?print=pretty";

export const WORKOUTS = "/workouts.json?print=pretty";

export const USER_LOGIN = (id) => `/users/${id}.json?print=pretty`;
export const USER_PASSWORD = (id) => `/users/${id}/password.json?print=pretty`;

export const USER_COURSES = (id) => `/users/${id}/courses.json?print=pretty`;
export const ADD_COURSE = (id) => `/users/${id}/courses.json?print=pretty`;

export const ADD_PROGRESS = (id, courseId, workoutIndex) =>
  `/users/${id}/courses/${courseId}/workouts/${workoutIndex}/.json?print=pretty`;

/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
const databaseURL = process.env.REACT_APP_FIREBASE_DATABASEURL;

export const BASE_URL = `${databaseURL}`;

//https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/courses
export const COURSES = `${databaseURL}/courses.json`;

//https://fitness-pro-d307e-default-rtdb.europe-west1.firebasedatabase.app/workouts
export const WORKOUTS = `${databaseURL}/workouts.json`;

export const ADD_PROGRESS = (workoutId) => `${databaseURL}/progress/${workoutId}`;

/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import { AppRoutes } from "./routes.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalStyle from "./global";
import { getCourses, getWorkouts } from "./Api.js";
import {
  setCourseList,
  setWorkoutList,
  setPracticeProgress
} from "./store/slices/courseWorkoutSlise.js";

import "./firebase";
import { initializeUserFromLocalStorage } from "./store/slices/userSlice.js";
import { waitFor } from "@testing-library/react";

function App() {
  // const [user, setUser] = useState(true);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // При монтировании компонента, диспетчеризуем действие для инициализации из localStorage
    dispatch(initializeUserFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    Promise.all([getCourses(), getWorkouts()])
      .then(([coursesData, workoutsData, progressData]) => {
        dispatch(setCourseList(coursesData));
        dispatch(setWorkoutList(workoutsData));
        dispatch(setPracticeProgress(progressData));
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(true));
  }, []);

  return (
    <div>
      <GlobalStyle />
      <AppRoutes loading={loading} setLoading={setLoading} />
    </div>
  );
}
export default App;

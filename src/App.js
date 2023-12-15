/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import { AppRoutes } from "./routes.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalStyle from "./global";
import { getCourses } from "./Api.js";
import { setCourseList } from "./store/slices/courseWorkoutSlise.js";

import "./firebase";
import { initializeUserFromLocalStorage } from "./store/slices/userSlice.js";

function App() {
  // const [user, setUser] = useState(true);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // При монтировании компонента, диспетчеризуем действие для инициализации из localStorage
    dispatch(initializeUserFromLocalStorage());
  }, [dispatch]);

  useEffect(() => {
    getCourses()
      .then((data) => {
        // console.log(data);
        // setСourses(data);
        dispatch(setCourseList(data));
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <GlobalStyle />
      <AppRoutes loading={loading} setLoading={setLoading}/>
    </div>
  );
}
export default App;

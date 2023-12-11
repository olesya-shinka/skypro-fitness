// import './App.css';
// import CourseInfo from './pages/description/description.js';
// import SignInPage from './pages/log-in/login.js';
import { AppRoutes } from "./routes.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import GlobalStyle from "./global";

import "./firebase";
import { initializeUserFromLocalStorage } from "./store/slices/userSlice.js";

function App() {
  const [user, setUser] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    // При монтировании компонента, диспетчеризуем действие для инициализации из localStorage
    dispatch(initializeUserFromLocalStorage());
  }, [dispatch]);

  return (
    <div>
      <GlobalStyle />
      <AppRoutes user={user} />
    </div>
  );
}
export default App;

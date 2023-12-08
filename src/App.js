// import './App.css';
import CourseInfo from './pages/description/description.js';
import SignInPage from './pages/log-in/login.js';
import SignUpPage from './pages/sign-up/signup.js';
import { PersonalPage } from './pages/personal/personalPage.jsx';
import { MainPage } from './pages/mainPage/Main.js';
import { AppRoutes } from './routes.js';
import WorkoutPage from "./pages/Workout/WorkoutPage";
import { useState } from "react";
import { GlobalStyle } from "./App.style";
import './firebase';
function App() {
  const [user, setUser] = useState(true);

  return (
    <>
     <GlobalStyle />
     {/* <WorkoutPage /> */}

     {/* <CourseInfo/> */}
     {/* <SignInPage/> */}
     <AppRoutes user={user} />
     {/* <PersonalPage /> */}
     {/* <MainPage /> */}
   
     
    </>
  );
}
export default App;


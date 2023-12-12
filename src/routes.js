/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage/Main";
import CourseInfo from "./pages/description/description";
import { PersonalPage } from "./pages/personal/personalPage";
import SignUpPage from "./pages/sign-up/signup";
import WorkoutPage from "./pages/Workout/WorkoutPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import SignInPage from "./pages/log-in/login";
import { useSelector } from "react-redux";
import { emailSelector } from "./store/selectors/user";

export const AppRoutes = () => {
  const email = useSelector(emailSelector)

    return (
      <Routes>
        <Route path="/Login" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route element={<ProtectedRoute isAllowed={Boolean(email)} />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/CourseInfo/:id" element={<CourseInfo />} />
          <Route path="/PersonalPage/:id" element={<PersonalPage />} />
          <Route path="/WorkoutPage/:id" element={<WorkoutPage />} />
      </Route>
  

        
      </Routes>
    );
  };
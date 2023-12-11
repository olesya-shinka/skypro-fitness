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

export const AppRoutes = ({ user }) => {
  return (
    <Routes>
      <Route path="Login" element={<SignInPage />} />
      <Route path="SignUp" element={<SignUpPage />} />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<MainPage />} />
        <Route path="CourseInfo" element={<CourseInfo />} />
        <Route path="PersonalPage" element={<PersonalPage />} />
        <Route path="/workoutpage" element={<WorkoutPage />} />
      </Route>
    </Routes>
  );
};

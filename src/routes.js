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
import NotFound from "./pages/notFound/NotFound";
import MainBlock from "./components/MainBlock/MainBlock";

export const AppRoutes = () => {
  const email = useSelector(emailSelector);
  const isAllowed = Boolean(email);
  console.log(isAllowed);
  return (
    <Routes>
      <Route path="/Login" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/" element={<MainBlock />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/CourseInfo/:id" element={<CourseInfo />} />
        <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
          <Route path="/PersonalPage" element={<PersonalPage />} />
          <Route path="/WorkoutPage/:id" element={<WorkoutPage />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

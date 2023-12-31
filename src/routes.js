import { Routes, Route } from "react-router-dom";
import { MainPage } from "./pages/mainPage/Main";
import CourseInfo from "./pages/description/description";
import { PersonalPage } from "./pages/personal/personalPage";
import SignUpPage from "./pages/sign-up/signup";
import WorkoutPage from "./pages/Workout/WorkoutPage";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import SignInPage from "./pages/log-in/login";
import NotFound from "./pages/notFound/NotFound";

export const AppRoutes = ({ loading }) => {
  return (
    <Routes>
      <Route path="/Login" element={<SignInPage />} />
      <Route path="/SignUp" element={<SignUpPage />} />
      <Route path="/" element={<MainPage loading={loading} />} />
      <Route path="/CourseInfo/:id" element={<CourseInfo loading={loading} />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/PersonalPage" element={<PersonalPage loading={loading} />} />
        <Route path="/WorkoutPage/:workoutId" element={<WorkoutPage loading={loading} />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

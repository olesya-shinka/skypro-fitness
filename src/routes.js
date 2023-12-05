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
        <Route path="/" element={<MainPage />} />
        <Route path="/CourseInfo" element={<CourseInfo />} />
        <Route path="/Login" element={<SignInPage />} />
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/PersonalPage" element={
          <ProtectedRoute isAllowed={Boolean(user)}>
            <PersonalPage />
          </ProtectedRoute>
        }
      />
    
        <Route path="/WorkoutPage" element={<WorkoutPage />} />
        
      </Routes>
    );
  };
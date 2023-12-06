
// import './App.css';
// import CourseInfo from './pages/description/description.js';
// import SignInPage from './pages/log-in/login.js';
import SignUpPage from './pages/sign-up/signup.js';
import { AppRoutes } from './routes.js';
import { useState } from "react";
function App() {
  const [user, setUser] = useState(true);

  return (
    <div>
     {/* <CourseInfo/> */}
     {/* <SignInPage/> */}
     <AppRoutes user={user} />
   
     
    </div>
  );
}
export default App;


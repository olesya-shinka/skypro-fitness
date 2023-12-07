
// import './App.css';
// import CourseInfo from './pages/description/description.js';
// import SignInPage from './pages/log-in/login.js';
import { AppRoutes } from './routes.js';
import { useState } from "react";
import './firebase';
function App() {
  const [user, setUser] = useState(true);

  return (
    <div>
     <AppRoutes user={user} />
     
    </div>
  );
}
export default App;


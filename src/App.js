/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */

import { AppRoutes } from "./routes.js";
import { useState } from "react";
import React from "react";

function App() {
  const [user, setUser] = useState(true);

  return (
    <div>
      <AppRoutes user={user} />
    </div>
  );
}
export default App;

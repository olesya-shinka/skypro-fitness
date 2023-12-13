/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = ({  redirectPath = "/Login", isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

 return  <Outlet />
};


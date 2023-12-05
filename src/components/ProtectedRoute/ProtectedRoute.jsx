import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({  redirectPath = "/", isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
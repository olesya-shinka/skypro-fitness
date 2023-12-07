import { Navigate, Outlet } from "react-router-dom";
import MainBlock from "../MainBlock/MainBlock";

export const ProtectedRoute = ({  redirectPath = "/Login", isAllowed }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return  <MainBlock ><Outlet /></MainBlock> ;
};
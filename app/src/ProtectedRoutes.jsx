import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useAuth = () => {
  const { user } = { loggedIn: false};

  // call api here


  return true;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? (<Outlet />) : (<Navigate to="/"/>);
};

export default ProtectedRoutes;
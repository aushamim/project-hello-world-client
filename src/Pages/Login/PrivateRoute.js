import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  let location = useLocation();

  if (isLoading) {
    return <h1>Some loading pic wilbe here</h1>;
  }
  if (user.email) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;

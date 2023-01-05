import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ Children }) => {
  console.log("tokennnnnnn", Children);
  let auth = window.localStorage.getItem("token");
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return Children;
};

export default RequireAuth;

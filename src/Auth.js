import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ Children }) => {
  let auth = window.localStorage.getItem("token");
  console.log("tokennnnnnn", auth);
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return Children;
};

export default RequireAuth;

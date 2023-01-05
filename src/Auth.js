import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = (props) => {
  const navigate = useNavigate();
  let Children = props.Children;
  let auth = localStorage.getItem("token");

  useEffect(() => {
    if (!auth) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Children />
    </>
  );
};

export default RequireAuth;

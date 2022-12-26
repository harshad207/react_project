import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>Page not found!!!</h1>
      <NavLink to="/" style={{ border: "none" }}>
        <button className="btn btn-outline-info ml-5">go to home </button>
      </NavLink>
    </div>
  );
};

export default Error;

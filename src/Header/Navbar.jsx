/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../src/images/logo192.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="main_div">
          <div className="ml-5 d-flex">
            <li className="right" id="lii">
              <img src={logo} alt="logo" id="img" />
            </li>
            <li className="nav-item">
              <h4 className=" text-light mt-2">React.js</h4>
            </li>
          </div>
          <ul className="right">
            <li className="nav-item">
              <NavLink to="/" activeClassName="active" exact id="lii">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" activeClassName="active" exact id="liji">
                about
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" activeClassName="active" exact id="ljii">
                contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" activeClassName="active" exact id="ljii">
                Sign in
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../src/images/logo192.png";
import "./Navbar.css";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useApi } from "../context/useApi";
import { Toast } from "primereact/toast";

const Navbar = () => {
  const { apiState } = useApi();
  const navigate = useNavigate();
  let auth = window.localStorage.getItem("token");
  let userName = JSON.parse(window.localStorage.getItem("userData"));
  console.log("apiState", apiState);
  console.log("auth header", auth);

  const logout = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
    Toast.current.show({
      severity: "success",
      summary: "Success Message",
      detail: "logout successfully",
    });
    setTimeout(() => {
      Toast.current.clear();
      navigate("/");
    }, 1000);
  };
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
            <ul className="right">
              <li className="nav-item mt-2">
                <NavLink
                  to="/user"
                  activeclassname="active"
                  exact
                  id="lii"
                  className="text-light"
                >
                  User
                </NavLink>
              </li>
            </ul>
          </div>
          <ul className="right">
            <li className="nav-item">
              <NavLink to="/" activeclassname="active" exact id="lii">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/about" activeclassname="active" exact id="lii">
                about
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" activeclassname="active" exact id="lii">
                contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavDropdown
                title={userName ? userName?.name : "profile"}
                id="lii"
                activeclassname="active"
                exact
              >
                <NavDropdown.Item eventKey="">
                  {auth ? (
                    <li className="nav-item">
                      <Link
                        // to="/user"
                        // activeclassname="active"
                        exact
                        id="lii"
                        onClick={logout}
                      >
                        logout
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <NavLink
                        to="/login"
                        activeclassname="active"
                        exact
                        id="lii"
                      >
                        login in
                      </NavLink>
                    </li>
                  )}
                </NavDropdown.Item>
              </NavDropdown>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

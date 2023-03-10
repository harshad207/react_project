// import "./App.css";
import React, { Children, useRef } from "react";
import Navbar from "./Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Register from "./pages/register/Register";
import AddUser from "./pages/users/AddUser";
import UserTable from "./pages/users/UserTable";
import { Toast } from "primereact/toast";
import Auth from "./Auth";

function App() {
  return (
    <>
      <Navbar />
      <Toast ref={Toast} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />

        <Route exact path="/user" element={<Auth Children={UserTable} />} />
        <Route exact path="/addUser" element={<Auth Children={AddUser} />} />
        <Route exact path="/edit/:id" element={<Auth Children={AddUser} />} />
        <Route element={Error} />
      </Routes>
    </>
  );
}

export default App;

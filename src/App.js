// import "./App.css";
import React, { useRef } from "react";
import Navbar from "./Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Register from "./pages/register/Register";
import User from "./pages/users/User";
// import { Toast } from "primereact/toast";

function App() {
  // const toast = useRef(null);
  return (
    <>
      {/* <Toast ref={toast}></Toast> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/user" element={<User />} />
        <Route element={Error} />
      </Routes>
    </>
  );
}

export default App;

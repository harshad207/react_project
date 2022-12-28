// import "./App.css";
import React from "react";
import Navbar from "./Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Error from "./pages/error/Error";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact="true" path="/" element={<Home />} />
        <Route exact="true" path="/login" element={<Login />} />
        <Route exact="true" path="/register" element={<Register />} />
        <Route exact="true" path="/about" element={<About />} />
        <Route exact="true" path="/contact" element={<Contact />} />
        <Route element={Error} />
      </Routes>
    </>
  );
}

export default App;

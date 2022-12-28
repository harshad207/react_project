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

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route element={Error} />
      </Routes>
    </>
  );
}

export default App;

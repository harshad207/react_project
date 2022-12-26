// import "./App.css";
import React from "react";
import Navbar from "./Header/Navbar";
import { Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;

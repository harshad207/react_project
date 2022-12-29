import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ApiProvider from "./context/apiContext";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApiProvider>
    <Toast />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApiProvider>
);

reportWebVitals();

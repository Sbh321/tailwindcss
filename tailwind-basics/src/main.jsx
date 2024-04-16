import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Navigation from "./components/Navigation.jsx";
import Navbar from "./components/Navbar.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navigation />
  </React.StrictMode>
);

import React from "react";
import { createRoot } from "react-dom/client";
import "./style/index.css";
// import App from "./App.jsx";
import Example from "./component/example.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);

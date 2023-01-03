import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./App";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

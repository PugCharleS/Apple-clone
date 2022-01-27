import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getFirestoreApp } from "./firebase/dbConfig";

import "./index.css";

getFirestoreApp();

ReactDOM.render(
  <React.StrictMode>
    <App className="container" />,
  </React.StrictMode>,
  document.getElementById("root")
);

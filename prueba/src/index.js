import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getFirestoreApp } from "./firebase/dbConfig";

import "./index.css";

getFirestoreApp();

ReactDOM.render(<App className="container" />, document.getElementById("root"));

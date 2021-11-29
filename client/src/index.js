import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import FirebaseProvider from "./context/FirebaseContext";

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <Router>
        <App />
      </Router>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

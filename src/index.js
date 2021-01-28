import React from "react";
import ReactDOM from "react-dom";

import App from "./components/App";

import "sanitize.css";
import "sanitize.css/forms.css";
import "sanitize.css/typography.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

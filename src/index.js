import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
import GoogleSpreadsheetData from "./GoogleSpreadsheetData";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <GoogleSpreadsheetData />
  </React.StrictMode>
);

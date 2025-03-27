import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/App.js";
import "C:/Vedashat/AV's Docs/Projects/Elixir_The blood donors app/src/styles.css"; // Import global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
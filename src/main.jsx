import React from "react";
import ReactDOM from "react-dom/client";
import { ContextProvider } from "./helpers/Context";
import App from "./App.jsx";
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./HomePage.jsx";
import { LanguageProvider } from "./lib/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  </React.StrictMode>
);

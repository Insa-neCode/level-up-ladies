import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * Einstiegspunkt der zweiten Landingpage (/frauen/).
 * Alles, was diese Seite braucht, liegt in diesem Ordner.
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

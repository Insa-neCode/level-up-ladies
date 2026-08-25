import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Datenschutz from "./Datenschutz.jsx";
import "../src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Datenschutz />
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Impressum from "./Impressum.jsx";
import "../src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Impressum />
  </StrictMode>
);

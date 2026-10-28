import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import KiTransparenz from "./KiTransparenz.jsx";
import "../src/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KiTransparenz />
  </StrictMode>
);

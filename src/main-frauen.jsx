import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ContentProvider } from "./data/ContentContext.jsx";
import * as content from "./data/content-frauen.js";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContentProvider value={content}>
      <App aboutVariant="team" />
    </ContentProvider>
  </StrictMode>
);

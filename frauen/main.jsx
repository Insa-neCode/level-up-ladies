import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/App.jsx";
import { ContentProvider } from "../src/data/ContentContext.jsx";
import AboutTeam from "./AboutTeam.jsx";
import * as content from "./content.js";
import "../src/index.css";

/**
 * Einstiegspunkt der zweiten Landingpage (/frauen/).
 *
 * Sie benutzt dieselbe Seiten-Shell und dieselben Komponenten wie Seite 1 —
 * getauscht werden nur die Inhalte (content.js in diesem Ordner) und die
 * Ueber-Sektion ("Wer sind wir?" statt "Wer bin ich?").
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContentProvider value={content}>
      <App AboutSection={AboutTeam} />
    </ContentProvider>
  </StrictMode>
);

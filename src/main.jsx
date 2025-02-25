import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import "@mantine/core/styles.css";
import "./styles/main.css";

import { DirectionProvider, MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DirectionProvider>
      <MantineProvider>
        <App />
      </MantineProvider>
    </DirectionProvider>
  </StrictMode>
);

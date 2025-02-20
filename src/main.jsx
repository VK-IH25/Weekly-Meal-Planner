import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider, createTheme } from "@mantine/core";

const theme = createTheme({
  fontFamily: "Montserrat",
  fontFamilyMonospace: "Monaco, Courier, monospace",
  headings: { fontFamily: "Montserrat" },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider
      defaultColorScheme="light"
      theme={theme}
      withGlobalStyles
      withNormalizeCSS
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>
);

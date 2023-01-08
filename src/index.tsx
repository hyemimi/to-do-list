import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { darktheme } from "./theme";
import { ThemeProvider } from "styled-components";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darktheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

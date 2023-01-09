import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { darktheme } from "./theme";
import { ThemeProvider } from "styled-components";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <ThemeProvider theme={darktheme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  </React.StrictMode>
);

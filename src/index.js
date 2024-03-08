import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#1B87F0",
    black: "#050D12",
    grey_action: "#050D12",
    grey_bg: "#EEEEEE",
    grey_text: "#989CA0",
    white: "#FFFFFF",
    red: "#DF1010",
    succes: "#31C664",
  },
  fontSize: {
    h1: "48px",
    h2: "40px",
    h3: "32px",
    h4: "24px",
    h5: "16px",
    h6: "14px",
    p1: "18px",
    p2: "16px",
    p3: "14px",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme({
  palette: {
    neutral: {
      main: "#eee",
      contrastText: "#ddd",
    },
    greyShadow: {
      main: "#11111180",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

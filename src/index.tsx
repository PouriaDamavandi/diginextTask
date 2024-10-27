import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MainContainer from "./components/layout/mainLayout/mainContainer/mainContainer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MainContainer>
    <App />
  </MainContainer>
);

reportWebVitals();

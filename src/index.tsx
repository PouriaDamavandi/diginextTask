import ReactDOM from "react-dom/client";
import App from "./App";
import MainContainer from "./components/layout/mainLayout/mainContainer/mainContainer";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MainContainer>
    <App />
  </MainContainer>
);

reportWebVitals();

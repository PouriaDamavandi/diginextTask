import ReactDOM from "react-dom/client";
import App from "./App";
import MainLayout from "./components/layout/mainLayout/mainLayout";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <MainLayout>
    <App />
  </MainLayout>
);

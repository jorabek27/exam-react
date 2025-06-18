import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Root elementni tanlab, React ilovasini ishga tushurish
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Router orqali marshrutlash qo‘shiladi */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

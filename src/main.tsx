import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.tsx";
import "./styles/index.css";
import { TokenProvider } from "./utils/context/token.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TokenProvider>
      <App />
    </TokenProvider>
  </React.StrictMode>
);

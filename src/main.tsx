// main = the starting point: puts the whole app on the page
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import AppProviders from "./AppProviders";

// Find the empty "root" div in index.html and draw the app inside it
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {" "}
    {/* warns me about mistakes while developing */}
    <AppProviders>
      {" "}
      {/* wraps App so every component can reach the shared boxes */}
      <App />
    </AppProviders>
  </StrictMode>,
);

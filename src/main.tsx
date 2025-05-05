import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuProvider } from "./context/MenuContext.tsx";
import "./styles/index.scss";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuProvider>
      <App />
    </MenuProvider>
  </StrictMode>
);

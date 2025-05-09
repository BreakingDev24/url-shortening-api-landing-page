import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuProvider } from "./context/MenuContext.tsx";
import "./styles/index.scss";
import App from "./App.tsx";
import { LinkProvider } from "./context/ShortenLinksContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuProvider>
      <LinkProvider>
        <App />
      </LinkProvider>
    </MenuProvider>
  </StrictMode>
);

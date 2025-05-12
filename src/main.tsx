import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MenuProvider } from "./context/MenuContext.tsx";
import "./styles/index.scss";
import App from "./App.tsx";
import { LinkProvider } from "./context/ShortenLinksContext.tsx";
import { InputRefProvider } from "./context/InputRefContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MenuProvider>
      <LinkProvider>
        <InputRefProvider>
          <App />
        </InputRefProvider>
      </LinkProvider>
    </MenuProvider>
  </StrictMode>
);

import { createContext, ReactNode, useContext, useState } from "react";

interface LinkContextType {
  savedLinks: { userInput: string; shortned: string }[];
  setSavedLinks: React.Dispatch<
    React.SetStateAction<{ userInput: string; shortned: string }[]>
  >;
  error: string;
  setError: React.Dispatch<React.SetStateAction<string>>;
}

const ShortenLinkContext = createContext<LinkContextType | undefined>(
  undefined
);

export function LinkProvider({ children }: { children: ReactNode }) {
  const [savedLinks, setSavedLinks] = useState<
    { userInput: string; shortned: string }[]
  >([]);
  const [error, setError] = useState("");
  return (
    <ShortenLinkContext.Provider
      value={{ savedLinks, setSavedLinks, error, setError }}
    >
      {children}
    </ShortenLinkContext.Provider>
  );
}

export function useLinkContext() {
  const context = useContext(ShortenLinkContext);
  if (!context) {
    throw new Error("useLinkContext must be used within a LinkProvider");
  }
  return context;
}

import { createContext, ReactNode, useContext, useRef } from "react";

interface InputRefContextType {
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleClick: () => void;
}

const InputRefContext = createContext<InputRefContextType | undefined>(
  undefined
);

export function InputRefProvider({ children }: { children: ReactNode }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!inputRef) return;

    inputRef.current?.focus();
  };

  return (
    <InputRefContext.Provider value={{ inputRef, handleClick }}>
      {children}
    </InputRefContext.Provider>
  );
}

export function useInputRef() {
  const context = useContext(InputRefContext);
  if (!context) {
    throw new Error("useInputRef must be used within a InputRefProvider");
  }
  return context;
}

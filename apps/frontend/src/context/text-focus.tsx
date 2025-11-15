"use client";

import React, { createContext, useContext, useEffect, useRef } from "react";

interface TextFocusContextProps {
  inputAreaRef: React.RefObject<HTMLTextAreaElement | null> | null;
}

const TextFocusContext = createContext<TextFocusContextProps>({
  inputAreaRef: null,
});

export const TextFocusContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const inputAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const textFocusHandler = (e: KeyboardEvent) => {
    if (
      e.key === "Meta" ||
      e.key === "c" ||
      e.key === "v" ||
      e.key === "Control"
    ) {
      return;
    }
    inputAreaRef.current?.focus();
  };

  useEffect(() => {
    window.addEventListener("keydown", textFocusHandler);

    return () => {
      window.removeEventListener("keydown", textFocusHandler);
    };
  }, []);
  return (
    <TextFocusContext.Provider value={{ inputAreaRef }}>
      {children}
    </TextFocusContext.Provider>
  );
};

export const useTextFocusContext = () => {
  const context = useContext(TextFocusContext);
  if (!context) throw new Error("text focus context not found");
  return context;
};

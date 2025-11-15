"use client";

import { ReduxProvider } from "@/redux/Provider";
import { TextFocusContextProvider } from "@/context/text-focus";
import { Toaster } from "sonner";
import { Navbar } from "@/components-our";
import { Footer } from "@/components-our";

export const ClientProviders = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <ReduxProvider>
      <TextFocusContextProvider>
        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-right" />
      </TextFocusContextProvider>
    </ReduxProvider>
  );
};

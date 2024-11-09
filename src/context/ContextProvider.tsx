import React from "react";
import QueryProvider from "./QueryProvider";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>;
};

export default ContextProvider;

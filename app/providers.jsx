"use client";

import { SessionProvider } from "next-auth/react";
import { ChakraProvider, CircularProgress, Center } from "@chakra-ui/react";
import theme from "./styles/theme";

export const NextAuthProvider = ({ children }) => {
  return (
    <SessionProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </SessionProvider>
  );
};

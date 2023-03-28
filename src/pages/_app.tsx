import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "#FFFFFF",
      },
    }),
  },
  fonts: {
    body: "Rubik, sans-serif",
    heading: "Rubik, sans-serif",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

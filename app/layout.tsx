import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./fonts";
import { ColorModeScript } from "@chakra-ui/react";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fonts.inter.className}>
      <body>
        <ColorModeScript initialColorMode={"light"} />

        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}

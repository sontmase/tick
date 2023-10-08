import "./globals.css";
import { Inter } from "next/font/google";
import { NextAuthProvider } from "./providers";
import AppBar from "@/components/Layout/AppBar";
import Footer from "@/components/Layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tick App",
  description: "Generated by Tick app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-row"}>
        <NextAuthProvider>
          <AppBar />
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}

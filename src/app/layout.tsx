import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponet from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });
import Footer from "./Footer";

export const metadata: Metadata = {
  title: "Ajay rawat",
  description: "Created by Ajay Rawat",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponet />
        {children}
        <Footer/>
      </body>
    </html>
  );
}

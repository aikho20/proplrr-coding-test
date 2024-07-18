import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import MobileControls from "@/components/shared/mobile-controls";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ENVX | UP to 80% OFF | HELMET | AFFORDABLE HELMET",
  description:
    "Motoworld Philippines is the premier destination for high-quality motorcycle accessories, riding gear and apparels at affordable prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div>{children}</div>
        <MobileControls />
      </body>
    </html>
  );
}

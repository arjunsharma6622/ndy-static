import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";

const p = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Not Done Yet",
  description: "Building the LinkedIn for Sports World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={p.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";

const p = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Not Done Yet",
  description: "Generated by create next app",
};

<Head>
  <title>Sports Network</title>
  <meta
    name="description"
    content="Connecting the Sports World Like Never Before"
  />
  <link rel="icon" href="/favicon.ico" />
</Head>;

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
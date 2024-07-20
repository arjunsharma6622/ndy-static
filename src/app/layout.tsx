import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Navbar from "@/components/Navbar";

const p = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  openGraph: {
    title: 'Not Done Yet',
    description: 'Building the LinkedIn for Sports World',
    url: 'https://ndy-static.vercel.app',
    images: [
      {
        url: 'https://res.cloudinary.com/dexnb3wk2/image/upload/v1721477422/ndy/og_img.jpg',
        width: 1200,
        height: 630,
        alt: 'Not Done Yet',
      },
    ],
    siteName: 'Not Done Yet',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Not Done Yet',
    description: 'Building the LinkedIn for Sports World',
    images: ['https://res.cloudinary.com/dexnb3wk2/image/upload/v1721477422/ndy/og_img.jpg'],
  },
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
import React from "react";
import About from "./(components)/About";
import Contact from "./(components)/Contact";
import Hero from "./(components)/Hero";
import InteractiveSection from "./(components)/Interactive";
import Projects from "./(components)/Projects";
import Head from "next/head";
import { Metadata } from 'next'; // if using TypeScript

export const metadata: Metadata = {
  openGraph: {
    title: 'Not Done Yet',
    description: 'Building the LinkedIn for Sports World',
    url: 'https://res.cloudinary.com/dexnb3wk2/image/upload/v1721476623/ndy/vfynyiufjql3vpjlpbpd.png',
    images: [
      {
        url: '/og_img.jpg',
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
    images: ['https://res.cloudinary.com/dexnb3wk2/image/upload/v1721476623/ndy/vfynyiufjql3vpjlpbpd.png'],
  },
};

const HomePage: React.FC = () => {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      <main>
        <Hero />
        <About />
        <InteractiveSection />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
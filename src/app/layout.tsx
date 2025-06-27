import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins', // optional
  display: 'swap',
});

export const metadata = {
  title: 'Your Portfolio',
  description: 'Built by Hamza',
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${poppins.variable}`}>
    
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      > <div className="relative w-full flex items-center justify-center">
        <Navbar/>
      </div>
        
        {children}
      </body>
    </html>
  );
}

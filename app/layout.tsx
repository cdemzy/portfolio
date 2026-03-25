import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/app/components/ThemeProvider"

import Navigation from "./components/Navigation";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charles Dela Cruz",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${interSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body
        className="antialiased primary-text scroll-smoth font-sans mt-8 mb-30 md:mt-18 px-7 flex flex-col gap-12 mx-auto max-w-[652px]"
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navigation/>
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

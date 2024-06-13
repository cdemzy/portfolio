import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import Header from "@/components/header";
import ThemeSwitch from '@/components/theme-switch';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Charles Dela Cruz",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body
        className={`${inter.className} bg-gray-50 transition-colors text-gray-950 relative pt-12 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >

        <div className='bg-[#e2fbe6] dark:bg-[#548d4c] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]'></div>
        <div className='bg-[#fbf0d7] dark:bg-[#4d3870] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]'></div>

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}

          </ActiveSectionContextProvider>

          <ThemeSwitch />
        
        </ThemeContextProvider>
      </body>
    </html>
  );
};
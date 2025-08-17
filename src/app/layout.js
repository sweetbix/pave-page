import { Geist, Geist_Mono } from "next/font/google";
import { Metrophobic } from "next/font/google";
import { Kadwa } from "next/font/google";
import { Jost } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metrophobic = Metrophobic({
  variable: "--font-metrophobic",
  subsets: ["latin"],
  weight: "400",
});

const kadwa = Kadwa({
  variable: "--font-kadwa",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: "400",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: "400"
})

export const metadata = {
  title: "pave",
  description: "Revolutionary age verification platform with privacy and security at its core",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${metrophobic.variable} ${kadwa.variable} ${jost.variable} 
        ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

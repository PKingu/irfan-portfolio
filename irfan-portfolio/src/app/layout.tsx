import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google"; // Swapped Geist for Jakarta
import "./globals.css";
import Navbar from "@/components/Navbar";

// modern, geometric alternative to Geist
const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta" 
});

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains" 
});

export const metadata: Metadata = {
  title: "Irfan Hussain | Security Researcher",
  description: "Portfolio of Irfan Hussain - Incoming Security Research Intern at Microsoft (MSTIC).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jakarta.variable} ${jetbrains.variable} font-sans bg-dark text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

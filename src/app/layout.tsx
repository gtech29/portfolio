import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

// Import Oswald font
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Juan Rodriguez | Portfolio",
  description: "A portfolio to showcase my professional experience",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full ${oswald.variable}`}>
      <body className="font-sans antialiased h-full">
        <div className="flex h-full flex-col md:flex-row">
          <Navbar />
          <main className="flex-1 pt-[64px] md:pt-0 p-6 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}


// C:\Users\juanr\Desktop\Projects\portfolio\src\app\favicon.ico
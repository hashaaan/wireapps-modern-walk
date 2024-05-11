import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/header";

const roboto = Roboto({
  weight: ["100", "400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modern Walk",
  description: "The fashion retail store for the modern",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="flex flex-col items-center min-h-screen bg-mw-gray-100">
          <Header title="Modern Walk" />

          {children}
        </main>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
//fonts
const workSans = Work_Sans({
  weight: ["100", "400", "600"],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "Creator Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={workSans.variable}>
      <body>{children}</body>
    </html>
  );
}

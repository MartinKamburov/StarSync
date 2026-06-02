import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StarSync — Put Your 5-Star Google Reviews on Social Autopilot",
  description:
    "StarSync automatically turns your 5-star Google reviews into gorgeous, on-brand social posts and schedules them to Instagram & Facebook. Set-and-forget social proof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

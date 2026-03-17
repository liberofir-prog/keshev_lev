import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-sans",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "קשב הלב - הילה בן גרא | טיפול CBT ממוקד",
  description:
    "להחזיר את השקט הביתה - טיפול CBT ממוקד עם המומחיות של הילה בן גרא. יועצת חינוכית ומטפלת CBT לנוער, מבוגרים וזוגות.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} antialiased`}>{children}</body>
    </html>
  );
}

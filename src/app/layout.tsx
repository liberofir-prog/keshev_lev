import type { Metadata, Viewport } from "next";
import Script from "next/script";
import WhatsAppFab from "@/components/WhatsAppFab";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
import { Rubik, Frank_Ruhl_Libre } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  variable: "--font-sans",
  subsets: ["latin", "hebrew"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-display",
  subsets: ["latin", "hebrew"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "קשב הלב - הילה בן גרא | טיפול CBT ממוקד",
  description:
    "להחזיר את השקט הביתה - טיפול CBT ממוקד עם המומחיות של הילה בן גרא. יועצת חינוכית ומטפלת CBT לנוער, מבוגרים וזוגות.",
  openGraph: {
    title: "קשב הלב - הילה בן גרא | טיפול CBT ממוקד",
    description:
      "להחזיר את השקט הביתה - טיפול CBT ממוקד עם המומחיות של הילה בן גרא. יועצת חינוכית ומטפלת CBT לנוער, מבוגרים וזוגות.",
    url: "https://www.keshev-lev.co.il",
    siteName: "קשב הלב",
    images: [
      {
        url: "https://www.keshev-lev.co.il/welcome/logo.png",
        width: 512,
        height: 512,
        alt: "לוגו קשב הלב - הילה בן גרא",
      },
    ],
    locale: "he_IL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${frankRuhlLibre.variable} antialiased`}>
        {children}
        <WhatsAppFab />
        <Script src="/_vercel/insights/script.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

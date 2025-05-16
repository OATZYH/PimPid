import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LanguageProvider from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const notoSansThai = Noto_Sans_Thai({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "พิมพ์ผิด - แก้ไขข้อความไทย/อังกฤษ",
  description: "เปลี่ยนประโยคหรือข้อความที่พิมพ์ผิดจากภาษาอังกฤษให้เป็นภาษาไทยเวลาลืมกดเปลี่ยนภาษา แก้ไขข้อความภาษาไทย/อังกฤษที่พิมพ์ผิดจากคีย์บอร์ดที่ไม่ถูกต้อง",
  keywords: ["พิมพ์ผิด", "แก้ไขข้อความ", "ไทย", "อังกฤษ", "เปลี่ยนภาษา", "ลืมเปลี่ยนภาษา", "แป้นพิมพ์"],
  metadataBase: new URL("https://pimpid.vercel.app"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default to Thai messages
  const messages = (await import(`../../messages/th.json`)).default;

  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      </head>
      <body className={`antialiased ${notoSansThai.className}`}>
        <LanguageProvider defaultLocale="th" defaultMessages={messages}>
          <Toaster />
          {children}
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}

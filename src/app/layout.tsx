import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import LanguageProvider from "@/components/LanguageProvider";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "พิมพ์ผิด - แก้ไขข้อความไทย/อังกฤษ",
  description: "แก้ไขข้อความภาษาไทย/อังกฤษที่พิมพ์ผิดจากคีย์บอร์ดที่ไม่ถูกต้อง",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider defaultLocale="th" defaultMessages={messages}>
          <Toaster />
          {children}
          <LanguageSwitcher />
        </LanguageProvider>
      </body>
    </html>
  );
}

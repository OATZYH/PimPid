"use client";

import { NextIntlClientProvider } from "next-intl";
import { useState, useEffect } from "react";
import { ReactNode } from "react";

interface LanguageProviderProps {
  children: ReactNode;
  defaultLocale: string;
  defaultMessages: any;
}

export default function LanguageProvider({
  children,
  defaultLocale,
  defaultMessages,
}: LanguageProviderProps) {
  const [locale, setLocale] = useState(defaultLocale);
  const [messages, setMessages] = useState(defaultMessages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    
    const loadMessages = async () => {
      if (savedLanguage && savedLanguage !== defaultLocale) {
        try {
          const newMessages = (await import(`../../messages/${savedLanguage}.json`)).default;
          setLocale(savedLanguage);
          setMessages(newMessages);
        } catch (error) {
          console.error("Failed to load language messages", error);
          // Fallback 
          localStorage.removeItem("language");
        }
      }
      setLoading(false);
    };

    loadMessages();
  }, [defaultLocale, defaultMessages]);

  if (loading) {
    return null;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
} 
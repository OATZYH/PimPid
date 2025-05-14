"use client";

import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { US, TH } from "country-flag-icons/react/3x2";
import { useState, useEffect } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const t = useTranslations("languageSwitcher");
  const [mounted, setMounted] = useState(false);

  // Prevent hydration errors by ensuring the component only renders after mounting on the client
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "th" : "en";
    
    // Save the language preference to localStorage
    localStorage.setItem("language", newLocale);
    
    // Reload the page to apply the new language
    window.location.reload();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={toggleLocale}
              variant="secondary"
              size="icon"
              className="rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-12 h-12"
            >
              {locale === "en" ? (
                <TH className="w-6 h-6" />
              ) : (
                <US className="w-6 h-6" />
              )}
              <span className="sr-only">
                {t("switchTo")}
              </span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{t("tooltip")}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
} 
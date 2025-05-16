"use client";

import { useState, useEffect, useCallback } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Clipboard, Sparkles, ArrowLeftRight } from "lucide-react";
import { convertText } from "@/lib/convert-text";
import toast from "react-hot-toast";
import { US, TH } from "country-flag-icons/react/3x2";
import BuyMeACoffeeButton from "./BuyMeACooffeeButton";
import { useTranslations } from "next-intl";
import Image from "next/image";

export function TypeFixer() {
  const t = useTranslations();
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [layoutDirection, setLayoutDirection] = useState("en-to-th");
  const [autoDetect] = useState(false);

  const handleConvert = useCallback(() => {
    const result = convertText(inputText, layoutDirection);
    setOutputText(result);
  }, [inputText, layoutDirection]);

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText);
    toast.success(t("actions.copySuccess"), {
      duration: 2000,
    });
  };

  const handleSwapLayout = () => {
    setLayoutDirection((prev) =>
      prev === "en-to-th" ? "th-to-en" : "en-to-th"
    );
    setInputText("");
    setOutputText("");
  };

  // FIX: For auto-conversion when auto-detect is enabled (future feature)
  useEffect(() => {
    if (autoDetect && inputText) {
      handleConvert();
    }
  }, [autoDetect, inputText, handleConvert]);

  return (
    <div className="container px-4 py-8 mx-auto max-w-6xl">
      <header className="flex justify-center items-center mb-10">
        <Image
          src="/logo.png"
          alt="Logo"
          width={100}
          height={100}
          className="animate-in fade-in slide-in-from-bottom-4 duration-500 rounded-xl"
        />
        <div className="flex flex-col justify-center ml-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 animate-in fade-in slide-in-from-bottom-5 duration-500">
            {t("header.title")}
          </h1>
          <p className="text-muted-foreground mb-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            {t("header.subtitle")}
          </p>
        </div>
      </header>

      <Card className="shadow-md animate-in fade-in slide-in-from-bottom-7 duration-900">
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Input Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="input-text" className="text-base font-bold">
                  {t("layout.originalText")}
                </Label>
                {layoutDirection === "en-to-th" ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-xl">
                      <US className="w-6 h-6" />
                    </span>
                    <span>{t("layout.engLabel")}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-xl">
                      <TH className="w-6 h-6" />
                    </span>
                    <span>{t("layout.thaiLabel")}</span>
                  </div>
                )}
              </div>
              <Textarea
                id="input-text"
                placeholder={t("layout.inputPlaceholder")}
                className="min-h-[200px] resize-none"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </div>

            {/* Output Section */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <Label htmlFor="output-text" className="text-base font-bold">
                  {t("layout.fixedOutput")}
                </Label>
                {layoutDirection === "en-to-th" ? (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-xl">
                      <TH className="w-6 h-6" />
                    </span>
                    <span>{t("layout.thaiLabel")}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="text-xl">
                      <US className="w-6 h-6" />
                    </span>
                    <span>{t("layout.engLabel")}</span>
                  </div>
                )}
              </div>
              <Textarea
                id="output-text"
                className="min-h-[200px] resize-none bg-muted/30"
                value={outputText}
                readOnly
              />
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={handleCopy}
                  disabled={!outputText}
                >
                  <Clipboard className="w-4 h-4" />
                  <span>{t("actions.copyButton")}</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-center mt-4 space-x-4">
            {/* <div className="flex items-center space-x-2 opacity-50">
              <Switch
                id="auto-detect"
                checked={autoDetect}
                onCheckedChange={setAutoDetect}
                disabled={true}
              />
              <Label htmlFor="auto-detect" className="text-sm">
                {t('actions.autoDetect')}
              </Label>
            </div> */}
            <Button
              variant="outline"
              onClick={handleSwapLayout}
              className="flex w-40 items-center "
              size="lg"
            >
              <ArrowLeftRight className="w-4 h-4" />
              <span>{t("layout.swapButton")}</span>
            </Button>
            <Button
              onClick={handleConvert}
              className="w-40 transition-all hover:scale-105"
              size="lg"
              disabled={!inputText}
            >
              <Sparkles className="mr-2 h-4 w-4" /> {t("actions.convertButton")}
            </Button>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mt-4">
              <span className="font-semibold">Note:</span> {t("note")}
            </p>
          </div>
        </CardContent>
      </Card>

      <footer className="mt-10 text-center text-sm text-muted-foreground">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
          <p>Made with ❤️ using Next.js + ShadCN</p>
          <BuyMeACoffeeButton />
        </div>
      </footer>
    </div>
  );
}

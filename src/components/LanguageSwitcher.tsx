"use client";

import { GlobeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageProvider";
import { locales, type Locale } from "@/i18n/types";

const localeLabels: Record<Locale, string> = {
  ru: "RU",
  en: "EN",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const switchLanguage = () => {
    const currentIndex = locales.indexOf(locale);
    const nextIndex = (currentIndex + 1) % locales.length;
    setLocale(locales[nextIndex]!);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={switchLanguage}
      className="relative size-8"
      aria-label={`Switch language. Current: ${localeLabels[locale]}`}
      title={`Switch language. Current: ${localeLabels[locale]}`}
    >
      <GlobeIcon className="size-4" aria-hidden="true" />
      <span className="sr-only">{localeLabels[locale]}</span>
      <span className="absolute bottom-0.5 right-0.5 text-[9px] font-semibold leading-none text-foreground/60">
        {localeLabels[locale]}
      </span>
    </Button>
  );
}


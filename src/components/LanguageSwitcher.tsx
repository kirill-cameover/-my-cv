"use client";

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
      className="size-8 font-semibold"
      aria-label={`Switch language. Current: ${localeLabels[locale]}`}
      title={`Switch language. Current: ${localeLabels[locale]}`}
    >
      {localeLabels[locale]}
    </Button>
  );
}


"use client";

import React from "react";
import { Section } from "../../components/ui/section";
import { useTranslations } from "@/i18n/useTranslations";
import type { ResumeData } from "@/lib/types";

interface AboutProps {
  summary: ResumeData["summary"];
  className?: string;
}

/**
 * Summary section component
 * Displays a summary of professional experience and goals
 */
export function Summary({ summary, className }: AboutProps) {
  const t = useTranslations();

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="about-section">
        {t.sections.about}
      </h2>
      <div className="text-pretty font-mono text-sm text-foreground/80 print:text-[12px] [&>p+p]:mt-3 [&>p]:mb-0">
        {summary}
      </div>
    </Section>
  );
}

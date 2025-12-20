"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { useTranslations } from "@/i18n/useTranslations";
import type { ResumeData } from "@/lib/types";

type Competency = NonNullable<ResumeData["competencies"]>[number];

interface CompetencyColumnProps {
  competency: Competency;
}

/**
 * Individual competency column component
 */
function CompetencyColumn({ competency }: CompetencyColumnProps) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-semibold print:text-sm">
          {competency.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2 font-mono text-sm text-foreground/80 print:space-y-1 print:text-[11px]">
          {competency.items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-foreground/60" aria-hidden="true">
                •
              </span>
              <span className="flex-1">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

interface CompetenciesProps {
  competencies: NonNullable<ResumeData["competencies"]>;
  className?: string;
}

/**
 * Competencies section component
 * Displays competencies in a 3-column grid layout
 */
export function Competencies({
  competencies,
  className,
}: CompetenciesProps) {
  const t = useTranslations();

  if (!competencies || competencies.length === 0) {
    return null;
  }

  return (
    <Section className={className}>
      <h2 className="text-xl font-bold" id="competencies-section">
        {t.sections.competencies}
      </h2>
      <div
        className="grid grid-cols-1 gap-4 md:grid-cols-3 print:grid-cols-3 print:gap-3"
        role="feed"
        aria-labelledby="competencies-section"
      >
        {competencies.map((competency, index) => (
          <article key={index} className="h-full">
            <CompetencyColumn competency={competency} />
          </article>
        ))}
      </div>
    </Section>
  );
}


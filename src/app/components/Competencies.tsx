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
    <Card className="flex h-full flex-col overflow-hidden border p-3 bg-gradient-to-br from-background to-muted/20">
      <CardHeader>
        <div className="space-y-1">
          <CardTitle className="text-base">
            {competency.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="mt-auto">
        <ul className="space-y-1.5 font-mono text-xs text-muted-foreground print:space-y-1 print:text-[10px]">
          {competency.items.map((item, index) => (
            <li key={index} className="flex items-start text-pretty">
              <span className="mr-2 mt-0.5 text-muted-foreground/60 shrink-0" aria-hidden="true">
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
        className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2"
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


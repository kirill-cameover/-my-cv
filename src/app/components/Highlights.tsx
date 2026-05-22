"use client";

import { Badge } from "@/components/ui/badge";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";
import type { ResumeData } from "@/lib/types";

type Highlights = NonNullable<ResumeData["highlights"]>;

interface HighlightsListProps {
  highlights: Highlights;
  className?: string;
}

function HighlightsList({ highlights, className }: HighlightsListProps) {
  return (
    <ul
      className={cn("flex list-none flex-wrap gap-2 p-0", className)}
      aria-label="Key highlights"
    >
      {highlights.map((highlight) => (
        <li key={highlight}>
          <Badge
            variant="outline"
            className="rounded-full border-border bg-transparent px-3 py-1 font-normal text-muted-foreground print:border-gray-400 print:px-2 print:py-0.5 print:text-[10px]"
            aria-label={`Highlight: ${highlight}`}
          >
            {highlight}
          </Badge>
        </li>
      ))}
    </ul>
  );
}

interface HighlightsProps {
  highlights: Highlights;
  className?: string;
}

/**
 * Key facts / metrics shown above the summary text
 */
export function Highlights({ highlights, className }: HighlightsProps) {
  if (highlights.length === 0) return null;

  return (
    <Section className={cn("print:pb-0", className)}>
      <HighlightsList highlights={highlights} />
    </Section>
  );
}

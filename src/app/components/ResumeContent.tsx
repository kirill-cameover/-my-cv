"use client";

import { Suspense } from "react";
import { SectionErrorBoundary } from "@/components/section-error-boundary";
import { SectionSkeleton } from "@/components/section-skeleton";
import { useResumeData } from "@/data/useResumeData";
import { Competencies } from "./Competencies";
import { Education } from "./Education";
import { Header } from "./Header";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { Summary } from "./Summary";
import { WorkExperience } from "./WorkExperience";

export function ResumeContent() {
  const resumeData = useResumeData();

  return (
    <section
      className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4"
      aria-label="Resume Content"
    >
      <SectionErrorBoundary sectionName="Header">
        <Suspense fallback={<SectionSkeleton lines={4} />}>
          <Header />
        </Suspense>
      </SectionErrorBoundary>

      <div className="space-y-8 print:space-y-4">
        <SectionErrorBoundary sectionName="Summary">
          <Suspense fallback={<SectionSkeleton lines={2} />}>
            <Summary summary={resumeData.summary} />
          </Suspense>
        </SectionErrorBoundary>
        
        {resumeData.competencies && (
          <SectionErrorBoundary sectionName="Competencies">
            <Suspense fallback={<SectionSkeleton lines={4} />}>
              <Competencies competencies={resumeData.competencies} />
            </Suspense>
          </SectionErrorBoundary>
        )}

        <SectionErrorBoundary sectionName="Work Experience">
          <Suspense fallback={<SectionSkeleton lines={6} />}>
            <WorkExperience work={resumeData.work} />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary sectionName="Education">
          <Suspense fallback={<SectionSkeleton lines={3} />}>
            <Education education={resumeData.education} />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary sectionName="Skills">
          <Suspense fallback={<SectionSkeleton lines={2} />}>
            <Skills skills={resumeData.skills} />
          </Suspense>
        </SectionErrorBoundary>

        <SectionErrorBoundary sectionName="Projects">
          <Suspense fallback={<SectionSkeleton lines={5} />}>
            <Projects projects={resumeData.projects} />
          </Suspense>
        </SectionErrorBoundary>
      </div>
    </section>
  );
}


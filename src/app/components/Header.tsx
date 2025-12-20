"use client";

import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";
import React from "react";
import { Avatar } from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, TelegramIcon } from "@/components/icons";
import { XIcon } from "@/components/icons/x-icon";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useResumeData } from "@/data/useResumeData";
import type { IconType } from "@/lib/types";

// Type-safe icon mapping
const ICON_MAP: Record<IconType, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  x: XIcon,
  globe: GlobeIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  telegram: TelegramIcon,
} as const;

interface LocationLinkProps {
  location: string;
  locationLink: string;
}

function LocationLink({
  location,
  locationLink,
}: LocationLinkProps) {
  return (
    <p className="max-w-md items-center text-pretty font-mono text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  iconType: IconType;
  label: string;
}

function SocialButton({
  href,
  iconType,
  label,
}: SocialButtonProps) {
  const IconComponent = ICON_MAP[iconType];
  
  return (
    <Button className="size-8" variant="outline" size="icon" asChild={true}>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconComponent className="size-4" aria-hidden="true" />
      </a>
    </Button>
  );
}

interface ContactButtonsProps {
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  personalWebsiteUrl?: string;
}

function ContactButtons({
  contact,
  personalWebsiteUrl,
}: ContactButtonsProps) {
  return (
    <ul
      className="flex list-none gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <li>
          <SocialButton
            href={personalWebsiteUrl}
            iconType="globe"
            label="Personal website"
          />
        </li>
      )}
      {contact.email && (
        <li>
          <SocialButton
            href={`mailto:${contact.email}`}
            iconType="mail"
            label="Email"
          />
        </li>
      )}
      {contact.tel && (
        <li>
          <SocialButton
            href={`tel:${contact.tel}`}
            iconType="phone"
            label="Phone"
          />
        </li>
      )}
      {contact.social.map((social) => (
        <li key={social.name}>
          <SocialButton
            href={social.url}
            iconType={social.icon}
            label={social.name}
          />
        </li>
      ))}
    </ul>
  );
}

interface PrintContactProps {
  contact: {
    email: string;
    tel: string;
    social: Array<{
      name: string;
      url: string;
      icon: IconType;
    }>;
  };
  personalWebsiteUrl?: string;
}

function PrintContact({
  contact,
  personalWebsiteUrl,
}: PrintContactProps) {
  return (
    <div className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]">
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <a
          className="underline hover:text-foreground/70"
          href={`tel:${contact.tel}`}
        >
          {contact.tel}
        </a>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  const resumeData = useResumeData();

  return (
    <header className="flex items-center justify-between">
      <div className="flex-1 space-y-1.5">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold" id="resume-name">
            {resumeData.name}
          </h1>
          <div className="print:hidden">
            <LanguageSwitcher />
          </div>
        </div>
        <p className="max-w-md text-pretty font-mono text-sm text-foreground/80 print:text-[12px]">
          {resumeData.about}
        </p>

        <LocationLink
          location={resumeData.location}
          locationLink={resumeData.locationLink}
        />

        <ContactButtons
          contact={resumeData.contact}
          personalWebsiteUrl={resumeData.personalWebsiteUrl}
        />

        <PrintContact
          contact={resumeData.contact}
          personalWebsiteUrl={resumeData.personalWebsiteUrl}
        />
      </div>

      <Avatar
        className="size-28"
        src={resumeData.avatarUrl}
        alt={`${resumeData.name}'s profile picture`}
        fallback={resumeData.initials}
      />
    </header>
  );
}

import type { Locale } from "./types";

export interface Translations {
  sections: {
    about: string;
    work: string;
    education: string;
    skills: string;
    projects: string;
  };
  common: {
    present: string;
    location: string;
    email: string;
    phone: string;
    personalWebsite: string;
  };
}

export const translations: Record<Locale, Translations> = {
  ru: {
    sections: {
      about: "О себе",
      work: "Опыт работы",
      education: "Образование",
      skills: "Навыки",
      projects: "Проекты",
    },
    common: {
      present: "Настоящее время",
      location: "Местоположение",
      email: "Email",
      phone: "Телефон",
      personalWebsite: "Личный сайт",
    },
  },
  en: {
    sections: {
      about: "About",
      work: "Work Experience",
      education: "Education",
      skills: "Skills",
      projects: "Projects",
    },
    common: {
      present: "Present",
      location: "Location",
      email: "Email",
      phone: "Phone",
      personalWebsite: "Personal Website",
    },
  },
};


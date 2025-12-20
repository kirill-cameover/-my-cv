import type { Locale } from "@/i18n/types";
import type { ResumeData } from "@/lib/types";

export const RESUME_DATA_I18N: Record<Locale, ResumeData> = {
  ru: {
    name: "Кирилл Чолак",
    initials: "КЧ",
    location: "Saint-Petersburg, Russia, UTC+3",
    locationLink: "https://www.google.com/maps/place/Saint-Petersburg",
    about:
      "Опытный менеджер с более чем 5-летним опытом в управлении продажажми и развитии бизнеса.",
    summary: (
      <>
        Менеджер #1 YouTube подкаста про Крипту, продажи продуктов, общение и
        приглашение с лучшими гостями. Управлял магазином кальянов в Москве,
        увеличил оборот с 350 тыс. руб. до 900 тыс. руб. за 3 месяца и поднял
        рейтинг на Yandex Картах до 5.0. Создал магазин на Ozon, снимал рилсы и
        вел Instagram. Был продюсером шоу на YouTube в{" "}
        <a href="http://tuk.md/" target="_blank" rel="noopener noreferrer">
          tuk.md
        </a>
        , разработал проект, выиграл грант и выпустил 13 эпизодов. Как менеджер
        коммерческого отдела в Еврейском культурном центре, организовал 8
        коммерческих мероприятий, открыл 3 образовательных студий, внедрил
        систему управления на Notion, снимал и создавал посты для продвижения.
      </>
    ),
    avatarUrl:
      "https://avatars.githubusercontent.com/u/98087190?s=400&u=0fd5cc113146cf9090cabbd21952ac6c64d8df7d&v=4",
    personalWebsiteUrl: "https://kirill-cameover.github.io/blog/",
    contact: {
      email: "kiril.ciolac@gmail.com",
      tel: "+79500031429",
      social: [
        {
          name: "Telegram",
          url: "https://t.me/kirillcholak",
          icon: "telegram",
        },
      ],
    },
    education: [
      {
        school: "Высшая школа экономики, Санкт-Петербург",
        degree:
          "Бакалавр, Социология и Социальная информатика",
        start: "2019",
        end: "2023",
      },
    ],
    work: [
      {
        company: "Motion",
        link: "https://motionapp.com/",
        badges: ["Remote", "AI", "React", "Next.js", "TypeScript", "AdonisJS"],
        title: "Senior Software Engineer",
        start: "2025",
        end: null,
        description: (
          <>
            Работа над внутренней платформой AI агентов, позволяющей
            маркетологам создавать AI workflow.
          </>
        ),
      },
      {
        company: "Film.io",
        link: "https://film.io",
        badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
        title: "Software Architect",
        start: "2024",
        end: "2025",
        description: (
          <>
            Руководство технической архитектурой платформы финансирования
            фильмов на основе блокчейна.
            <ul className="list-inside list-disc">
              <li>
                Архитектура миграции с CRA на Next.js для улучшения
                производительности, SEO и DX
              </li>
              <li>
                Установлен процесс релизов, обеспечивающий более быстрые
                развертывания и надежные откаты
              </li>
              <li>
                Внедрение мониторинга всей системы и улучшений безопасности
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Parabol",
        link: "https://parabol.co",
        badges: [
          "Remote",
          "React",
          "TypeScript",
          "Node.js",
          "GraphQL",
          "Tailwind CSS",
        ],
        title: "Senior Full Stack Developer",
        start: "2021",
        end: "2024",
        description: (
          <>
            Старший разработчик и лидер команды для корпоративной платформы
            agile встреч.
            <ul className="list-inside list-disc">
              <li>
                Построил дизайн-систему с Tailwind CSS, улучшив скорость
                разработки и время выхода на рынок
              </li>
              <li>
                Внедрил инженерные практики: автоматизация PR, руководящие
                принципы code review и рабочие процессы
              </li>
              <li>
                Вклад в open source: Relay DevTools и инструменты React i18n
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Clevertech",
        link: "https://clevertech.biz",
        badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
        title: "Lead Android Developer → Full Stack Developer",
        start: "2015",
        end: "2021",
        description: (
          <>
            Успешно перешел с мобильной разработки на full-stack, управляя
            распределенными командами.
            <ul className="list-inside list-disc">
              <li>
                Руководил фронтенд-командой в Evercast, создавая платформу
                реального времени, поддерживающую 30+ пользователей в комнате с
                HD стримингом и инструментами совместной работы
              </li>
              <li>
                Разработал offline-first Android приложение для DKMS, улучшив
                процесс регистрации доноров
              </li>
              <li>
                Руководил командами разработки в нескольких успешных
                клиентских проектах
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Jojo Mobile",
        link: "https://bsgroup.eu/",
        badges: ["On Site", "Android", "Java", "Kotlin"],
        title: "Android Developer → Lead Android Developer",
        start: "2012",
        end: "2015",
        description: (
          <>
            Первый Android разработчик, вырос и возглавил команду из 15+
            инженеров, установив инженерную культуру.
            <ul className="list-inside list-disc">
              <li>
                Разработал приложения для крупных польских компаний, включая
                LOT, Polskie Radio и Agora
              </li>
              <li>
                Построил и наставлял высокопроизводительную команду мобильной
                разработки
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Nokia Siemens Networks",
        link: "https://www.nokia.com",
        badges: ["On Site", "C/C++", "LTE", "Agile"],
        title: "C/C++ Developer",
        start: "2010",
        end: "2012",
        description:
          "Разрабатывал программное обеспечение для LTE базовых станций в корпоративном масштабе, получил прочные основы в архитектуре программного обеспечения, практиках тестирования и межкомандном сотрудничестве.",
      },
    ],
    skills: [
      "Python",
      "Figma",
      "Trello",
      "Design Systems",
      "Jira",
      "HubSpot",
      "Tableau",
      "Exсel&Google Sheets (на продвинутом уровне)",
      "Качественные и количественные исследования",
      "Аналитика и Метрики",
      "Коммуникация",
      "Качественные и количественные исследования",
      "Бизнес процессы ISO стандарт",
    ],
    projects: [
      {
        title: "Monito",
        techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
        description:
          "Расширение для браузера для отладки веб-приложений. Включает создание скриншотов, запись экрана, генерацию E2E тестов и создание отчетов об ошибках",
        link: {
          label: "monito.dev",
          href: "https://monito.dev/",
        },
      },
      {
        title: "Consultly",
        techStack: [
          "TypeScript",
          "Next.js",
          "Vite",
          "GraphQL",
          "WebRTC",
          "Tailwind CSS",
          "PostgreSQL",
          "Redis",
        ],
        description:
          "Платформа для онлайн-консультаций с видеовстречами в реальном времени и планированием",
        link: {
          label: "consultly.com",
          href: "https://consultly.com/",
        },
      },
      {
        title: "Minimalist CV",
        techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
        description:
          "Открытый минималистичный шаблон CV, удобный для печати, с фокусом на читаемость и чистый дизайн. >9k звезд на GitHub",
        link: {
          label: "Minimalist CV",
          href: "https://github.com/BartoszJarocki/cv",
        },
      },
    ],
  },
  en: {
    name: "Kirill Cholak",
    initials: "KC",
    location: "Saint-Petersburg, Russia, UTC+3",
    locationLink: "https://www.google.com/maps/place/Saint-Petersburg",
    about:
      "Experienced manager with over 5 years of experience in sales management and business development.",
    summary: (
      <>
        Manager #1 of a YouTube podcast about Crypto, product sales,
        communication, and inviting the best guests. Managed a hookah store in
        Moscow, increased turnover from 350k rubles to 900k rubles in 3 months
        and raised the rating on Yandex Maps to 5.0. Created a store on Ozon,
        shot reels and managed Instagram. Was a producer of a YouTube show at{" "}
        <a href="http://tuk.md/" target="_blank" rel="noopener noreferrer">
          tuk.md
        </a>
        , developed the project, won a grant and released 13 episodes. As a
        commercial department manager at the Jewish Cultural Center, organized 8
        commercial events, opened 3 educational studios, implemented a Notion
        management system, filmed and created posts for promotion.
      </>
    ),
    avatarUrl:
      "https://avatars.githubusercontent.com/u/98087190?s=400&u=0fd5cc113146cf9090cabbd21952ac6c64d8df7d&v=4",
    personalWebsiteUrl: "https://kirill-cameover.github.io/blog/",
    contact: {
      email: "kiril.ciolac@gmail.com",
      tel: "+79500031429",
      social: [
        {
          name: "Telegram",
          url: "https://t.me/kirillcholak",
          icon: "telegram",
        },
      ],
    },
    education: [
      {
        school: "Wrocław University of Technology",
        degree: "Bachelor's Degree in Control systems engineering and Robotics",
        start: "2007",
        end: "2010",
      },
    ],
    work: [
      {
        company: "Motion",
        link: "https://motionapp.com/",
        badges: ["Remote", "AI", "React", "Next.js", "TypeScript", "AdonisJS"],
        title: "Senior Software Engineer",
        start: "2025",
        end: null,
        description: (
          <>
            Working on internal AI agents platform allowing marketing specialists
            to create AI workflows.
          </>
        ),
      },
      {
        company: "Film.io",
        link: "https://film.io",
        badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js"],
        title: "Software Architect",
        start: "2024",
        end: "2025",
        description: (
          <>
            Leading technical architecture of a blockchain-based film funding
            platform.
            <ul className="list-inside list-disc">
              <li>
                Architecting migration from CRA to Next.js for improved
                performance, SEO, and DX
              </li>
              <li>
                Established release process enabling faster deployments and
                reliable rollbacks
              </li>
              <li>
                Implementing system-wide monitoring and security improvements
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Parabol",
        link: "https://parabol.co",
        badges: [
          "Remote",
          "React",
          "TypeScript",
          "Node.js",
          "GraphQL",
          "Tailwind CSS",
        ],
        title: "Senior Full Stack Developer",
        start: "2021",
        end: "2024",
        description: (
          <>
            Senior developer and squad leader for an enterprise agile meeting
            platform.
            <ul className="list-inside list-disc">
              <li>
                Built design system with Tailwind CSS, improving development speed
                and time to market
              </li>
              <li>
                Implemented engineering practices: PR automation, code review
                guidelines, and workflows
              </li>
              <li>
                Open source contributions to Relay DevTools and React i18n tooling
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Clevertech",
        link: "https://clevertech.biz",
        badges: ["Remote", "React", "TypeScript", "Node.js", "Android", "Kotlin"],
        title: "Lead Android Developer → Full Stack Developer",
        start: "2015",
        end: "2021",
        description: (
          <>
            Successfully transitioned from mobile to full-stack development while
            leading distributed teams.
            <ul className="list-inside list-disc">
              <li>
                Led frontend team at Evercast, building real-time platform
                supporting 30+ users per room with HD streaming and collaboration
                tools
              </li>
              <li>
                Developed offline-first Android app for DKMS, improving donor
                registration process
              </li>
              <li>
                Led development teams across multiple successful client projects
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Jojo Mobile",
        link: "https://bsgroup.eu/",
        badges: ["On Site", "Android", "Java", "Kotlin"],
        title: "Android Developer → Lead Android Developer",
        start: "2012",
        end: "2015",
        description: (
          <>
            First Android developer, grew and led a team of 15+ engineers while
            establishing engineering culture.
            <ul className="list-inside list-disc">
              <li>
                Developed apps for major Polish companies including LOT, Polskie
                Radio, and Agora
              </li>
              <li>Built and mentored high-performing mobile development team</li>
            </ul>
          </>
        ),
      },
      {
        company: "Nokia Siemens Networks",
        link: "https://www.nokia.com",
        badges: ["On Site", "C/C++", "LTE", "Agile"],
        title: "C/C++ Developer",
        start: "2010",
        end: "2012",
        description:
          "Developed software for LTE base stations at enterprise scale, gaining strong fundamentals in software architecture, testing practices, and cross-team collaboration.",
      },
    ],
    skills: [
      "Python",
      "Figma",
      "Trello",
      "Design Systems",
      "Jira",
      "HubSpot",
      "Tableau",
      "Exсel&Google Sheets (на продвинутом уровне)",
      "Качественные и количественные исследования",
      "Аналитика и Метрики",
      "Коммуникация",
      "Качественные и количественные исследования",
      "Бизнес процессы ISO стандарт",
    ],
    projects: [
      {
        title: "Monito",
        techStack: ["TypeScript", "Next.js", "Browser Extension", "PostgreSQL"],
        description:
          "Browser extension for debugging web applications. Includes taking screenshots, screen recording, E2E tests generation and generating bug reports",
        link: {
          label: "monito.dev",
          href: "https://monito.dev/",
        },
      },
      {
        title: "Consultly",
        techStack: [
          "TypeScript",
          "Next.js",
          "Vite",
          "GraphQL",
          "WebRTC",
          "Tailwind CSS",
          "PostgreSQL",
          "Redis",
        ],
        description:
          "Platform for online consultations with real-time video meetings and scheduling",
        link: {
          label: "consultly.com",
          href: "https://consultly.com/",
        },
      },
      {
        title: "Minimalist CV",
        techStack: ["TypeScript", "Next.js", "Tailwind CSS"],
        description:
          "An open source minimalist, print friendly CV template with a focus on readability and clean design. >9k stars on GitHub",
        link: {
          label: "Minimalist CV",
          href: "https://github.com/BartoszJarocki/cv",
        },
      },
    ],
  },
};


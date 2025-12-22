import type { Locale } from "@/i18n/types";
import type { ResumeData } from "@/lib/types";

export const RESUME_DATA_I18N: Record<Locale, ResumeData> = {
  ru: {
    name: "Кирилл Чолак",
    initials: "КЧ",
    location: "Saint-Petersburg, Russia, UTC+3",
    locationLink: "https://www.google.com/maps/place/Saint-Petersburg",
    about:
      "Middle BizDev, Sales, Project manager Фанат технологий",
    summary: (
      <>
        <p>
        <b>Вкратце: более 5 лет в продажах и развитии бизнеса.</b>
        </p>

        <p>
          2 года B2B-продаж и привлечении партнёров в Web3 и медиа-индустрии,
          с полным циклом: от холодного outreach до закрытия сделок и аккаунт-менеджмента. 
        </p>

        <p>
        Активный нетворкинг на отраслевых ивентах (Blockchain Life Msk/Dubai, TradeID, 0xConnect, Crypto Summit & others).
        Рабочие контакты с Tier-1 проектами и развитая сеть KOL's.
        </p>

        <p>
        BizDev-зона — бенчмаркинг, анализ рынка, создание маркетинговых материалов.
        Вёл переговоры(300+ встреч), участвовал в risk-оценке, документооборот, фин-модель сотрудничества.
        </p>

        <p>
        Сильные хард скиллы в CRM-системах, автоматизации процессов и стратегическом планировании.
        Люблю технологии, активно использую AI-инструменты в работе.
        </p>
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
        {
          name: "Linkedin",
          url: "https://www.linkedin.com/in/kirill-ciolac-a356521bb/",
          icon: "linkedin",
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
        company: "Хедлайнеры",
        link: "https://www.youtube.com/@AnufrievNikita",
        badges: ["B2B продажи", "КП", "Фин. модели", "Аналитика", "Figma", "Конференции"],
        title: "BizDev, Sales Manager",
        start: "2024",
        end: null,
        description: (
          <>
          Руководство продажами и привлечение крупных клиентов на маркетинговое сопровождение. 
          <ul className="list-inside list-disc">
            <li>
              Сопровождение B2B клиентов на всех этапах сделки: от предложения до закрытия.
              Увеличение выручки на 25%.
            </li>
            <li>
              Разработал MediaKit. Заключил более 50 партнёрств.
              Работа с онлайн каналами и оффлайн мероприятиями. Участие в конференциях.
            </li>
            <li>
              Внедрение мониторинга результатов для клиентов и улучшения процессов.
            </li>
            <li>
              Аналитика и метрики для оценки эффективности продаж. 
              Внедрение CRM-системы для управления клиентами и процессами.
              Сокращение времени на закрытие клиентов на 30%.
            </li>
            <li>
              Разрабатывал презентации и проведение встреч с клиентами.
              Более 300 встреч с клиентами. 
            </li>
            <li>
              Развил сеть контактов с Tier-1 проектами в Web3-индустрии.
            </li>
          </ul>
        </>
        ),
      },
      {
        company: "Kedem.md",
        link: "https://kedem.md",
        badges: ["Управление командой", "Продажи", "Масштабирование"],
        title: "Руководитель коммереского отдела",
        start: "2024",
        end: "2024",
        description: (
          <>
            Руководство коммереского отдела Еврейского культурного центра. 
            Создание и организация обучающих детских и взролсых групп. 
            <ul className="list-inside list-disc">
              <li>
                Создание 8 детских групп по обучению: англ; шахматы; танцы и т.д.
              </li>
              <li>
                Создан процесс онбординга преподавателей и отцифорована система учёта и бонусов
              </li>
              <li>
                Внедрение системы продаж, через онлайн и оффлайн каналы. Увеличение прибыли на 60% за 6 месяцев
              </li>
              <li>  
                Организация более 5 коммеречких мероприятий для взрослых
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Tuk.md",
        link: "https://tuk.md",
        badges: [
          "Подкастинг",
          "Продюсирование",
          "Защита проекта",
          "Davinci Resolve",
          "Гранты",
        ],
        title: "Продюсер YouTube шоу",
        start: "2024",
        end: "2024",
        description: (
          <>
            Проект на 6 месяцев по продюсированию YouTube шоу по медиаграммотности
            <ul className="list-inside list-disc">
              <li>
                Написал проект и выиграл финансирование на создание шоу 30.000$
              </li>
              <li>
                Внедрил автоматизацию PR(короткие видео ), рабочих процессов
              </li>
              <li>
                Выпустил 16 серий на YouTube. Прошёл курсы по видео монтажу и подкастингу и выпустил 3 личных серии 
              </li>
            </ul>
          </>
        ),
      },
      {
        company: "Магазин кальянов",
        link: "https://clevertech.biz",
        badges: ["Фин. модель", "Продажи", "Сеть партнёрств"],
        title: "Co-founder, управляющий магазина",
        start: "2021",
        end: "2023",
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
    competencies: [
      {
        title: "Стратегия и рост",
        items: [
          "Go-to-Market с учётом регуляторики и медиа-ландшафта",
          "Performance-маркетинг: поиск product-channel fit, масштабирование",
          "Партнёрский маркетинг: CPA / RevShare / Hybrid",
          "SEO, ASO, SERM, PR, KOL/YouTube-интеграции",
        ],
      },
      {
        title: "Продукт и аналитика",
        items: [
          "Сквозная аналитика: GA4, Яндекс.Метрика, AppsFlyer, Adjust",
          "Метрики: DAU/MAU, LTV, ROI/ROMI, Churn, ARPU/ARPPU",
          "Unit-экономика, А/В-тесты, Retention-стратегии",
          "Автоматизация: email/EDM, CRM, onboarding-воронки",
        ],
      },
      {
        title: "Инструменты",
        items: [
          "Яндекс.Директ, VK Ads, Google Ads, Meta/FB, LinkedIn Ads, OEM/In-App",
          "Content-Ops: продакшн креативов, локализация, ToV",
          "Управление командами, бюджетирование, кросс-функциональная работа",
          "Рынки: Россия, СНГ и международные запуски",
        ],
      },
    ],
    projects: [
      {
        title: "Personal Website",
        techStack: ["Obsidian", "Quartz", "Github", "TypeScript"],
        description:
          "Персональный блог, где я публикую заметки, гайды и статьи, так называймый Digital Garden",
        link: {
          label: "kirill garden",
          href: "https://kirill-cameover.github.io/blog/",
        },
      },
      {
        title: "MediaKit Headliners",
        techStack: [
          "Figma",
          "Framer",
        ],
        description:
          "Сайт MediaKit разработанный с 0 для Хедлайнеров, включая вёрстку, дизайн и контент.",
        link: {
          label: "consultly.com",
          href: "https://consultly.com/",
        },
      },
      {
        title: "Personal Budget",
        techStack: ["Google Sheets", ],
        description:
          "Открытый минималистичный шаблон ведения бюджета(я пользуюсь уже более 2 лет), удобный для учёта и планирования финансов, включает в себя много фишек и автоматизаций.",
        link: {
          label: "Personal Budget",
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
      "BizDev, Sales, Project manager. Фанат технологий.",
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
    competencies: [
      {
        title: "Business Development",
        items: [
          "Market Analysis/Competitive Analysis",
          "Lead Generation/Strategic Partnerships",
          "Proposal Writing/Client Acquisition",
          "SEO, PR, KOL/YouTube integrations",
        ],
      },
      {
        title: "Product and Sales",
        items: [
          "End-to-end analytics: GA4, Yandex.Metrica, AppsFlyer, Adjust",
          "Metrics: DAU/MAU, LTV, ROI/ROMI, Churn, ARPU/ARPPU",
          "Unit economics, A/B tests, Retention strategies",
          "Automation: email/EDM, CRM, onboarding funnels",
        ],
      },
      {
        title: "Tools",
        items: [
          "Yandex.Direct, VK Ads, Google Ads, Meta/FB, LinkedIn Ads, OEM/In-App",
          "Content-Ops: creative production, localization, ToV",
          "Team management, budgeting, cross-functional work",
          "Markets: Russia, CIS and international launches",
        ],
      },
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


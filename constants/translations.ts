import { Language, Translations } from '@/types/i18n';

export const TRANSLATIONS: Record<Language, Translations> = {
  ua: {
    nav: {
      projects: 'Проєкти',
      stack: 'Стек',
      about: 'Про мене',
      contact: 'Контакти',
      projectsDesc: 'Мої останні роботи та ігри',
      stackDesc: 'Технології та інструменти',
      aboutDesc: 'Бекграунд та досвід',
      contactDesc: "Зв'язатися зі мною",
    },
    hero: {
      greeting: 'Привіт, я Максим',
      title: 'Frontend & Fullstack Developer',
      description:
        'Розробляю сучасні веб-додатки, месенджери у реальному часі та інтерактивні ігри на стеку React, TypeScript та Next.js.',
      viewProjects: 'Переглянути проєкти',
      contactMe: "Зв'язатися",
      viewCv: 'Резюме / CV ↗',
    },
    projects: {
      title: 'Проєкти',
      subtitle: 'Вибрані роботи, над якими я працював',
      filterAll: 'Всі',
      filterFullstack: 'Fullstack',
      filterGames: 'Ігри',
    },
    stack: {
      title: 'Стек технологій',
      subtitle: 'Інструменти, які я використовую в розробці',
    },
    about: {
      title: 'Про мене',
      description:
        'Я займаюся веб-розробкою, фокусуючись на створенні якісних, швидких та зручних користувацьких інтерфейсів. Цікавлюся архітектурою проєктів, оптимізацією продуктивності та сучасним веб-стеком.',
    },
    contact: {
      title: 'Контакти',
      subtitle: 'Відкритий до нових проєктів, співпраці та цікавих пропозицій',
      copyEmail: 'Скопіювати пошту',
      copied: 'Скопійовано!',
    },
  },
  en: {
    nav: {
      projects: 'Projects',
      stack: 'Tech Stack',
      about: 'About',
      contact: 'Contact',
      projectsDesc: 'My latest works and games',
      stackDesc: 'Technologies and tools',
      aboutDesc: 'Background and experience',
      contactDesc: 'Get in touch with me',
    },
    hero: {
      greeting: "Hi, I'm Maksym",
      title: 'Frontend & Fullstack Developer',
      description:
        'Building modern web applications, real-time messengers, and interactive games using React, TypeScript, and Next.js.',
      viewProjects: 'View Projects',
      contactMe: 'Get in Touch',
      viewCv: 'Resume / CV ↗',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected works I have built',
      filterAll: 'All',
      filterFullstack: 'Fullstack',
      filterGames: 'Games',
    },
    stack: {
      title: 'Tech Stack',
      subtitle: 'Tools and technologies I use in development',
    },
    about: {
      title: 'About Me',
      description:
        'I focus on web development, creating high-quality, fast, and user-friendly interfaces. Passionate about software architecture, performance optimization, and the modern web stack.',
    },
    contact: {
      title: 'Contact',
      subtitle: 'Open for new opportunities, collaborations, and projects',
      copyEmail: 'Copy email',
      copied: 'Copied!',
    },
  },
};

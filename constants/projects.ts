import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'chathub-messenger',
    title: {
      ua: 'ChatHub Messenger',
      en: 'ChatHub Messenger',
    },
    description: {
      ua: 'Веб-месенджер у реальному часі з підтримкою групових чатів, обміну файлами та сповіщеннями.',
      en: 'Real-time web messenger with group chats, file sharing, and notifications support.',
    },
    category: 'fullstack',
    tags: ['React', 'Express', 'Socket.io', 'MongoDB', 'Redux', 'State Management'],
    features: [
      {
        ua: 'Миттєвий обмін повідомленнями через WebSockets',
        en: 'Instant messaging via WebSockets',
      },
      {
        ua: 'Централізований стан та авторизація',
        en: 'Centralized state management and authentication',
      },
      {
        ua: 'Зберігання даних у кластері MongoDB Atlas',
        en: 'Data storage in MongoDB Atlas cluster',
      },
      {
        ua: 'Захист маршрутів та адаптивний UI',
        en: 'Protected routes and responsive UI',
      },
    ],
    githubUrl: 'https://github.com/Shura2k18/ChatHub',
    coverImage: '/projects/chathub/demo.gif',
    videoUrl: '/projects/chathub/demo.mp4',
    screenshots: [
      '/projects/chathub/active-chat.png',
      '/projects/chathub/chat-action.gif',
      '/projects/chathub/landing.png',
      '/projects/chathub/create-group.png',
      '/projects/chathub/settings.png',
      '/projects/chathub/contacts.png',
    ],
    mobileScreenshots: [
      '/projects/chathub/mobile-chats.png',
      '/projects/chathub/mobile-active-chat.png',
    ],
    featured: true,
  },
  {
    id: 'territorygrub-game',
    title: {
      ua: 'Гра «Територія»',
      en: '"Territory" Game',
    },
    description: {
      ua: 'Веб гра з картографічною механікою та захопленням зон.',
      en: 'Web game featuring map mechanics and zone capturing.',
    },
    category: 'games',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Nest.js', 'Next.js', 'Socket.io'],
    features: [
      {
        ua: 'Покрокова стратегічна механіка',
        en: 'Turn-based strategic mechanics',
      },
      {
        ua: 'Розрахунок території',
        en: 'Territory and area calculation',
      },
      {
        ua: 'Адаптивне ігрове поле та інтерактивний UI',
        en: 'Responsive game board and interactive UI',
      },
    ],
    githubUrl: 'https://github.com/Shura2k18/TerritoryGrab',
    demoUrl: 'https://www.territorygrab.pp.ua/',
    coverImage: '/projects/territorygrab/gameplay.gif',
    videoUrl: '/projects/territorygrab/demo.mp4',
    screenshots: [
      '/projects/territorygrab/territory-capture.png',
      '/projects/territorygrab/dice-roll.png',
      '/projects/territorygrab/demo.gif',
      '/projects/territorygrab/rooms-list.png',
      '/projects/territorygrab/lobby.png',
      '/projects/territorygrab/in-game-chat.png',
    ],
    mobileScreenshots: [
      '/projects/territorygrab/mobile-gameplay.png',
      '/projects/territorygrab/mobile-lobby.png',
    ],
    featured: true,
  },
];

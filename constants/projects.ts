import { Project } from '@/types';

export const PROJECTS: Project[] = [
  {
    id: 'chathub-messenger',
    title: 'ChatHub Messenger',
    description:
      'Веб-месенджер у реальному часі з підтримкою групових чатів, обміну файлами та сповіщеннями.',
    category: 'fullstack',
    tags: ['React', 'Express', 'Socket.io', 'MongoDB', 'Redux', 'State Management'],
    features: [
      'Миттєвий обмін повідомленнями через WebSockets',
      'Централізований стан та авторизація',
      'Зберігання даних у кластері MongoDB Atlas',
      'Захист маршрутів та адаптивний UI',
    ],
    githubUrl: 'https://github.com/Shura2k18/ChatHub',
    featured: true,
  },
  {
    id: 'territorygrub-game',
    title: 'Гра «Територія»',
    description: 'Веб гра з картографічною механікою та захопленням зон.',
    category: 'games',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Nest.js', 'Next.js', 'Socket.io'],
    features: [
      'Покрокова стратегічна механіка',
      'Розрахунок території',
      'Адаптивне ігрове поле та інтерактивний UI',
    ],
    githubUrl: 'https://github.com/Shura2k18/TerritoryGrab',
    demoUrl: 'https://www.territorygrab.pp.ua/',
    featured: true,
  },
];

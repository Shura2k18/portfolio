export interface LocalizedString {
  ua: string;
  en: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  fullDescription?: LocalizedString; // Детальний опис для окремої сторінки
  category: 'web' | 'games' | 'fullstack';
  tags: string[];
  features: LocalizedString[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  coverImage?: string; // Головне зображення/скріншот
  videoUrl?: string; // Відео демонстрація
  screenshots?: string[]; // Галерея скріншотів або GIF
  mobileScreenshots?: string[]; // Мобільні скріншоти (адаптивність)
  architecture?: string[]; // Ключові архітектурні рішення (наприклад: WebSockets, Atlas, Redux)
}

export interface TechSkill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  url: string;
  icon?: string;
}

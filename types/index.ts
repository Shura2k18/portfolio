export interface LocalizedString {
  ua: string;
  en: string;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  category: 'web' | 'games' | 'fullstack';
  tags: string[];
  features: LocalizedString[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface TechSkill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  icon?: string;
}

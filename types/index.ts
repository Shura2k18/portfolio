export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'web' | 'games' | 'fullstack';
  tags: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface TechSkill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  icon?: string;
}

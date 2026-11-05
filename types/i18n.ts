export type Language = 'ua' | 'en';

export interface Translations {
  nav: {
    projects: string;
    stack: string;
    about: string;
    contact: string;
    projectsDesc: string;
    stackDesc: string;
    aboutDesc: string;
    contactDesc: string;
  };
  hero: {
    greeting: string;
    title: string;
    description: string;
    viewProjects: string;
    contactMe: string;
    viewCv: string;
  };
  projects: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterFullstack: string;
    filterGames: string;
  };
  stack: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    description: string;
  };
  contact: {
    title: string;
    subtitle: string;
    copyEmail: string;
    copied: string;
  };
}

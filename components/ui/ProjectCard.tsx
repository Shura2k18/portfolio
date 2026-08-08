'use client';

import React from 'react';
import { Project } from '@/types';
import { Badge } from './Badge';
import { useLanguage } from '@/context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { lang } = useLanguage();

  return (
    <div className="flex h-full flex-col justify-between overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 transition-all hover:border-emerald-500/50 hover:bg-zinc-900">
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-bold text-white">{project.title[lang]}</h3>
          <Badge variant="accent">{project.category}</Badge>
        </div>
        <p className="mt-3 text-sm text-zinc-400">{project.description[lang]}</p>

        <ul className="mt-4 space-y-1.5 text-xs text-zinc-300">
          {project.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {feature[lang]}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 border-t border-zinc-800/80 pt-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-4 flex gap-4 text-sm font-medium">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-emerald-400"
            >
              GitHub -&gt;
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-400 transition-colors hover:text-emerald-400"
            >
              Live Demo -&gt;
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

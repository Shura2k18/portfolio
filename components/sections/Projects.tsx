'use client';

import { PROJECTS } from '@/constants/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useState } from 'react';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'games'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-16">
      <FadeIn delay={0.1}>
        <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />

        <div className="mb-8 flex justify-center gap-2">
          {(['all', 'fullstack', 'games'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                filter === cat
                  ? 'bg-emerald-500 text-zinc-950'
                  : 'bg-zinc-800/60 text-zinc-400 hover:text-white'
              }`}
            >
              {cat === 'all'
                ? t.projects.filterAll
                : cat === 'fullstack'
                  ? t.projects.filterFullstack
                  : t.projects.filterGames}
            </button>
          ))}
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.15} className="h-full">
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

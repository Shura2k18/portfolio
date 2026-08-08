'use client';

import { PROJECTS } from '@/constants/projects';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { useState } from 'react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'games'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-16">
      <SectionHeading title="Проєкти" subtitle="Вибрані роботи, над якими я працював" />

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
            {cat === 'all' ? 'Всі' : cat === 'fullstack' ? 'Fullstack' : 'Ігри'}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

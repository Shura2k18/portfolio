'use client';

import { TECH_STACK } from '@/constants/stack';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';

export const TechStack: React.FC = () => {
  const { t } = useLanguage();
  return (
    <FadeIn delay={0.1}>
      <section id="stack" className="py-16">
        <SectionHeading title={t.stack.title} subtitle={t.stack.subtitle} />
        <div className="flex flex-wrap justify-center gap-3">
          {TECH_STACK.map((tech) => (
            <Badge key={tech.name} variant="outline">
              {tech.name}
            </Badge>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

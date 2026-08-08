'use client';

import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';
import { useLanguage } from '@/context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <FadeIn delay={0.1}>
      <section id="about" className="py-16">
        <SectionHeading title={t.about.title} />
        <div className="mx-auto max-w-2xl text-center text-zinc-400">
          <p>{t.about.description}</p>
        </div>
      </section>
    </FadeIn>
  );
};

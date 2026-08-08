import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '../ui/FadeIn';

export const About: React.FC = () => {
  return (
    <FadeIn delay={0.1}>
      <section id="about" className="py-16">
        <SectionHeading title="Про мене" />
        <div className="mx-auto max-w-2xl text-center text-zinc-400">
          <p>
            Я займаюся веб-розробкою, фокусуючись на створенні якісних, швидких та зручних
            користувацьких інтерфейсів. Цікавлюся архітектурою проєктів, оптимізацією продуктивності
            та сучасним веб-стеком.
          </p>
        </div>
      </section>
    </FadeIn>
  );
};

import { TECH_STACK } from '@/constants/stack';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-16">
      <SectionHeading
        title="Стек технологій"
        subtitle="Інструменти, які я використовую в розробці"
      />
      <div className="flex flex-wrap justify-center gap-3">
        {TECH_STACK.map((tech) => (
          <Badge key={tech.name} variant="outline">
            {tech.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'accent';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default' }) => {
  const baseStyles =
    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors';

  const variants = {
    default: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    outline: 'bg-zinc-800/80 text-zinc-300 border border-zinc-700',
    accent: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
  };

  return <span className={`${baseStyles} ${variants[variant]}`}>{children}</span>;
};

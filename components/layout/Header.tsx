export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-lg font-bold text-emerald-400">
          &lt;MP /&gt;
        </a>
        <nav className="flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="transition-colors hover:text-white">
            Проєкти
          </a>
          <a href="#stack" className="transition-colors hover:text-white">
            Стек
          </a>
          <a href="#about" className="transition-colors hover:text-white">
            Про мене
          </a>
          <a href="#contact" className="transition-colors hover:text-white">
            Контакти
          </a>
        </nav>
      </div>
    </header>
  );
};

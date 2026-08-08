export const Hero: React.FC = () => {
  return (
    <section className="flex min-h-[70vh] flex-col justify-center py-12">
      <span className="font-mono text-sm font-semibold text-emerald-400">Привіт, я Макс</span>
      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
        Frontend &amp; Fullstack Developer
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-400">
        Розробляю сучасні веб-додатки, месенджери у реальному часі та інтерактивні ігри на стеку
        React, TypeScript та Next.js.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="#projects"
          className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
        >
          Переглянути проєкти
        </a>
        <a
          href="#contact"
          className="rounded-lg border border-zinc-700 px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
        >
          Зв'язатися
        </a>
      </div>
    </section>
  );
};

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FadeIn } from '@/components/ui/FadeIn';
import { ScrollArrow } from '@/components/ui/ScrollArrow';

export const Hero: React.FC = () => {
  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center py-12 text-center">
      <div className="flex max-w-3xl flex-col items-center">
        <FadeIn delay={0.1}>
          <span className="font-mono text-sm font-semibold text-emerald-400">Привіт, я Макс</span>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Frontend &amp; Fullstack Developer
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="mt-6 text-lg text-zinc-400">
            Розробляю сучасні веб-додатки, месенджери у реальному часі та інтерактивні ігри на стеку
            React, TypeScript та Next.js.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-zinc-950 transition-colors hover:bg-emerald-400"
            >
              Переглянути проєкти
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500 hover:text-white"
            >
              Зв'язатися
            </motion.a>
          </div>
        </FadeIn>
      </div>

      {/* Анімована стрілочка вниз */}
      <ScrollArrow targetId="projects" className="absolute bottom-8 left-1/2 -translate-x-1/2" />
    </section>
  );
};

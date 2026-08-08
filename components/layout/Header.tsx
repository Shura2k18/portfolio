'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '@/components/ui/Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { num: '01', name: 'Проєкти', href: '#projects', desc: 'Мої останні роботи та ігри' },
    { num: '02', name: 'Стек', href: '#stack', desc: 'Технології та інструменти' },
    { num: '03', name: 'Про мене', href: '#about', desc: 'Бекграунд та досвід' },
    { num: '04', name: 'Контакти', href: '#contact', desc: "Зв'язатися зі мною" },
  ];

  const toggleMenu = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 right-0 left-0 z-[100] border-b border-zinc-800/50 bg-zinc-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Logo />

          {/* Десктопне меню */}
          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Кнопка бургера */}
          <button
            onClick={toggleMenu}
            type="button"
            className="relative z-[110] flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/80 text-zinc-300 transition-transform active:scale-95 md:hidden"
            aria-label="Меню"
          >
            {isOpen ? (
              <svg
                className="pointer-events-none h-5 w-5 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="pointer-events-none h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Анімоване мобільне меню */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed inset-0 z-[90] flex flex-col justify-between overflow-hidden bg-zinc-950 px-6 pt-20 pb-8 md:hidden"
          >
            {/* Декоративне світіння по центру */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[110px]" />

            {/* Центральний блок навігації */}
            <div className="my-auto flex flex-col justify-center">
              <nav className="relative z-10 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between rounded-xl border border-zinc-900 bg-zinc-900/50 p-4 transition-all active:border-emerald-500/50 active:bg-zinc-900"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-semibold text-emerald-400/70 group-active:text-emerald-400">
                        {link.num}.
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="text-lg font-bold text-zinc-100 group-active:text-emerald-400">
                          {link.name}
                        </span>
                        <span className="text-xs text-zinc-500">{link.desc}</span>
                      </div>
                    </div>
                    <span className="font-mono text-zinc-600 transition-transform group-active:translate-x-1 group-active:text-emerald-400">
                      -&gt;
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Соціальні мережі та підніжжя */}
            <div className="relative z-10 space-y-4 border-t border-zinc-900 pt-4">
              <div className="flex justify-center gap-6 text-sm font-medium text-zinc-400">
                <a
                  href="https://t.me/your_telegram"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 active:text-emerald-400"
                >
                  Telegram
                </a>
                <a
                  href="https://linkedin.com/in/your_linkedin"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 active:text-emerald-400"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/your_github"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 active:text-emerald-400"
                >
                  GitHub
                </a>
              </div>

              <div className="text-center font-mono text-[10px] text-zinc-600">
                &lt;MP /&gt; Fullstack Developer
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

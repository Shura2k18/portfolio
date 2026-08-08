'use client';

import React, { useState } from 'react';
import { Logo } from '@/components/ui/Logo';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Проєкти', href: '#projects' },
    { name: 'Стек', href: '#stack' },
    { name: 'Про мене', href: '#about' },
    { name: 'Контакти', href: '#contact' },
  ];

  const toggleMenu = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div onClick={toggleMenu} className="h-10 w-10 bg-red-500" />
      <header className="fixed top-0 right-0 left-0 z-[100] border-b border-zinc-800/50 bg-zinc-950/95">
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

          {/* Кнопка бургера з прямими обробниками тач-подій */}
          <button
            onClick={toggleMenu}
            type="button"
            className="relative z-[110] flex h-10 w-10 touch-manipulation items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-300 select-none active:bg-zinc-800 md:hidden"
            aria-label="Переключити меню"
          >
            {isOpen ? (
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

      {/* Мобільне меню */}
      {isOpen && (
        <div className="fixed inset-0 z-[90] flex min-h-svh flex-col justify-center bg-zinc-950 px-6 pt-24 pb-8 md:hidden">
          <nav className="flex flex-col items-center gap-8 text-xl font-medium text-zinc-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                onTouchStart={closeMenu}
                className="touch-manipulation py-2 text-center transition-colors hover:text-emerald-400 active:text-emerald-400"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

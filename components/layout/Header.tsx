'use client';

import React from 'react';
import { Logo } from '@/components/ui/Logo';

export const Header: React.FC = () => {
  const navLinks = [
    { name: 'Проєкти', href: '#projects' },
    { name: 'Стек', href: '#stack' },
    { name: 'Про мене', href: '#about' },
    { name: 'Контакти', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="flex gap-6 text-sm text-zinc-400">
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
      </div>
    </header>
  );
};

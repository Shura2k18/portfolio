'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export const LangSwitcher: React.FC = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center gap-1 rounded-lg border border-zinc-800 bg-zinc-900/80 p-1 font-mono text-xs">
      <button
        onClick={() => setLang('ua')}
        className={`cursor-pointer rounded px-2 py-1 transition-colors ${
          lang === 'ua'
            ? 'bg-emerald-500 font-bold text-zinc-950'
            : 'text-zinc-400 hover:text-white'
        }`}
      >
        UA
      </button>
      <button
        onClick={() => setLang('en')}
        className={`cursor-pointer rounded px-2 py-1 transition-colors ${
          lang === 'en'
            ? 'bg-emerald-500 font-bold text-zinc-950'
            : 'text-zinc-400 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  );
};

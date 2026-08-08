'use client';

import React, { useState } from 'react';
import { SectionHeading } from '@/components/ui/SectionHeading';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'makcim2004kucheruk@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-16">
      <SectionHeading title="Контакти" subtitle="Відкритий до нових можливостей та пропозицій" />
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleCopy}
          className="rounded-lg border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-emerald-500"
        >
          {copied ? 'Скопійовано!' : `Скопіювати пошту: ${email}`}
        </button>
      </div>
    </section>
  );
};

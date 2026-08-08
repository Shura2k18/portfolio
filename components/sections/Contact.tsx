'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FadeIn } from '@/components/ui/FadeIn';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const email = 'makcim2004kucheruk@gmail.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20">
      <FadeIn>
        <SectionHeading
          title="Контакти"
          subtitle="Відкритий до нових проєктів, співпраці та цікавих пропозицій"
        />
      </FadeIn>

      <div className="mx-auto flex max-w-xl flex-col items-center gap-6">
        {/* Кнопка копіювання пошти */}
        <FadeIn delay={0.2}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleCopy}
            className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-3.5 text-sm font-medium text-white shadow-lg backdrop-blur-sm transition-colors hover:border-emerald-500 hover:bg-zinc-900"
          >
            <span>{copied ? '✓ Скопійовано!' : `📧 ${email}`}</span>
          </motion.button>
        </FadeIn>

        {/* Соцмережі */}
        <FadeIn delay={0.23}>
          <div className="flex gap-4">
            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://t.me/kucheruk_maksym"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-emerald-500/50 hover:text-emerald-400"
            >
              Telegram
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/maksym-kucheruk-190711331/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-blue-500/50 hover:text-blue-400"
            >
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/Shura2k18"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-600 hover:text-white"
            >
              GitHub
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

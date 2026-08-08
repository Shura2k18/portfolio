'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollArrowProps {
  targetId?: string;
  className?: string;
}

export const ScrollArrow: React.FC<ScrollArrowProps> = ({
  targetId = 'projects',
  className = '',
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const arrowIcon = (
    <svg
      className="h-6 w-6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  );

  const baseClasses = `p-2 text-zinc-400 transition-colors hover:text-emerald-400 ${className}`;

  // До маунту або на мобілці віддаємо статичний тег <a> без анімації
  if (!isMounted || isMobile) {
    return (
      <a href={`#${targetId}`} className={baseClasses} aria-label="Скрол до наступного блоку">
        {arrowIcon}
      </a>
    );
  }

  // На десктопі додаємо анімацію Framer Motion
  return (
    <motion.a
      href={`#${targetId}`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: [0, 10, 0] }}
      transition={{
        opacity: { delay: 0.6, duration: 0.4 },
        y: { repeat: Infinity, duration: 2, ease: 'easeInOut' },
      }}
      className={baseClasses}
      aria-label="Скрол до наступного блоку"
    >
      {arrowIcon}
    </motion.a>
  );
};

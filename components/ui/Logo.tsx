'use client';

import { motion } from 'framer-motion';

export const Logo: React.FC = () => {
  return (
    <motion.a
      href="#"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative flex items-center gap-1 font-mono text-xl font-bold tracking-tight"
    >
      <span className="text-emerald-400 transition-transform duration-300 group-hover:-translate-x-0.5">
        &lt;
      </span>
      <span className="animate-gradient bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-500 bg-[length:200%_auto] bg-clip-text text-transparent">
        MP
      </span>
      <span className="text-emerald-400 transition-transform duration-300 group-hover:translate-x-0.5">
        /&gt;
      </span>
    </motion.a>
  );
};

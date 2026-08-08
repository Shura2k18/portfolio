export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-zinc-800/50 py-8 text-center text-xs text-zinc-500">
      <p>&copy; {new Date().getFullYear()} Maksym. Built with Next.js &amp; Tailwind CSS.</p>
    </footer>
  );
};

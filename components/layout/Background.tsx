export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-zinc-950">
      <div className="absolute top-0 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
    </div>
  );
};

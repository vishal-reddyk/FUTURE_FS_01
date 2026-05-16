const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 max-w-3xl">
    <p className="text-sm uppercase tracking-[0.32em] text-cyan-400">{subtitle}</p>
    <h2 className="mt-4 text-4xl font-semibold text-slate-100 sm:text-5xl">{title}</h2>
    <div className="mt-4 h-1 w-24 rounded-full bg-cyan-500" />
  </div>
);

export default SectionHeader;

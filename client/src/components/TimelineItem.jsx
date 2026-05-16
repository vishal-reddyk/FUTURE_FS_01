const TimelineItem = ({ entry }) => (
  <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-glow">
    <div className="absolute left-6 top-0 bottom-0 w-1 bg-cyan-500/40" />
    <div className="ml-12 space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-xl font-semibold text-slate-100">{entry.title}</h3>
        <span className="rounded-full bg-slate-950 px-4 py-2 text-sm text-slate-400">{entry.period}</span>
      </div>
      <ul className="list-disc space-y-2 pl-5 text-slate-300">
        {entry.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default TimelineItem;

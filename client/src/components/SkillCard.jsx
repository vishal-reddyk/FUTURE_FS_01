const SkillCard = ({ skill }) => (
  <div className="rounded-3xl bg-slate-950/90 p-5 border border-slate-800 shadow-glow">
    <div className="flex items-center justify-between gap-4">
      <h4 className="font-semibold text-slate-100">{skill.name}</h4>
      <span className="text-sm text-slate-400">{skill.percent}%</span>
    </div>
    <div className="mt-4 h-3 rounded-full bg-slate-800">
      <div className="h-full rounded-full bg-cyan-500" style={{ width: `${skill.percent}%` }} />
    </div>
  </div>
);

export default SkillCard;

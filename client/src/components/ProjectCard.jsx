import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, onDemoClick }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/90 shadow-glow"
  >
    <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />
    <div className="p-8">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-3 py-1 text-xs uppercase tracking-[0.3em] text-cyan-300">
          Featured
        </div>
      </div>
      <p className="mt-4 text-slate-300 leading-7">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-full bg-slate-950/80 px-3 py-2 text-sm text-slate-200 border border-slate-700">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-5 py-3 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300">
          <FaGithub /> GitHub
        </a>
        {project.demoId ? (
          <button
            type="button"
            onClick={() => onDemoClick(project.demoId)}
            className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            <FaExternalLinkAlt /> Live Demo
          </button>
        ) : project.demo ? (
          <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">
            <FaExternalLinkAlt /> Live Demo
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm text-slate-400 border border-slate-700">
            Demo coming soon
          </span>
        )}
      </div>
    </div>
  </motion.article>
);

export default ProjectCard;

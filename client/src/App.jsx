import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import Navbar from './components/Navbar.jsx';
import SectionHeader from './components/SectionHeader.jsx';
import SkillCard from './components/SkillCard.jsx';
import ProjectCard from './components/ProjectCard.jsx';
import TimelineItem from './components/TimelineItem.jsx';
import ContactForm from './components/ContactForm.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import GharValueDemo from './components/GharValueDemo.jsx';
import WorkStudyDemo from './components/WorkStudyDemo.jsx';
import useActiveSection from './hooks/useActiveSection.js';
import {
  aboutData,
  heroData,
  navLinks,
  projectData,
  resumeData,
  skillCategories,
  socialLinks
} from './data/siteData.js';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });
  const [activeDemo, setActiveDemo] = useState(null);
  const activeSection = useActiveSection(navLinks.map((item) => item.href));
  const apiBase = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  const demoComponents = {
    gharvalue: <GharValueDemo />,
    workstudy: <WorkStudyDemo />
  };

  const openDemo = (demoId) => setActiveDemo(demoId);
  const closeDemo = () => setActiveDemo(null);

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.body.classList.toggle('light', !isDark);
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const headlineWords = useMemo(
    () => ['Problem Solver', 'Web Innovator', 'Full Stack Developer'],
    []
  );

  const downloadResume = () => {
    const resumeContent = `
VISHAL REDDY
Vijayawada, India
Email: karrivishalreddy6@gmail.com
GitHub: https://github.com/vishal-reddyk

EDUCATION
B.Tech in Artificial Intelligence & Data Science
KL University, 2024-2028 (3rd Year)
Specialization: Honors through Experiential Learning

PROJECTS
GharValue – Property Enhancement Recommendation Platform
A platform helping middle-class homeowners increase their home value through smart improvement decisions.
Tech: HTML5, CSS3, JavaScript
GitHub: https://github.com/vishal-reddyk/homevalue-project
Demo: https://vishal-reddyk.github.io/homevalue-project/

WorkStudyProgram - Managing Student Work-Study Progress
A web-based centralized platform facilitating communication and progress tracking for students and supervisors.
Tech: HTML5, CSS3, JavaScript
GitHub: https://github.com/vishal-reddyk/Hackthon-29
Demo: https://vishal-reddyk.github.io/Hackthon-29/

SKILLS
Frontend: HTML5, CSS3, JavaScript, React, Tailwind CSS
Backend: Node.js, Express, MySQL
Tools: Git, VS Code, Responsive Design

COURSES & CERTIFICATIONS
Full Stack Web Development (Coursera)
Completed multiple courses covering modern web development practices and frameworks
    `;
    
    const element = document.createElement('a');
    const file = new Blob([resumeContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Vishal_Reddy_Resume.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'}`}>
      <ScrollProgress />
      <Navbar links={navLinks} activeSection={activeSection} theme={theme} setTheme={setTheme} />
      <header id="home" className="section-container pt-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-[0.3em] mb-5">
              {heroData.tagline}
            </p>
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight">
                {heroData.name}
              </h1>
              <p className="text-cyan-300 text-xl font-medium">
                {heroData.title}
              </p>
              <p className={`max-w-2xl leading-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                {heroData.description}
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#resume" className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow hover:bg-cyan-400 transition">
                Download Resume <FiArrowRight />
              </a>
              <a href={socialLinks[0].href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-100 hover:bg-slate-800 transition">
                GitHub
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm transition hover:border-cyan-400 hover:text-cyan-300">
                  <social.icon className="text-lg" /> {social.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-glow"
          >
            <div className="mb-6 rounded-3xl border border-cyan-600/30 bg-gradient-to-br from-cyan-500/10 to-slate-900/40 p-6">
              <p className="uppercase tracking-[0.3em] text-cyan-300 text-sm mb-4">
                Build with confidence
              </p>
              <div className="space-y-3">
                {headlineWords.map((word) => (
                  <p key={word} className="text-2xl font-semibold text-slate-100">
                    {word}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-slate-300">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-400">Quick Snapshot</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li>Crafting responsive product experiences for modern teams.</li>
                <li>Delivering backend APIs, MySQL storage, and email workflows.</li>
                <li>Building accessible portfolios that impress recruiters.</li>
              </ul>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <div className="rounded-3xl bg-slate-950/80 p-5 text-slate-300 border border-slate-800">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Ready for hire</p>
                <p className="mt-2 text-2xl font-semibold text-cyan-300">Available</p>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      <main className="space-y-28">
        <section id="about" className="section-container">
          <SectionHeader title="About" subtitle="Profile summary & goals" />
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-glow"
            >
              <p className={`leading-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>I am a 3rd-year B.Tech student in Artificial Intelligence & Data Science at KL University, pursuing an Honors specialization through Experiential Learning. I'm a motivated developer passionate about building efficient, scalable web applications with clean interfaces and robust backend systems.</p>
              <p className={`leading-8 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>My focus is on full-stack development using React, Node.js, and MySQL. I specialize in creating responsive user experiences and implementing reliable APIs. My goal is to join a dynamic team where I can contribute my skills in web development while continuing to grow in data-driven systems and professional software delivery.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl bg-slate-950/80 p-5 border border-slate-800">
                  <h3 className="text-sm uppercase tracking-[0.24em] text-cyan-300">Education</h3>
                  <p className={`mt-3 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>B.Tech in Artificial Intelligence & Data Science, KL University (2024–2028, 3rd Year)</p>
                  <p className="mt-2 text-xs text-cyan-400">Specialization: Honors through Experiential Learning</p>
                </div>
                <div className="rounded-3xl bg-slate-950/80 p-5 border border-slate-800">
                  <h3 className="text-sm uppercase tracking-[0.24em] text-cyan-300">Current focus</h3>
                  <p className={`mt-3 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>Building responsive UIs with React, scalable APIs with Node.js, and reliable databases with MySQL.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-glow">
                <h3 className="text-xl font-semibold text-slate-100">Professional goals</h3>
                <ul className={`mt-4 list-disc space-y-3 pl-5 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  <li>Ship production-ready applications with clean React and Express architecture.</li>
                  <li>Improve developer workflows using automation and tested APIs.</li>
                  <li>Build user-first designs with fully responsive interfaces.</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="section-container">
          <SectionHeader title="Skills" subtitle="Technologies I use every day" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-glow"
              >
                <h3 className="text-lg font-semibold text-slate-100">{category.title}</h3>
                <p className="mt-3 text-slate-400 text-sm">{category.description}</p>
                <div className="mt-6 space-y-3">
                  {category.tools.map((tool) => (
                    <span key={tool} className="inline-flex items-center rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200">
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="section-container">
          <SectionHeader title="Projects" subtitle="Recent work I am proud of" />
          <div className="grid gap-8 xl:grid-cols-2">
            {projectData.map((project) => (
              <ProjectCard key={project.title} project={project} onDemoClick={openDemo} />
            ))}
          </div>
        </section>

        {activeDemo && (
          <div className="fixed inset-0 z-50 overflow-auto bg-slate-950/95 p-6 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-800 bg-slate-900/95 p-8 shadow-glow">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-3xl font-semibold text-slate-100">
                    {activeDemo === 'gharvalue' ? 'GharValue Demo' : 'WorkStudyProgram Demo'}
                  </h2>
                  <p className="mt-2 text-slate-400">This is a working demo for the selected project.</p>
                </div>
                <button
                  type="button"
                  onClick={closeDemo}
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-950 px-5 py-3 text-sm text-slate-100 hover:border-cyan-400 hover:text-cyan-300"
                >
                  Close Demo
                </button>
              </div>
              <div className="mt-8">{demoComponents[activeDemo]}</div>
            </div>
          </div>
        )}

        <section id="resume" className="section-container">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader title="Resume" subtitle="Education, certifications, and internships" />
            <button
              onClick={downloadResume}
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400 bg-cyan-400/10 px-6 py-3 text-cyan-300 transition hover:bg-cyan-400/20"
            >
              <FiDownload className="h-4 w-4" />
              Download Resume
            </button>
          </div>
          <div className="space-y-6">
            {resumeData.map((entry) => (
              <TimelineItem key={entry.title} entry={entry} />
            ))}
          </div>
        </section>

        <section id="contact" className="section-container">
          <SectionHeader title="Contact" subtitle="Let’s build something together" />
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-glow"
            >
              <h3 className="text-xl font-semibold text-slate-100">Send a message</h3>
              <p className="mt-4 text-slate-300">I’m open to full-time roles, internships, and freelance opportunities. Drop a note and I’ll reply within 24 hours.</p>
              <div className="mt-8 space-y-4 text-sm text-slate-400">
                <p><strong>Email:</strong> karrivishalreddy6@gmail.com</p>
                <p><strong>Location:</strong> Vijayawada, India</p>
              </div>
            </motion.div>
            <ContactForm apiUrl={`${apiBase}/api/contact`} />
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950/90 py-8 text-center text-slate-500">
        <p>© 2026 Vishal Reddy. Built with React, Tailwind, Express, and MySQL.</p>
      </footer>
    </div>
  );
}

export default App;

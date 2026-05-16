import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' }
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/vishal-reddyk', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vishal-reddy-k/', icon: FaLinkedin },
  { label: 'Instagram', href: 'https://instagram.com/vishal.reddy', icon: FaInstagram }
];

export const heroData = {
  tagline: 'Full Stack Web Developer',
  name: 'Vishal Reddy',
  title: 'Helping brands transform ideas into intuitive web experiences.',
  description: 'I combine clean UI design with scalable backend systems, delivering polished frontend applications and server workflows for modern teams.'
};

export const aboutData = {
  skillProgress: [
    { name: 'React.js', percent: 92 },
    { name: 'Node.js', percent: 88 },
    { name: 'MySQL', percent: 84 },
    { name: 'Express.js', percent: 82 }
  ]
};

export const skillCategories = [
  {
    title: 'Frontend',
    description: 'Modern UI development using React and CSS systems.',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    description: 'API design, authentication, and data workflows.',
    tools: ['Node.js', 'Express.js', 'REST API', 'Nodemailer']
  },
  {
    title: 'Database',
    description: 'Efficient persistence and query performance.',
    tools: ['MySQL', 'SQL', 'Database Design']
  },
  {
    title: 'Tools',
    description: 'Developer tooling for production-ready software.',
    tools: ['Git', 'GitHub', 'Vite', 'Postman', 'Figma']
  }
];

export const projectData = [
  {
    title: 'GharValue – Property Enhancement Recommendation Platform',
    description: 'A platform helping middle-class homeowners increase their home value through smart improvement decisions, featuring a dashboard with property value tracking, personalized renovation recommendations, and a curated idea library.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/vishal-reddyk/homevalue-project',
    demoId: 'gharvalue',
    demo: 'https://vishal-reddyk.github.io/homevalue-project/'
  },
  {
    title: 'WorkStudyProgram - Managing Student Work-Study Progress',
    description: 'A web-based centralized platform facilitating communication, tracking progress, managing tasks, and simplifying administrative tasks for students and supervisors in a work-study program.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/vishal-reddyk/Hackthon-29',
    demoId: 'workstudy',
    demo: 'https://vishal-reddyk.github.io/Hackthon-29/'
  }
];

export const resumeData = [
  {
    title: 'B.Tech in Artificial Intelligence & Data Science',
    period: '2024 — 2028',
    details: ['KL University, 3rd Year', 'Specialization: Honors through Experiential Learning', 'Hands-on experience with full-stack web development and modern deployment tools.']
  },
  {
    title: 'Full Stack Web Development Courses',
    period: '2024 — 2025',
    details: ['Completed multiple full-stack courses on Coursera', 'Covered modern web development practices, React, Node.js, and database design.', 'Applied learnings to build real-world projects.']
  }
];

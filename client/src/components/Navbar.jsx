import { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ links, activeSection, theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/90 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <a href="#home" className="text-lg font-semibold tracking-[0.18em] text-cyan-300">VISHAL</a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm transition ${activeSection === link.href ? 'text-cyan-300' : 'text-slate-400 hover:text-slate-100'}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <button
          type="button"
          onClick={toggleTheme}
          className="hidden md:inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
        </button>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-200 transition hover:bg-slate-800 md:hidden"
        >
          {isOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-6 pb-5 pt-4 md:hidden">
          <div className="space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-sm transition ${activeSection === link.href ? 'bg-cyan-500/10 text-cyan-300' : 'text-slate-300 hover:bg-slate-900'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

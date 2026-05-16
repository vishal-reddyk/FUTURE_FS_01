const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-900/80 px-5 py-3 text-sm text-slate-100 transition hover:border-cyan-400 hover:text-cyan-300"
    >
      <span>{theme === 'dark' ? 'Dark Mode' : 'Light Mode'}</span>
      <span className="h-4 w-4 rounded-full bg-cyan-400" />
    </button>
  );
};

export default ThemeToggle;

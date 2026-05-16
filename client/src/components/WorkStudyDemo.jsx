import { useMemo, useState } from 'react';

const WorkStudyDemo = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!task.trim()) return;

    setTasks((prev) => [
      { id: Date.now(), name: task.trim(), priority, completed: false },
      ...prev
    ]);
    setTask('');
  };

  const toggleTask = (id) => {
    setTasks((prev) => prev.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)));
  };

  const removeTask = (id) => {
    setTasks((prev) => prev.filter((item) => item.id !== id));
  };

  const filteredTasks = useMemo(() => {
    if (filter === 'Completed') return tasks.filter((item) => item.completed);
    if (filter === 'Pending') return tasks.filter((item) => !item.completed);
    return tasks;
  }, [tasks, filter]);

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr]">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-glow">
        <h3 className="text-2xl font-semibold text-slate-100">WorkStudy Program Demo</h3>
        <p className="mt-3 text-slate-400">Track tasks, mark progress, and manage your work-study routine in a simple interface.</p>
        <form className="mt-8 space-y-5" onSubmit={handleAdd}>
          <label className="block text-sm text-slate-300">
            Task name
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none"
              placeholder="Example: Finish weekly report"
            />
          </label>

          <label className="block text-sm text-slate-300">
            Priority
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>
          </label>

          <button type="submit" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Add Task</button>
        </form>
      </div>

      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-glow">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-slate-100">Task board</h3>
            <p className="mt-2 text-slate-400">Use filters and completion status to stay organized.</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-300">
            <span>Filter:</span>
            <select value={filter} onChange={(e) => setFilter(e.target.value)} className="rounded-full bg-slate-900 px-3 py-1 outline-none text-slate-100">
              <option>All</option>
              <option>Completed</option>
              <option>Pending</option>
            </select>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {filteredTasks.length === 0 ? (
            <p className="text-slate-400">No tasks yet. Add a task to start planning.</p>
          ) : (
            filteredTasks.map((item) => (
              <div key={item.id} className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className={`text-lg font-semibold ${item.completed ? 'text-emerald-300' : 'text-slate-100'}`}>{item.name}</p>
                    <p className="mt-2 text-sm text-slate-400">Priority: {item.priority}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleTask(item.id)}
                      className={`rounded-full px-4 py-2 text-sm transition ${item.completed ? 'bg-emerald-500 text-slate-950' : 'bg-slate-700 text-slate-100 hover:bg-slate-600'}`}
                    >
                      {item.completed ? 'Undo' : 'Complete'}
                    </button>
                    <button
                      type="button"
                      onClick={() => removeTask(item.id)}
                      className="rounded-full border border-rose-500 px-4 py-2 text-sm text-rose-300 hover:bg-rose-500/10"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkStudyDemo;

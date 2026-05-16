import { useState } from 'react';

const ContactForm = ({ apiUrl }) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmailFallback = () => {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:karrivishalreddy6@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus(null);

    if (!apiUrl) {
      sendEmailFallback();
      setStatus({ success: true, message: 'Opening your email client to send the message.' });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error('Backend unavailable. Falling back to email.');
      }

      const result = await response.json();
      setStatus({ success: true, message: 'Message sent successfully.' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      sendEmailFallback();
      setStatus({ success: true, message: 'Backend not available; opened email client as fallback.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-10 shadow-glow">
      <div className="grid gap-6">
        <div>
          <label className="text-sm font-medium text-slate-300">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-300">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="6"
            className="mt-3 w-full resize-none rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-cyan-400"
            placeholder="Tell me about your project."
          />
        </div>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send Message'}
      </button>

      {status && (
        <p className={`mt-4 rounded-3xl px-5 py-4 text-sm ${status.success ? 'bg-emerald-500/15 text-emerald-200' : 'bg-rose-500/15 text-rose-200'}`}>
          {status.message}
        </p>
      )}
    </form>
  );
};

export default ContactForm;

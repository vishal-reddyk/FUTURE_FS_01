import { useState } from 'react';

const defaultForm = {
  propertyType: 'House',
  location: 'City',
  area: '1200',
  bedrooms: '3',
  builtYear: '2018'
};

const recommendationsByLocation = {
  City: ['Upgrade kitchen finishes', 'Install smart lighting', 'Improve entryway curb appeal'],
  Suburb: ['Add landscaping and outdoor seating', 'Refresh bathroom fixtures', 'Create a flexible home office'],
  Rural: ['Improve storage and garage space', 'Replace windows for efficiency', 'Modernize exterior paint']
};

const GharValueDemo = () => {
  const [form, setForm] = useState(defaultForm);
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const area = Number(form.area) || 0;
    const bedrooms = Number(form.bedrooms) || 0;
    const age = Math.max(0, 2026 - Number(form.builtYear));

    const locationFactor = form.location === 'City' ? 1.45 : form.location === 'Suburb' ? 1.25 : 1.0;
    const typeFactor = form.propertyType === 'House' ? 1.3 : form.propertyType === 'Apartment' ? 1.0 : 1.15;
    const baseValue = 2200;
    const currentValue = Math.round(area * baseValue * locationFactor * typeFactor + bedrooms * 13000 - age * 450);
    const potentialValue = Math.round(currentValue * 1.18);
    const recommendationItems = recommendationsByLocation[form.location] || recommendationsByLocation.City;

    setResult({ currentValue, potentialValue, recommendationItems });
  };

  const handleReset = () => {
    setForm(defaultForm);
    setResult(null);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[0.95fr_0.9fr]">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-glow">
        <h3 className="text-2xl font-semibold text-slate-100">GharValue Mini Demo</h3>
        <p className="mt-3 text-slate-400">Enter key details and see a working property value estimate plus improvement ideas.</p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <label className="block text-sm text-slate-300">
            Property Type
            <select name="propertyType" value={form.propertyType} onChange={handleChange} className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none">
              <option>House</option>
              <option>Apartment</option>
              <option>Villa</option>
            </select>
          </label>

          <label className="block text-sm text-slate-300">
            Location
            <select name="location" value={form.location} onChange={handleChange} className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none">
              <option>City</option>
              <option>Suburb</option>
              <option>Rural</option>
            </select>
          </label>

          <label className="block text-sm text-slate-300">
            Area (sq.ft)
            <input name="area" value={form.area} onChange={handleChange} type="number" min="0" className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none" />
          </label>

          <label className="block text-sm text-slate-300">
            Bedrooms
            <input name="bedrooms" value={form.bedrooms} onChange={handleChange} type="number" min="0" className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none" />
          </label>

          <label className="block text-sm text-slate-300">
            Year Built
            <input name="builtYear" value={form.builtYear} onChange={handleChange} type="number" min="1900" className="mt-3 w-full rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none" />
          </label>

          <div className="flex flex-wrap gap-4">
            <button type="submit" className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400">Estimate Value</button>
            <button type="button" onClick={handleReset} className="rounded-full border border-slate-700 px-6 py-3 text-sm text-slate-200 transition hover:border-cyan-400">Reset</button>
          </div>
        </form>
      </div>

      <div className="rounded-[2rem] border border-slate-800 bg-slate-950/95 p-8 shadow-glow">
        <h3 className="text-2xl font-semibold text-slate-100">Results</h3>
        {result ? (
          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Current estimated value</p>
                <p className="mt-4 text-3xl font-semibold text-slate-100">₹{result.currentValue.toLocaleString()}</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Potential value after upgrades</p>
                <p className="mt-4 text-3xl font-semibold text-slate-100">₹{result.potentialValue.toLocaleString()}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Top recommendations</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-200">
                {result.recommendationItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="mt-6 text-slate-400">Fill the form to see a property estimate and improvement recommendations.</p>
        )}
      </div>
    </div>
  );
};

export default GharValueDemo;

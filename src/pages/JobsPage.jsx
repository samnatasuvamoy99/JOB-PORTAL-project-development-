import React, { useState } from 'react';
import { SlidersHorizontal, Search, X, ChevronDown } from 'lucide-react';
import JobCard from '../components/jobs/JobCard';
import { mockJobs } from '../utils/data';

const filterOptions = {
  type: ['Full-time', 'Part-time', 'Contract', 'Internship'],
  experience: ['0-1 year', '1-3 years', '3-5 years', '5+ years'],
  category: ['Engineering', 'Design', 'Marketing', 'Data Science', 'Finance', 'Sales'],
  salary: ['$30k–$60k', '$60k–$90k', '$90k–$120k', '$120k+'],
};

export default function JobsPage() {
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ type: [], category: [], remote: false });
  const [sortBy, setSortBy] = useState('newest');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleFilter = (group, value) => {
    setFilters(prev => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter(v => v !== value)
        : [...prev[group], value]
    }));
  };

  const filtered = mockJobs.filter(job => {
    const matchSearch = !search || job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase());
    const matchType = !filters.type.length || filters.type.includes(job.type);
    const matchCat = !filters.category.length || filters.category.includes(job.category);
    const matchRemote = !filters.remote || job.remote;
    return matchSearch && matchType && matchCat && matchRemote;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900">Browse Jobs</h1>
        <p className="text-gray-500 mt-1">{filtered.length} opportunities available</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar Filters */}
        <aside className={`lg:w-64 flex-shrink-0 ${filtersOpen ? 'block' : 'hidden lg:block'}`}>
          <div className="card sticky top-24">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold text-gray-800 flex items-center gap-2"><SlidersHorizontal size={16} /> Filters</h3>
              <button className="text-xs text-primary-600 hover:underline" onClick={() => setFilters({ type: [], category: [], remote: false })}>Reset all</button>
            </div>

            {/* Remote Toggle */}
            <div className="mb-5 pb-5 border-b border-gray-100">
              <label className="flex items-center justify-between cursor-pointer">
                <span className="text-sm font-medium text-gray-700">Remote Only</span>
                <div className={`w-11 h-6 rounded-full relative transition-colors ${filters.remote ? 'bg-primary-600' : 'bg-gray-200'}`}
                  onClick={() => setFilters(p => ({ ...p, remote: !p.remote }))}>
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${filters.remote ? 'translate-x-6' : 'translate-x-1'}`} />
                </div>
              </label>
            </div>

            {/* Job Type */}
            {Object.entries({ 'Job Type': filterOptions.type, 'Category': filterOptions.category }).map(([label, options]) => (
              <div key={label} className="mb-5 pb-5 border-b border-gray-100 last:border-0">
                <h4 className="text-sm font-semibold text-gray-700 mb-3">{label}</h4>
                <div className="space-y-2">
                  {options.map(opt => {
                    const group = label === 'Job Type' ? 'type' : 'category';
                    const active = filters[group].includes(opt);
                    return (
                      <label key={opt} className="flex items-center gap-2.5 cursor-pointer group">
                        <input type="checkbox" checked={active} onChange={() => toggleFilter(group, opt)}
                          className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500" />
                        <span className={`text-sm ${active ? 'text-primary-700 font-medium' : 'text-gray-600 group-hover:text-gray-800'}`}>{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="input-field pl-9"
              />
              {search && <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"><X size={14} /></button>}
            </div>
            <select value={sortBy} onChange={e => setSortBy(e.target.value)}
              className="input-field w-auto text-sm cursor-pointer">
              <option value="newest">Newest First</option>
              <option value="salary">Highest Salary</option>
              <option value="relevance">Most Relevant</option>
            </select>
            <button onClick={() => setFiltersOpen(!filtersOpen)}
              className="lg:hidden btn-outline text-sm">
              <SlidersHorizontal size={14} /> Filters
            </button>
          </div>

          {/* Active Filter Tags */}
          {(filters.type.length > 0 || filters.category.length > 0 || filters.remote) && (
            <div className="flex flex-wrap gap-2 mb-4">
              {[...filters.type, ...filters.category, ...(filters.remote ? ['Remote'] : [])].map(tag => (
                <span key={tag} className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 text-xs px-3 py-1 rounded-full">
                  {tag}
                  <button onClick={() => {
                    if (tag === 'Remote') setFilters(p => ({ ...p, remote: false }));
                    else if (filterOptions.type.includes(tag)) toggleFilter('type', tag);
                    else toggleFilter('category', tag);
                  }}>
                    <X size={11} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="card text-center py-16">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-semibold text-gray-700 mb-2">No Jobs Found</h3>
              <p className="text-gray-500 text-sm">Try adjusting your search or filters.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filtered.map(job => <JobCard key={job.id} job={job} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

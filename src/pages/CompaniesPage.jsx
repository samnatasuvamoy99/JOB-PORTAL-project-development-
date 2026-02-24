import React, { useState } from 'react';
import { Search, MapPin, Users, Briefcase } from 'lucide-react';

const companies = [
  { id: 1, name: 'TechNova Inc.', logo: 'TN', color: 'bg-blue-100 text-blue-700', industry: 'Technology', location: 'San Francisco, CA', employees: '200-500', openJobs: 12, desc: 'Building the future of cloud infrastructure and developer tooling.' },
  { id: 2, name: 'DesignHub', logo: 'DH', color: 'bg-purple-100 text-purple-700', industry: 'Design & Creative', location: 'New York, NY', employees: '50-200', openJobs: 6, desc: 'A global design platform empowering teams to create better products.' },
  { id: 3, name: 'CloudStack', logo: 'CS', color: 'bg-green-100 text-green-700', industry: 'Cloud Computing', location: 'Austin, TX', employees: '500-1000', openJobs: 18, desc: 'Enterprise-grade cloud solutions for businesses of every size.' },
  { id: 4, name: 'DataMinds', logo: 'DM', color: 'bg-yellow-100 text-yellow-700', industry: 'Data & Analytics', location: 'Seattle, WA', employees: '100-300', openJobs: 9, desc: 'Turning data into decisions with AI-powered analytics.' },
  { id: 5, name: 'GrowthLabs', logo: 'GL', color: 'bg-red-100 text-red-700', industry: 'Marketing', location: 'Chicago, IL', employees: '20-50', openJobs: 4, desc: 'Performance marketing agency helping brands scale online.' },
  { id: 6, name: 'InfraCore', logo: 'IC', color: 'bg-indigo-100 text-indigo-700', industry: 'DevOps', location: 'Remote', employees: '10-50', openJobs: 7, desc: 'Automating infrastructure for startups and enterprises.' },
];

export default function CompaniesPage() {
  const [search, setSearch] = useState('');

  const filtered = companies.filter(c =>
    !search || c.name.toLowerCase().includes(search.toLowerCase()) || c.industry.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900">Top Companies</h1>
        <p className="text-gray-500 mt-1">Discover great places to work</p>
      </div>

      <div className="relative max-w-md mb-8">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input value={search} onChange={e => setSearch(e.target.value)}
          placeholder="Search companies or industries..." className="input-field pl-9" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map(company => (
          <div key={company.id} className="card hover:shadow-md transition-shadow duration-200 group">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${company.color}`}>
                {company.logo}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">{company.name}</h3>
                <p className="text-xs text-gray-500">{company.industry}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-4">{company.desc}</p>

            <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-5">
              <span className="flex items-center gap-1"><MapPin size={12} /> {company.location}</span>
              <span className="flex items-center gap-1"><Users size={12} /> {company.employees}</span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-50">
              <span className="flex items-center gap-1.5 text-sm font-medium text-accent-600">
                <Briefcase size={14} /> {company.openJobs} open roles
              </span>
              <button className="text-xs text-primary-600 hover:text-primary-700 font-medium">View Company →</button>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🏢</div>
          <h3 className="font-semibold text-gray-700">No companies found</h3>
          <p className="text-gray-500 text-sm mt-1">Try a different search term</p>
        </div>
      )}
    </div>
  );
}

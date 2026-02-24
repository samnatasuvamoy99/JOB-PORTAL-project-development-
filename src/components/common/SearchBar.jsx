import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, Briefcase } from 'lucide-react';

export default function SearchBar({ className = '' }) {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/jobs?q=${keyword}&location=${location}`);
  };

  return (
    <form onSubmit={handleSearch} className={`bg-white rounded-2xl shadow-lg border border-gray-100 p-2 flex flex-col sm:flex-row gap-2 ${className}`}>
      <div className="flex-1 flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-xl">
        <Search size={18} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="Job title, keyword, or company"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
          className="bg-transparent w-full text-sm focus:outline-none placeholder-gray-400"
        />
      </div>
      <div className="flex-1 flex items-center gap-3 px-3 py-2 bg-gray-50 rounded-xl">
        <MapPin size={18} className="text-gray-400 flex-shrink-0" />
        <input
          type="text"
          placeholder="City, state, or remote"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="bg-transparent w-full text-sm focus:outline-none placeholder-gray-400"
        />
      </div>
      <button type="submit" className="btn-primary rounded-xl px-6 py-2.5 whitespace-nowrap">
        <Briefcase size={16} /> Search Jobs
      </button>
    </form>
  );
}

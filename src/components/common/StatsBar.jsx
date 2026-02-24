import React from 'react';

const stats = [
  { value: '12,400+', label: 'Active Jobs' },
  { value: '3,200+', label: 'Companies' },
  { value: '850K+', label: 'Job Seekers' },
  { value: '94%', label: 'Success Rate' },
];

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
      {stats.map(stat => (
        <div key={stat.label} className="text-center">
          <p className="text-2xl md:text-3xl font-display font-bold text-gray-900">{stat.value}</p>
          <p className="text-sm text-gray-500 mt-0.5">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, DollarSign, Wifi, Bookmark, ExternalLink } from 'lucide-react';

export default function JobCard({ job, compact = false }) {
  return (
    <div className={`card hover:shadow-md transition-shadow duration-200 group relative ${job.featured ? 'ring-2 ring-primary-100' : ''}`}>
      {job.featured && (
        <span className="absolute top-4 right-4 badge bg-primary-50 text-primary-700">⭐ Featured</span>
      )}

      <div className="flex items-start gap-4">
        {/* Company Logo */}
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 ${job.logoColor}`}>
          {job.logo}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
              </h3>
              <p className="text-sm text-gray-500 mt-0.5">{job.company}</p>
            </div>
            <button className="p-1.5 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition flex-shrink-0">
              <Bookmark size={16} />
            </button>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 mt-3">
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <MapPin size={12} /> {job.location}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <DollarSign size={12} /> {job.salary}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Clock size={12} /> {job.posted}
            </span>
            {job.remote && (
              <span className="flex items-center gap-1 text-xs text-accent-600">
                <Wifi size={12} /> Remote
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="badge bg-blue-50 text-blue-700">{job.type}</span>
            <span className="badge bg-gray-100 text-gray-600">{job.category}</span>
            <span className="badge bg-green-50 text-green-700">{job.experience}</span>
          </div>

          {!compact && (
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
              <Link to={`/jobs/${job.id}`} className="btn-primary text-xs py-1.5 px-3">
                Apply Now <ExternalLink size={12} />
              </Link>
              <Link to={`/jobs/${job.id}`} className="btn-outline text-xs py-1.5 px-3">
                View Details
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

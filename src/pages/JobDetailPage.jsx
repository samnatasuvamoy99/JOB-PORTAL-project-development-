import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, DollarSign, Briefcase, Clock, Wifi, ArrowLeft, Bookmark, Share2, CheckCircle, Building, Users, Globe } from 'lucide-react';
import { mockJobs } from '../utils/data';

export default function JobDetailPage() {
  const { id } = useParams();
  const job = mockJobs.find(j => j.id === parseInt(id));
  const [applied, setApplied] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!job) return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="text-6xl mb-4">😕</div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Job Not Found</h2>
      <Link to="/jobs" className="btn-primary mt-4">Browse All Jobs</Link>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Link to="/jobs" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-6">
        <ArrowLeft size={16} /> Back to Jobs
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <div className="lg:col-span-2 space-y-5">
          {/* Header Card */}
          <div className="card">
            <div className="flex items-start gap-4 mb-5">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${job.logoColor}`}>
                {job.logo}
              </div>
              <div className="flex-1">
                <h1 className="text-2xl font-display font-bold text-gray-900">{job.title}</h1>
                <p className="text-gray-600 mt-0.5 font-medium">{job.company}</p>
                <div className="flex flex-wrap gap-3 mt-3">
                  <span className="flex items-center gap-1 text-sm text-gray-500"><MapPin size={14} /> {job.location}</span>
                  <span className="flex items-center gap-1 text-sm text-gray-500"><DollarSign size={14} /> {job.salary}</span>
                  <span className="flex items-center gap-1 text-sm text-gray-500"><Briefcase size={14} /> {job.type}</span>
                  <span className="flex items-center gap-1 text-sm text-gray-500"><Clock size={14} /> Posted {job.posted}</span>
                  {job.remote && <span className="flex items-center gap-1 text-sm text-accent-600"><Wifi size={14} /> Remote</span>}
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
              {job.requirements.map(req => (
                <span key={req} className="badge bg-blue-50 text-blue-700 text-xs">{req}</span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="card">
            <h2 className="font-display font-semibold text-lg text-gray-900 mb-4">Job Description</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{job.description}</p>
            <p className="text-gray-600 leading-relaxed">
              This is a fantastic opportunity to join a dynamic and fast-growing team. You'll collaborate with talented colleagues, have ownership of your work, and be part of a culture that values innovation, growth, and work-life balance.
            </p>

            <h3 className="font-semibold text-gray-900 mt-6 mb-3">Responsibilities</h3>
            <ul className="space-y-2">
              {['Design and implement scalable solutions', 'Collaborate cross-functionally with product and design teams', 'Participate in code reviews and technical planning', 'Mentor junior team members', 'Contribute to architectural decisions'].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={15} className="text-accent-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mt-6 mb-3">Requirements</h3>
            <ul className="space-y-2">
              {[`${job.experience} of relevant experience`, ...job.requirements].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={15} className="text-primary-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="font-semibold text-gray-900 mt-6 mb-3">Benefits</h3>
            <ul className="space-y-2">
              {['Competitive salary and equity', 'Health, dental, and vision insurance', 'Flexible working hours', '20 days PTO + holidays', 'Learning & development budget'].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Apply Card */}
          <div className="card sticky top-24">
            <div className="text-center mb-5">
              <p className="text-2xl font-display font-bold text-gray-900">{job.salary}</p>
              <p className="text-sm text-gray-500">per year</p>
            </div>

            {applied ? (
              <div className="bg-accent-50 border border-accent-200 rounded-xl p-4 text-center">
                <CheckCircle size={24} className="text-accent-600 mx-auto mb-2" />
                <p className="font-semibold text-accent-700">Application Sent!</p>
                <p className="text-xs text-gray-500 mt-1">You'll hear back within 3-5 business days</p>
              </div>
            ) : (
              <button onClick={() => setApplied(true)} className="btn-primary w-full justify-center py-3 text-base">
                Apply Now
              </button>
            )}

            <div className="flex gap-2 mt-3">
              <button onClick={() => setSaved(!saved)}
                className={`flex-1 border rounded-lg py-2.5 text-sm font-medium flex items-center justify-center gap-2 transition ${saved ? 'border-primary-600 text-primary-600 bg-primary-50' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>
                <Bookmark size={15} className={saved ? 'fill-primary-600' : ''} />
                {saved ? 'Saved' : 'Save Job'}
              </button>
              <button className="border border-gray-200 rounded-lg py-2.5 px-3 text-sm text-gray-600 hover:border-gray-300 flex items-center gap-2 transition">
                <Share2 size={15} />
              </button>
            </div>

            <div className="mt-5 pt-5 border-t border-gray-100 space-y-3">
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Building size={15} className="text-gray-400" />
                <span>Company size: 50–200 employees</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Globe size={15} className="text-gray-400" />
                <span>www.{job.company.toLowerCase().replace(/\s/g, '')}.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-600">
                <Users size={15} className="text-gray-400" />
                <span>142 applicants so far</span>
              </div>
            </div>
          </div>

          {/* Similar Jobs */}
          <div className="card">
            <h3 className="font-semibold text-gray-800 mb-4">Similar Jobs</h3>
            <div className="space-y-4">
              {mockJobs.filter(j => j.id !== job.id && j.category === job.category).slice(0, 2).map(j => (
                <Link key={j.id} to={`/jobs/${j.id}`} className="block group">
                  <p className="text-sm font-medium text-gray-800 group-hover:text-primary-600 transition">{j.title}</p>
                  <p className="text-xs text-gray-500">{j.company} · {j.salary}</p>
                </Link>
              ))}
              {mockJobs.filter(j => j.id !== job.id && j.category === job.category).length === 0 && (
                <p className="text-sm text-gray-500">No similar jobs found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

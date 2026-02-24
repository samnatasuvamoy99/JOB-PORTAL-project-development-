import React, { useState } from 'react';
import { Plus, Eye, Users, TrendingUp, Briefcase, Edit, Trash2, CheckCircle, Clock, X } from 'lucide-react';

const postedJobs = [
  { id: 1, title: 'Senior Frontend Developer', applicants: 48, views: 320, status: 'Active', posted: 'Dec 10' },
  { id: 2, title: 'Backend Engineer', applicants: 31, views: 210, status: 'Active', posted: 'Dec 8' },
  { id: 3, title: 'Product Designer', applicants: 22, views: 180, status: 'Closed', posted: 'Nov 28' },
];

const applicants = [
  { id: 1, name: 'Sarah Chen', role: 'Senior Frontend Developer', status: 'Interview', avatar: 'SC', match: '95%' },
  { id: 2, name: 'Marcus Williams', role: 'Senior Frontend Developer', status: 'Review', avatar: 'MW', match: '88%' },
  { id: 3, name: 'Priya Nair', role: 'Backend Engineer', status: 'Applied', avatar: 'PN', match: '82%' },
  { id: 4, name: 'James Liu', role: 'Product Designer', status: 'Rejected', avatar: 'JL', match: '70%' },
];

const statusColors = {
  Interview: 'bg-blue-50 text-blue-700',
  Review: 'bg-yellow-50 text-yellow-700',
  Applied: 'bg-gray-100 text-gray-700',
  Rejected: 'bg-red-50 text-red-700',
  Active: 'bg-green-50 text-green-700',
  Closed: 'bg-gray-100 text-gray-600',
};

export default function EmployerDashboardPage() {
  const [showPostJob, setShowPostJob] = useState(false);
  const [jobForm, setJobForm] = useState({ title: '', location: '', type: 'Full-time', salary: '', description: '' });
  const [posted, setPosted] = useState(false);

  const stats = [
    { label: 'Active Jobs', value: '3', icon: Briefcase, color: 'bg-blue-50 text-blue-600' },
    { label: 'Total Applicants', value: '101', icon: Users, color: 'bg-purple-50 text-purple-600' },
    { label: 'Interviews', value: '12', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
    { label: 'Profile Views', value: '1.2K', icon: Eye, color: 'bg-yellow-50 text-yellow-600' },
  ];

  const handlePost = (e) => {
    e.preventDefault();
    setPosted(true);
    setTimeout(() => { setPosted(false); setShowPostJob(false); setJobForm({ title: '', location: '', type: 'Full-time', salary: '', description: '' }); }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">Employer Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage your job postings and applications</p>
        </div>
        <button onClick={() => setShowPostJob(true)} className="btn-primary">
          <Plus size={16} /> Post a Job
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(stat => (
          <div key={stat.label} className="card flex items-center gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${stat.color}`}>
              <stat.icon size={20} />
            </div>
            <div>
              <p className="text-2xl font-display font-bold text-gray-900">{stat.value}</p>
              <p className="text-xs text-gray-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Posted Jobs */}
        <div className="lg:col-span-2 space-y-5">
          <div className="card">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold text-gray-800">Job Postings</h2>
              <button onClick={() => setShowPostJob(true)} className="text-xs text-primary-600 hover:underline flex items-center gap-1">
                <Plus size={12} /> New Posting
              </button>
            </div>
            <div className="space-y-3">
              {postedJobs.map(job => (
                <div key={job.id} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-gray-800 text-sm">{job.title}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">Posted {job.posted}</p>
                    </div>
                    <span className={`badge ${statusColors[job.status]}`}>{job.status}</span>
                  </div>
                  <div className="flex items-center gap-5 mt-3 pt-3 border-t border-gray-50">
                    <span className="flex items-center gap-1 text-xs text-gray-600"><Users size={12} /> {job.applicants} applicants</span>
                    <span className="flex items-center gap-1 text-xs text-gray-600"><Eye size={12} /> {job.views} views</span>
                    <div className="ml-auto flex items-center gap-2">
                      <button className="p-1.5 text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"><Edit size={13} /></button>
                      <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition"><Trash2 size={13} /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applicants */}
          <div className="card">
            <h2 className="font-semibold text-gray-800 mb-5">Recent Applicants</h2>
            <div className="space-y-3">
              {applicants.map(app => (
                <div key={app.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                  <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {app.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-800">{app.name}</p>
                    <p className="text-xs text-gray-500 truncate">{app.role}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`badge ${statusColors[app.status]} text-xs`}>{app.status}</span>
                    <p className="text-xs text-accent-600 font-medium mt-1">{app.match} match</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="card">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp size={16} className="text-primary-600" /> Analytics
            </h3>
            <div className="space-y-3">
              {[
                { label: 'Application Rate', value: '4.2%', desc: '+0.8% this week' },
                { label: 'Avg. Time to Fill', value: '18 days', desc: '3 days faster than avg.' },
                { label: 'Offer Accept Rate', value: '78%', desc: 'Industry avg: 65%' },
              ].map(metric => (
                <div key={metric.label} className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{metric.label}</span>
                    <span className="text-sm font-bold text-gray-800">{metric.value}</span>
                  </div>
                  <p className="text-xs text-accent-600 mt-0.5">{metric.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card bg-primary-50 border-primary-100">
            <h3 className="font-semibold text-primary-800 mb-2">Upgrade to Pro</h3>
            <p className="text-xs text-primary-600 mb-4">Get featured placements, advanced analytics, and priority support.</p>
            <button className="btn-primary text-xs w-full justify-center">View Plans</button>
          </div>
        </div>
      </div>

      {/* Post Job Modal */}
      {showPostJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h2 className="font-display font-bold text-gray-900">Post a New Job</h2>
              <button onClick={() => setShowPostJob(false)} className="p-2 hover:bg-gray-100 rounded-lg transition">
                <X size={18} />
              </button>
            </div>
            <form onSubmit={handlePost} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Job Title *</label>
                <input required value={jobForm.title} onChange={e => setJobForm(p => ({ ...p, title: e.target.value }))}
                  placeholder="e.g. Senior React Developer" className="input-field" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Location</label>
                  <input value={jobForm.location} onChange={e => setJobForm(p => ({ ...p, location: e.target.value }))}
                    placeholder="City or Remote" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Type</label>
                  <select value={jobForm.type} onChange={e => setJobForm(p => ({ ...p, type: e.target.value }))}
                    className="input-field">
                    {['Full-time', 'Part-time', 'Contract', 'Internship'].map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Salary Range</label>
                <input value={jobForm.salary} onChange={e => setJobForm(p => ({ ...p, salary: e.target.value }))}
                  placeholder="e.g. $80k – $110k" className="input-field" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Job Description</label>
                <textarea rows={4} value={jobForm.description} onChange={e => setJobForm(p => ({ ...p, description: e.target.value }))}
                  placeholder="Describe the role, responsibilities, and requirements..." className="input-field resize-none" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowPostJob(false)} className="btn-outline flex-1 justify-center">Cancel</button>
                <button type="submit" className={`btn-primary flex-1 justify-center ${posted ? 'bg-accent-600' : ''}`}>
                  {posted ? <><CheckCircle size={15} /> Posted!</> : 'Post Job'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

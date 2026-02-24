import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, FileText, Bell, Star, TrendingUp, CheckCircle, Clock, X, ChevronRight, Eye, Send } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { mockJobs } from '../utils/data';

const applications = [
  { id: 1, job: 'Senior Frontend Developer', company: 'TechNova Inc.', status: 'Interview', date: 'Dec 12', color: 'text-blue-600 bg-blue-50' },
  { id: 2, job: 'Product Designer', company: 'DesignHub', status: 'Applied', date: 'Dec 10', color: 'text-yellow-600 bg-yellow-50' },
  { id: 3, job: 'Backend Engineer', company: 'CloudStack', status: 'Rejected', date: 'Dec 8', color: 'text-red-600 bg-red-50' },
  { id: 4, job: 'Data Scientist', company: 'DataMinds', status: 'Offered', date: 'Dec 5', color: 'text-green-600 bg-green-50' },
];

const alerts = [
  { id: 1, message: 'TechNova scheduled an interview for Dec 18', time: '2 hours ago', icon: Bell, color: 'text-blue-500 bg-blue-50' },
  { id: 2, message: 'DataMinds sent you a job offer!', time: '1 day ago', icon: Star, color: 'text-yellow-500 bg-yellow-50' },
  { id: 3, message: '5 new jobs matching "React Developer"', time: '2 days ago', icon: Briefcase, color: 'text-green-500 bg-green-50' },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Applications', value: '12', icon: Send, color: 'bg-blue-50 text-blue-600' },
    { label: 'Profile Views', value: '84', icon: Eye, color: 'bg-purple-50 text-purple-600' },
    { label: 'Saved Jobs', value: '7', icon: Star, color: 'bg-yellow-50 text-yellow-600' },
    { label: 'Interviews', value: '3', icon: CheckCircle, color: 'bg-green-50 text-green-600' },
  ];

  const tabs = ['overview', 'applications', 'saved', 'alerts'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">
            Welcome back, {user?.name?.charAt(0).toUpperCase() + user?.name?.slice(1)} 👋
          </h1>
          <p className="text-gray-500 mt-1">Here's what's happening with your job search</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Link to="/profile" className="btn-outline text-sm">Edit Profile</Link>
          <Link to="/jobs" className="btn-primary text-sm">🔍 Browse Jobs</Link>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { label: 'Find Jobs', icon: '🔍', to: '/jobs', color: 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-100' },
          { label: 'Upload Resume', icon: '📄', to: '/profile', color: 'bg-purple-50 hover:bg-purple-100 text-purple-700 border-purple-100' },
          { label: 'Job Alerts', icon: '🔔', to: '/dashboard', color: 'bg-yellow-50 hover:bg-yellow-100 text-yellow-700 border-yellow-100' },
          { label: 'Resources', icon: '📚', to: '/resources', color: 'bg-green-50 hover:bg-green-100 text-green-700 border-green-100' },
        ].map(action => (
          <Link key={action.label} to={action.to}
            className={`border rounded-xl p-4 text-center font-medium text-sm transition-colors ${action.color}`}>
            <div className="text-2xl mb-1">{action.icon}</div>
            {action.label}
          </Link>
        ))}
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

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 mb-6 w-fit">
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all capitalize ${activeTab === tab ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Overview / Applications */}
          {(activeTab === 'overview' || activeTab === 'applications') && (
            <div className="card">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-gray-800">Recent Applications</h2>
                <Link to="#" className="text-xs text-primary-600 hover:underline flex items-center gap-1">View all <ChevronRight size={12} /></Link>
              </div>
              <div className="space-y-3">
                {applications.map(app => (
                  <div key={app.id} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition">
                    <div className="w-10 h-10 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {app.company.substring(0, 2)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-gray-800 truncate">{app.job}</p>
                      <p className="text-xs text-gray-500">{app.company}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className={`badge ${app.color} text-xs`}>{app.status}</span>
                      <p className="text-xs text-gray-400 mt-1">{app.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Saved Jobs */}
          {activeTab === 'saved' && (
            <div className="card">
              <h2 className="font-semibold text-gray-800 mb-5">Saved Jobs</h2>
              <div className="space-y-4">
                {mockJobs.slice(0, 4).map(job => (
                  <div key={job.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0 ${job.logoColor}`}>{job.logo}</div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold text-gray-800">{job.title}</p>
                      <p className="text-xs text-gray-500">{job.company} · {job.salary}</p>
                    </div>
                    <Link to={`/jobs/${job.id}`} className="text-xs text-primary-600 hover:underline whitespace-nowrap">Apply</Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alerts */}
          {activeTab === 'alerts' && (
            <div className="card">
              <h2 className="font-semibold text-gray-800 mb-5">Notifications</h2>
              <div className="space-y-3">
                {alerts.map(alert => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${alert.color}`}>
                      <alert.icon size={16} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-800">{alert.message}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-5">
          {/* Profile Completion */}
          <div className="card">
            <h3 className="font-semibold text-gray-800 mb-4">Profile Strength</h3>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">72% Complete</span>
              <span className="text-xs text-primary-600 font-medium">Good</span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2 mb-4">
              <div className="bg-primary-600 h-2 rounded-full" style={{ width: '72%' }} />
            </div>
            <div className="space-y-2">
              {['Add a profile photo', 'Complete your skills section', 'Upload your resume'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-4 h-4 rounded-full border-2 border-gray-200 flex items-center justify-center flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link to="/profile" className="btn-outline text-xs mt-4 w-full justify-center py-2">
              Complete Profile
            </Link>
          </div>

          {/* Job Recommendations */}
          <div className="card">
            <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <TrendingUp size={16} className="text-primary-600" /> Recommended
            </h3>
            <div className="space-y-3">
              {mockJobs.slice(0, 3).map(job => (
                <Link key={job.id} to={`/jobs/${job.id}`} className="flex items-center gap-3 group">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-xs font-bold ${job.logoColor}`}>{job.logo}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-gray-800 group-hover:text-primary-600 truncate">{job.title}</p>
                    <p className="text-xs text-gray-500">{job.salary}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

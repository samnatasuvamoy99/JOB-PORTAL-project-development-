import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, CheckCircle, TrendingUp, Users, Shield } from 'lucide-react';
import SearchBar from '../components/common/SearchBar';
import StatsBar from '../components/common/StatsBar';
import JobCard from '../components/jobs/JobCard';
import { mockJobs, categories, testimonials } from '../utils/data';

export default function HomePage() {
  const featuredJobs = mockJobs.filter(j => j.featured);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm mb-6">
            <TrendingUp size={14} className="text-accent-400" />
            <span>Over 1,200 new jobs added this week</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
            Find Your <span className="text-accent-400">Dream Job</span><br />With Confidence
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto mb-10">
            Connect with top companies, build your career, and discover opportunities that align with your skills and aspirations.
          </p>
          <SearchBar className="max-w-3xl mx-auto" />
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6 text-sm text-primary-200">
            <span>Popular:</span>
            {['Remote', 'Frontend', 'Marketing', 'Design', 'Data Science'].map(tag => (
              <Link key={tag} to={`/jobs?q=${tag}`} className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition">
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-gray-100">
        <StatsBar />
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">Explore by Category</h2>
            <p className="text-gray-500 mt-1">Find your perfect role in your field</p>
          </div>
          <Link to="/jobs" className="text-sm text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1">
            All Categories <ArrowRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.name}
              to={`/jobs?category=${cat.name}`}
              className="card hover:shadow-md hover:border-primary-200 transition-all duration-200 text-center group cursor-pointer"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-gray-800 text-sm group-hover:text-primary-600 transition-colors">{cat.name}</h3>
              <p className="text-xs text-gray-500 mt-1">{cat.count.toLocaleString()} jobs</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">Featured Jobs</h2>
              <p className="text-gray-500 mt-1">Hand-picked opportunities from top companies</p>
            </div>
            <Link to="/jobs" className="btn-outline text-sm">
              View All Jobs <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">How JobConnect Works</h2>
          <p className="text-gray-500 mt-2">Three simple steps to your next career move</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { step: '01', icon: Users, title: 'Create Your Profile', desc: 'Sign up and build a compelling profile with your skills, experience, and career goals.' },
            { step: '02', icon: Star, title: 'Discover Opportunities', desc: 'Browse thousands of jobs or let our smart system match you with perfect opportunities.' },
            { step: '03', icon: CheckCircle, title: 'Apply & Get Hired', desc: 'Apply with one click and track your applications in real time until you land the role.' },
          ].map(item => (
            <div key={item.step} className="text-center">
              <div className="relative inline-flex mb-5">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <item.icon size={28} className="text-primary-600" />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-primary-600 text-white text-xs font-bold rounded-full flex items-center justify-center">{item.step}</span>
              </div>
              <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-primary-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900">Success Stories</h2>
            <p className="text-gray-500 mt-2">Hear from people who found their dream jobs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="card">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl p-10 md:p-14 text-center text-white">
          <Shield size={40} className="mx-auto mb-4 text-primary-200" />
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Ready to Take the Next Step?</h2>
          <p className="text-primary-100 mb-8 max-w-lg mx-auto">Join 850,000+ professionals who found their dream jobs through JobConnect. It's free to get started.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/register?role=jobseeker" className="bg-white text-primary-700 font-semibold px-6 py-3 rounded-xl hover:bg-primary-50 transition inline-flex items-center gap-2">
              Create Free Account <ArrowRight size={16} />
            </Link>
            <Link to="/register?role=employer" className="border border-white/40 text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Hire Talent
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

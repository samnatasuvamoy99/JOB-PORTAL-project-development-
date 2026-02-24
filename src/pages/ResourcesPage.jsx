import React, { useState } from 'react';
import { BookOpen, FileText, TrendingUp, Video, ChevronRight, Search, Clock, User } from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Resources' },
  { id: 'resume', label: 'Resume Tips' },
  { id: 'interview', label: 'Interview Prep' },
  { id: 'career', label: 'Career Growth' },
  { id: 'salary', label: 'Salary Guide' },
];

const articles = [
  {
    id: 1,
    category: 'resume',
    title: '10 Resume Mistakes That Are Costing You Interviews',
    desc: 'Avoid these common resume pitfalls and increase your callback rate significantly.',
    author: 'Emily Carter',
    readTime: '5 min read',
    icon: FileText,
    color: 'bg-blue-50 text-blue-600',
    tag: 'Resume Tips',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    id: 2,
    category: 'interview',
    title: 'How to Answer "Tell Me About Yourself" Perfectly',
    desc: 'Master the most common interview question with a proven framework that impresses hiring managers.',
    author: 'James Liu',
    readTime: '7 min read',
    icon: Video,
    color: 'bg-purple-50 text-purple-600',
    tag: 'Interview Prep',
    tagColor: 'bg-purple-50 text-purple-700',
  },
  {
    id: 3,
    category: 'salary',
    title: 'How to Negotiate Your Salary Like a Pro',
    desc: 'Step-by-step tactics to negotiate a higher salary without risking your job offer.',
    author: 'Priya Nair',
    readTime: '6 min read',
    icon: TrendingUp,
    color: 'bg-green-50 text-green-600',
    tag: 'Salary Guide',
    tagColor: 'bg-green-50 text-green-700',
  },
  {
    id: 4,
    category: 'career',
    title: 'Switching Careers at 30: A Complete Guide',
    desc: 'Everything you need to know about making a successful career pivot at any stage of life.',
    author: 'Marcus Williams',
    readTime: '10 min read',
    icon: BookOpen,
    color: 'bg-yellow-50 text-yellow-600',
    tag: 'Career Growth',
    tagColor: 'bg-yellow-50 text-yellow-700',
  },
  {
    id: 5,
    category: 'resume',
    title: 'Writing a Resume with No Experience',
    desc: 'Fresh graduate? Learn how to build a standout resume even without professional experience.',
    author: 'Sarah Chen',
    readTime: '4 min read',
    icon: FileText,
    color: 'bg-blue-50 text-blue-600',
    tag: 'Resume Tips',
    tagColor: 'bg-blue-50 text-blue-700',
  },
  {
    id: 6,
    category: 'interview',
    title: 'Top 50 Behavioral Interview Questions & Answers',
    desc: 'Prepare for your next interview with the most common behavioral questions and STAR-method answers.',
    author: 'Emily Carter',
    readTime: '15 min read',
    icon: Video,
    color: 'bg-purple-50 text-purple-600',
    tag: 'Interview Prep',
    tagColor: 'bg-purple-50 text-purple-700',
  },
  {
    id: 7,
    category: 'salary',
    title: '2024 Tech Salary Guide by Role & Location',
    desc: 'Comprehensive salary data for software engineers, designers, and product managers across top cities.',
    author: 'James Liu',
    readTime: '8 min read',
    icon: TrendingUp,
    color: 'bg-green-50 text-green-600',
    tag: 'Salary Guide',
    tagColor: 'bg-green-50 text-green-700',
  },
  {
    id: 8,
    category: 'career',
    title: 'How to Build Your Personal Brand on LinkedIn',
    desc: 'Optimize your LinkedIn profile to attract recruiters and grow your professional network.',
    author: 'Priya Nair',
    readTime: '6 min read',
    icon: BookOpen,
    color: 'bg-yellow-50 text-yellow-600',
    tag: 'Career Growth',
    tagColor: 'bg-yellow-50 text-yellow-700',
  },
];

const salaryData = [
  { role: 'Frontend Developer', entry: '$65k', mid: '$110k', senior: '$155k' },
  { role: 'Backend Developer', entry: '$70k', mid: '$115k', senior: '$165k' },
  { role: 'Product Designer', entry: '$60k', mid: '$95k', senior: '$140k' },
  { role: 'Data Scientist', entry: '$80k', mid: '$125k', senior: '$175k' },
  { role: 'Product Manager', entry: '$75k', mid: '$120k', senior: '$170k' },
  { role: 'DevOps Engineer', entry: '$72k', mid: '$118k', senior: '$162k' },
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = articles.filter(a => {
    const matchCat = activeCategory === 'all' || a.category === activeCategory;
    const matchSearch = !search || a.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-900 to-primary-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Career Resources</h1>
          <p className="text-primary-100 text-lg mb-8">Expert guides, tips, and tools to help you land your dream job</p>
          <div className="relative max-w-xl mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search articles and guides..."
              className="w-full pl-11 pr-4 py-3 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-300"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16">
          {filtered.map(article => (
            <div key={article.id} className="card hover:shadow-md transition-shadow duration-200 group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${article.color}`}>
                  <article.icon size={18} />
                </div>
                <span className={`badge ${article.tagColor} text-xs`}>{article.tag}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                {article.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">{article.desc}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-xs font-bold">
                    {article.author.charAt(0)}
                  </div>
                  <span className="text-xs text-gray-500">{article.author}</span>
                </div>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock size={11} /> {article.readTime}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">📚</div>
            <h3 className="font-semibold text-gray-700">No articles found</h3>
            <p className="text-gray-500 text-sm mt-1">Try a different search term</p>
          </div>
        )}

        {/* Salary Guide Table */}
        <div className="card mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-display font-bold text-gray-900">2024 Salary Guide</h2>
              <p className="text-gray-500 text-sm mt-1">Average compensation by role and experience level</p>
            </div>
            <TrendingUp size={20} className="text-primary-600" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left py-3 px-4 text-gray-500 font-medium">Role</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium">Entry Level</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium">Mid Level</th>
                  <th className="text-center py-3 px-4 text-gray-500 font-medium">Senior Level</th>
                </tr>
              </thead>
              <tbody>
                {salaryData.map((row, i) => (
                  <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition">
                    <td className="py-3 px-4 font-medium text-gray-800">{row.role}</td>
                    <td className="py-3 px-4 text-center text-gray-600">{row.entry}</td>
                    <td className="py-3 px-4 text-center text-primary-600 font-medium">{row.mid}</td>
                    <td className="py-3 px-4 text-center text-accent-600 font-medium">{row.senior}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { title: 'Resume Checklist', icon: '✅', items: ['Use action verbs', 'Quantify achievements', 'Keep it to 1-2 pages', 'Tailor for each job', 'Proofread carefully'] },
            { title: 'Interview Tips', icon: '🎯', items: ['Research the company', 'Prepare STAR answers', 'Ask thoughtful questions', 'Dress appropriately', 'Follow up with a thank-you'] },
            { title: 'Job Search Strategy', icon: '🔍', items: ['Set daily application goals', 'Network actively', 'Track your applications', 'Optimize LinkedIn profile', 'Consider all opportunities'] },
          ].map(tip => (
            <div key={tip.title} className="card">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span>{tip.icon}</span> {tip.title}
              </h3>
              <ul className="space-y-2">
                {tip.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <ChevronRight size={14} className="text-primary-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

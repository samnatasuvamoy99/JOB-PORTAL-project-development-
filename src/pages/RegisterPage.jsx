import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Eye, EyeOff, Briefcase, Mail, Lock, User, Building } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function RegisterPage() {
  const [searchParams] = useSearchParams();
  const defaultRole = searchParams.get('role') || 'jobseeker';
  const [form, setForm] = useState({ name: '', email: '', password: '', role: defaultRole, company: '' });
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password) { setError('Please fill in all required fields.'); return; }
    if (form.password.length < 6) { setError('Password must be at least 6 characters.'); return; }
    login(form.email, form.role);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="bg-primary-600 p-2 rounded-xl">
              <Briefcase size={22} className="text-white" />
            </div>
            <span className="font-display font-bold text-2xl">Job<span className="text-primary-600">Connect</span></span>
          </Link>
          <h1 className="text-2xl font-display font-bold text-gray-900">Create your account</h1>
          <p className="text-gray-500 mt-1">Start your journey today — it's free</p>
        </div>

        <div className="card shadow-md">
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            {[{ val: 'jobseeker', label: '🙋 Job Seeker' }, { val: 'employer', label: '🏢 Employer' }].map(r => (
              <button key={r.val} onClick={() => setForm(p => ({ ...p, role: r.val }))}
                className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${form.role === r.val ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>
                {r.label}
              </button>
            ))}
          </div>

          {error && <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-4">{error}</div>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
              <div className="relative">
                <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="text" placeholder="John Doe" value={form.name}
                  onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                  className="input-field pl-9" />
              </div>
            </div>

            {form.role === 'employer' && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
                <div className="relative">
                  <Building size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input type="text" placeholder="Acme Corp" value={form.company}
                    onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                    className="input-field pl-9" />
                </div>
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type="email" placeholder="you@example.com" value={form.email}
                  onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                  className="input-field pl-9" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input type={showPass ? 'text' : 'password'} placeholder="Min 6 characters" value={form.password}
                  onChange={e => setForm(p => ({ ...p, password: e.target.value }))}
                  className="input-field pl-9 pr-10" />
                <button type="button" onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              By registering, you agree to our{' '}
              <a href="#" className="text-primary-600 hover:underline">Terms of Service</a> and{' '}
              <a href="#" className="text-primary-600 hover:underline">Privacy Policy</a>.
            </p>

            <button type="submit" className="btn-primary w-full justify-center py-3">
              Create Account
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary-600 font-medium hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

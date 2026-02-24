import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Briefcase, Bell, User, Menu, X, ChevronDown, LogOut, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navLinks = [
    { label: 'Find Jobs', to: '/jobs' },
    { label: 'Companies', to: '/companies' },
    { label: 'Resources', to: '/resources' },
  ];

  const handleLogout = () => {
    logout();
    navigate('/');
    setDropdownOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-primary-600 p-1.5 rounded-lg">
              <Briefcase size={20} className="text-white" />
            </div>
            <span className="font-display font-bold text-xl text-gray-900">Job<span className="text-primary-600">Connect</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors ${location.pathname === link.to ? 'text-primary-600' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-3">
            {user ? (
              <>
                {/* Role-based quick action button */}
                {user.role === 'employer' ? (
                  <Link to="/employer" className="btn-primary text-sm">
                    + Post a Job
                  </Link>
                ) : (
                  <Link to="/jobs" className="btn-primary text-sm">
                    Find Jobs
                  </Link>
                )}

                <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition">
                  <Bell size={18} />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-1.5 transition"
                  >
                    <div className="w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{user.name}</span>
                    <ChevronDown size={14} className="text-gray-500" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-52 bg-white rounded-xl shadow-lg border border-gray-100 py-1 z-50">
                      <div className="px-4 py-2.5 border-b border-gray-100">
                        <p className="text-xs text-gray-500">Signed in as <span className="font-semibold text-primary-600">{user.role}</span></p>
                        <p className="text-sm font-medium text-gray-800 truncate">{user.email}</p>
                      </div>
                      {user.role === 'employer' ? (
                        <Link to="/employer" onClick={() => setDropdownOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          <User size={15} /> Employer Dashboard
                        </Link>
                      ) : (
                        <Link to="/dashboard" onClick={() => setDropdownOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                          <User size={15} /> Dashboard
                        </Link>
                      )}
                      <Link to="/profile" onClick={() => setDropdownOpen(false)} className="flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                        <Settings size={15} /> Profile Settings
                      </Link>
                      <button onClick={handleLogout} className="flex items-center gap-2.5 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                        <LogOut size={15} /> Sign Out
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="text-sm font-medium text-gray-600 hover:text-gray-900 px-4 py-2">Sign In</Link>
                <Link to="/register" className="btn-primary text-sm">Post a Job</Link>
                <Link to="/register?role=jobseeker" className="btn-outline text-sm">Get Hired</Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 rounded-lg text-gray-600" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-2">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-primary-600 py-2">
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            {user ? (
              <button onClick={handleLogout} className="btn-outline text-sm w-full justify-center">Sign Out</button>
            ) : (
              <>
                <Link to="/login" onClick={() => setMobileOpen(false)} className="btn-outline text-sm text-center">Sign In</Link>
                <Link to="/register" onClick={() => setMobileOpen(false)} className="btn-primary text-sm text-center justify-center">Get Started</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

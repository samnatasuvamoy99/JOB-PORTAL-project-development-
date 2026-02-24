import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-8xl font-display font-bold text-primary-100 mb-4">404</p>
        <h1 className="text-2xl font-display font-bold text-gray-900 mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/" className="btn-primary"><Home size={15} /> Go Home</Link>
          <Link to="/jobs" className="btn-outline"><Briefcase size={15} /> Browse Jobs</Link>
        </div>
      </div>
    </div>
  );
}

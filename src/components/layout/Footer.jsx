import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary-600 p-1.5 rounded-lg">
                <Briefcase size={18} className="text-white" />
              </div>
              <span className="font-display font-bold text-lg text-white">Job<span className="text-primary-400">Connect</span></span>
            </div>
            <p className="text-sm leading-relaxed mb-4">The modern platform connecting talented professionals with great companies worldwide.</p>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors">
                  <Icon size={15} className="text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            { title: 'For Job Seekers', links: ['Browse Jobs', 'Resume Builder', 'Career Advice', 'Salary Guide', 'Job Alerts'] },
            { title: 'For Employers', links: ['Post a Job', 'Browse Resumes', 'Pricing', 'Recruitment Tools', 'Employer Blog'] },
            { title: 'Company', links: ['About Us', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs">© 2024 JobConnect. All rights reserved.</p>
          <p className="text-xs">Made with ❤️ for job seekers everywhere</p>
        </div>
      </div>
    </footer>
  );
}

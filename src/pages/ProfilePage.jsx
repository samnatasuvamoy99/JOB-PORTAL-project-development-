import React, { useState } from 'react';
import { Camera, Plus, X, Save, Upload, User, MapPin, Globe, Phone, Linkedin } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const initialProfile = {
  name: 'Alex Johnson',
  title: 'Senior Frontend Developer',
  location: 'San Francisco, CA',
  phone: '+1 (555) 000-1234',
  website: 'alexjohnson.dev',
  linkedin: 'linkedin.com/in/alexjohnson',
  about: 'Passionate frontend developer with 6+ years of experience building scalable web applications using React, TypeScript, and modern tooling.',
  skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Tailwind CSS', 'PostgreSQL'],
  experience: [
    { id: 1, role: 'Senior Frontend Developer', company: 'TechNova Inc.', period: '2022 – Present', desc: 'Led development of the company\'s design system and core web platform.' },
    { id: 2, role: 'Frontend Developer', company: 'StartupXYZ', period: '2019 – 2022', desc: 'Built customer-facing features used by 200K+ users.' },
  ],
  education: [
    { id: 1, degree: 'B.Sc. Computer Science', school: 'University of California', year: '2019' },
  ],
};

export default function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState(initialProfile);
  const [newSkill, setNewSkill] = useState('');
  const [saved, setSaved] = useState(false);
  const [activeSection, setActiveSection] = useState('personal');

  const sections = ['personal', 'experience', 'education', 'skills', 'resume'];

  const addSkill = () => {
    if (newSkill && !profile.skills.includes(newSkill)) {
      setProfile(p => ({ ...p, skills: [...p.skills, newSkill] }));
      setNewSkill('');
    }
  };

  const removeSkill = (s) => setProfile(p => ({ ...p, skills: p.skills.filter(sk => sk !== s) }));

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-bold text-gray-900">My Profile</h1>
          <p className="text-gray-500 mt-1">Manage your professional profile and resume</p>
        </div>
        <button onClick={handleSave} className={`btn-primary text-sm ${saved ? 'bg-accent-600' : ''}`}>
          <Save size={15} /> {saved ? 'Saved!' : 'Save Changes'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="card text-center mb-4">
            <div className="relative inline-block mb-3">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 text-2xl font-bold mx-auto">
                {profile.name.charAt(0)}
              </div>
              <button className="absolute bottom-0 right-0 w-7 h-7 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition">
                <Camera size={13} />
              </button>
            </div>
            <h3 className="font-semibold text-gray-900">{profile.name}</h3>
            <p className="text-sm text-gray-500 mt-0.5">{profile.title}</p>
            <p className="text-xs text-gray-400 mt-1">{profile.location}</p>
          </div>

          <div className="card">
            <nav className="space-y-1">
              {sections.map(sec => (
                <button key={sec} onClick={() => setActiveSection(sec)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition capitalize ${activeSection === sec ? 'bg-primary-50 text-primary-700' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'}`}>
                  {sec}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-5">
          {/* Personal Info */}
          {activeSection === 'personal' && (
            <div className="card">
              <h2 className="font-semibold text-gray-900 mb-5">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { label: 'Full Name', key: 'name', icon: User },
                  { label: 'Professional Title', key: 'title', icon: null },
                  { label: 'Location', key: 'location', icon: MapPin },
                  { label: 'Phone', key: 'phone', icon: Phone },
                  { label: 'Website', key: 'website', icon: Globe },
                  { label: 'LinkedIn', key: 'linkedin', icon: Linkedin },
                ].map(field => (
                  <div key={field.key}>
                    <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">{field.label}</label>
                    <input value={profile[field.key]} onChange={e => setProfile(p => ({ ...p, [field.key]: e.target.value }))}
                      className="input-field text-sm" />
                  </div>
                ))}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium text-gray-500 mb-1.5 uppercase tracking-wide">About Me</label>
                  <textarea rows={4} value={profile.about} onChange={e => setProfile(p => ({ ...p, about: e.target.value }))}
                    className="input-field text-sm resize-none" />
                </div>
              </div>
            </div>
          )}

          {/* Skills */}
          {activeSection === 'skills' && (
            <div className="card">
              <h2 className="font-semibold text-gray-900 mb-5">Skills</h2>
              <div className="flex flex-wrap gap-2 mb-4">
                {profile.skills.map(skill => (
                  <span key={skill} className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 text-sm px-3 py-1.5 rounded-full">
                    {skill}
                    <button onClick={() => removeSkill(skill)} className="hover:text-red-500 transition"><X size={12} /></button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input value={newSkill} onChange={e => setNewSkill(e.target.value)} onKeyDown={e => e.key === 'Enter' && addSkill()}
                  placeholder="Add a skill..." className="input-field text-sm flex-1" />
                <button onClick={addSkill} className="btn-primary text-sm px-4">
                  <Plus size={14} /> Add
                </button>
              </div>
            </div>
          )}

          {/* Experience */}
          {activeSection === 'experience' && (
            <div className="card">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-gray-900">Work Experience</h2>
                <button className="text-xs text-primary-600 hover:underline flex items-center gap-1">
                  <Plus size={13} /> Add Experience
                </button>
              </div>
              <div className="space-y-5">
                {profile.experience.map((exp, i) => (
                  <div key={exp.id} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <input value={exp.role} onChange={e => {
                          const newExp = [...profile.experience];
                          newExp[i].role = e.target.value;
                          setProfile(p => ({ ...p, experience: newExp }));
                        }} className="font-semibold text-gray-800 text-sm bg-transparent border-b border-transparent hover:border-gray-200 focus:border-primary-400 focus:outline-none w-full" />
                        <p className="text-xs text-gray-500 mt-0.5">{exp.company} · {exp.period}</p>
                      </div>
                    </div>
                    <textarea rows={2} value={exp.desc} onChange={e => {
                      const newExp = [...profile.experience];
                      newExp[i].desc = e.target.value;
                      setProfile(p => ({ ...p, experience: newExp }));
                    }} className="mt-2 w-full text-sm text-gray-600 bg-transparent resize-none focus:outline-none border border-transparent focus:border-gray-200 rounded p-1" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Education */}
          {activeSection === 'education' && (
            <div className="card">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-semibold text-gray-900">Education</h2>
                <button className="text-xs text-primary-600 hover:underline flex items-center gap-1">
                  <Plus size={13} /> Add Education
                </button>
              </div>
              <div className="space-y-4">
                {profile.education.map(edu => (
                  <div key={edu.id} className="border border-gray-100 rounded-xl p-4">
                    <p className="font-semibold text-gray-800 text-sm">{edu.degree}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{edu.school} · Class of {edu.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Resume */}
          {activeSection === 'resume' && (
            <div className="card">
              <h2 className="font-semibold text-gray-900 mb-5">Resume</h2>
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-10 text-center hover:border-primary-300 transition cursor-pointer">
                <Upload size={32} className="mx-auto text-gray-400 mb-3" />
                <p className="font-medium text-gray-700 mb-1">Upload your resume</p>
                <p className="text-sm text-gray-400 mb-4">PDF or DOCX, max 5MB</p>
                <label className="btn-primary text-sm cursor-pointer">
                  <input type="file" accept=".pdf,.docx" className="hidden" />
                  Choose File
                </label>
              </div>
              <div className="mt-4 p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center text-red-600 text-xs font-bold">PDF</div>
                  Alex_Johnson_Resume.pdf
                </div>
                <span className="text-xs text-gray-400">Uploaded Dec 2024</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

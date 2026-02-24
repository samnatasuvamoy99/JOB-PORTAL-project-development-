# 🚀 JobConnect – Job Portal Frontend

A professional job portal built with **React** and **Tailwind CSS**.

## ✨ Features

- **Home Page** – Hero, search, categories, featured jobs, testimonials
- **Job Listings** – Search, filter by type/category/remote, sort
- **Job Detail** – Full description, apply button, save job, similar jobs
- **Authentication** – Sign up / Login with role selection (Job Seeker / Employer)
- **Job Seeker Dashboard** – Applications tracker, saved jobs, notifications, profile completion
- **Profile Management** – Personal info, skills, experience, education, resume upload
- **Employer Dashboard** – Post jobs modal, applicant management, analytics
- **Companies Page** – Browse top companies
- **Responsive** – Works on mobile, tablet, and desktop

## 📁 Folder Structure

```
src/
├── components/
│   ├── common/
│   │   ├── SearchBar.jsx
│   │   ├── StatsBar.jsx
│   │   └── ProtectedRoute.jsx
│   ├── jobs/
│   │   └── JobCard.jsx
│   └── layout/
│       ├── Navbar.jsx
│       └── Footer.jsx
├── context/
│   └── AuthContext.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── JobsPage.jsx
│   ├── JobDetailPage.jsx
│   ├── LoginPage.jsx
│   ├── RegisterPage.jsx
│   ├── DashboardPage.jsx
│   ├── ProfilePage.jsx
│   ├── CompaniesPage.jsx
│   ├── EmployerDashboardPage.jsx
│   └── NotFoundPage.jsx
├── utils/
│   └── data.js
├── App.jsx
├── index.js
└── index.css
```

## 🛠️ Setup & Run

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

The app will open at **http://localhost:3000**

## 🎨 Design System

- **Colors**: Blue primary (#2563eb), Green accent (#10b981)
- **Fonts**: Sora (headings), DM Sans (body)
- **Components**: Cards, Badges, Buttons (Primary/Outline), Input Fields

## 🔑 Demo Login

- Go to `/login` or `/register`
- Enter any email + password (6+ chars)
- Choose Job Seeker or Employer role
- Click Sign In / Create Account

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/jobs` | Job Listings |
| `/jobs/:id` | Job Detail |
| `/companies` | Companies |
| `/login` | Login |
| `/register` | Register |
| `/dashboard` | Seeker Dashboard (auth) |
| `/profile` | Profile Edit (auth) |
| `/employer` | Employer Dashboard (auth) |

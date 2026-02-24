import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/common/ProtectedRoute';

import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import JobDetailPage from './pages/JobDetailPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import CompaniesPage from './pages/CompaniesPage';
import EmployerDashboardPage from './pages/EmployerDashboardPage';
import ResourcesPage from './pages/ResourcesPage';
import NotFoundPage from './pages/NotFoundPage';

const Layout = ({ children, hideFooter }) => (
  <>
    <Navbar />
    <main className="min-h-screen">{children}</main>
    {!hideFooter && <Footer />}
  </>
);

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/jobs" element={<Layout><JobsPage /></Layout>} />
          <Route path="/jobs/:id" element={<Layout><JobDetailPage /></Layout>} />
          <Route path="/companies" element={<Layout><CompaniesPage /></Layout>} />
          <Route path="/resources" element={<Layout><ResourcesPage /></Layout>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Layout><DashboardPage /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Layout><ProfilePage /></Layout>
            </ProtectedRoute>
          } />
          <Route path="/employer" element={
            <ProtectedRoute>
              <Layout><EmployerDashboardPage /></Layout>
            </ProtectedRoute>
          } />
          <Route path="*" element={<Layout><NotFoundPage /></Layout>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { DashboardLayout } from '../layouts/DashboardLayout';
import { ProtectedRoute } from '../components/dashboard/ProtectedRoute';

// Public Pages
import { HomePage } from '../pages/HomePage';
import { AboutPage } from '../pages/AboutPage';
import { ServicesPage } from '../pages/ServicesPage';
import { ServiceDetailPage } from '../pages/ServiceDetailPage';
import { TeamPage } from '../pages/TeamPage';
import { LawyerDetailPage } from '../pages/LawyerDetailPage';
import { AppointmentsPage } from '../pages/AppointmentsPage';
import { ResourcesPage } from '../pages/ResourcesPage';
import { ResourceDetailPage } from '../pages/ResourceDetailPage';
import { ContactPage } from '../pages/ContactPage';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicyPage';
import { TermsPage } from '../pages/TermsPage';
import { NotFoundPage } from '../pages/NotFoundPage';

// Chamber Staff & Dashboard Pages
import { LoginPage } from '../pages/LoginPage';
import { DashboardOverviewPage } from '../pages/dashboard/DashboardOverviewPage';
import { DashboardAppointmentsPage } from '../pages/dashboard/DashboardAppointmentsPage';
import { DashboardContactsPage } from '../pages/dashboard/DashboardContactsPage';
import { DashboardSettingsPage } from '../pages/dashboard/DashboardSettingsPage';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Client-Facing Portal */}
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="services/:slug" element={<ServiceDetailPage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team/:slug" element={<LawyerDetailPage />} />
        <Route path="appointments" element={<AppointmentsPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="resources/:slug" element={<ResourceDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="terms" element={<TermsPage />} />
      </Route>

      {/* Staff Login */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
      <Route path="/admin/login" element={<Navigate to="/login" replace />} />

      {/* Protected Chamber Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardOverviewPage />} />
        <Route path="appointments" element={<DashboardAppointmentsPage />} />
        <Route path="contacts" element={<DashboardContactsPage />} />
        <Route path="settings" element={<DashboardSettingsPage />} />
      </Route>

      {/* 404 Catch-All */}
      <Route path="*" element={<RootLayout><NotFoundPage /></RootLayout>} />
    </Routes>
  );
};

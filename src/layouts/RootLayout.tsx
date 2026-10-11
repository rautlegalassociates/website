import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { TopBar } from '../components/common/TopBar';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { AppointmentModal } from '../features/appointments/AppointmentModal';
import { FloatingActionHub } from '../components/common/FloatingActionHub';

export const RootLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5F0] text-[#24282D]">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <AppointmentModal />
      <FloatingActionHub />
    </div>
  );
};

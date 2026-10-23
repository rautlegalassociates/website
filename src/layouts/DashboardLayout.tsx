import React, { useState, useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarCheck,
  MessageSquare,
  Settings,
  LogOut,
  ExternalLink,
  Menu,
  X,
  Shield,
  Clock,
} from "lucide-react";
import { BrandLogo } from "../components/common/BrandLogo";
import {
  getActiveSession,
  logoutStaff,
  StaffUser,
} from "../services/dashboardStorage";
import { useGetAppointmentsQuery } from "../services/appointmentApi";
import { useGetContactInquiriesQuery } from "../services/contactApi";
import { useLogoutStaffMutation } from "../services/authApi";
import { FIRM_DETAILS } from "../data/firm";

export const DashboardLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [session, setSession] = useState<StaffUser | null>(getActiveSession());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const [logoutStaffMutation] = useLogoutStaffMutation();
  const { data: appointments = [] } = useGetAppointmentsQuery();
  const { data: inquiries = [] } = useGetContactInquiriesQuery();

  const pendingAppointmentsCount = appointments.filter(
    (a) => a.status === "pending",
  ).length;
  const unreadInquiriesCount = inquiries.filter(
    (i) => i.status === "unread",
  ).length;

  useEffect(() => {
    // Live clock
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000 * 30);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await logoutStaffMutation().unwrap();
    } catch {
      // Continue even if server logout request fails
    }
    logoutStaff();
    navigate("/login", { replace: true });
  };

  const navItems = [
    {
      label: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard,
      badge: null,
    },
    {
      label: "Appointments",
      path: "/dashboard/appointments",
      icon: CalendarCheck,
      badge: pendingAppointmentsCount > 0 ? pendingAppointmentsCount : null,
      badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/40",
    },
    {
      label: "Contacts & Queries",
      path: "/dashboard/contacts",
      icon: MessageSquare,
      badge: unreadInquiriesCount > 0 ? unreadInquiriesCount : null,
      badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/40",
    },
    {
      label: "Chamber Settings",
      path: "/dashboard/settings",
      icon: Settings,
      badge: null,
    },
  ];

  const isActive = (path: string) => {
    if (path === "/dashboard") return location.pathname === "/dashboard";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-[#F5F2EB] flex flex-col font-sans text-slate-800">
      {/* Top Header Bar */}
      <header className="bg-[#101C2C] text-slate-100 border-b border-[#223A5C]/40 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Brand Logo & Portal Tag */}
            <div className="flex items-center gap-4 sm:gap-6">
              <Link to="/dashboard" className="flex items-center gap-2 group">
                <BrandLogo variant="horizontal" theme="dark" />
              </Link>
            </div>

            {/* Right: Date/Time, User profile, Website Link, Logout */}
            <div className="flex items-center gap-3 sm:gap-5">
              {currentTime && (
                <div className="hidden lg:flex items-center gap-1.5 text-xs text-slate-300 border-r border-[#223A5C] pr-4">
                  <Clock className="w-3.5 h-3.5 text-[#C7A56A]" />
                  <span>Kathmandu: {currentTime}</span>
                </div>
              )}

              <Link
                to="/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#C7A56A] transition-colors py-1 px-2.5 rounded-sm hover:bg-[#17283F]"
                title="Open client-facing website in new tab"
              >
                <span>Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>

              {/* User Avatar & Name */}
              <div className="flex items-center gap-2.5 bg-[#17283F] py-1.5 px-3 rounded-sm border border-[#223A5C]">
                <div className="w-7 h-7 rounded-full bg-[#101C2C] border border-[#C7A56A] flex items-center justify-center text-[#C7A56A] text-xs font-bold font-serif">
                  {session?.name
                    ? session.name
                        .replace("Adv.", "")
                        .trim()
                        .slice(0, 2)
                        .toUpperCase()
                    : "SR"}
                </div>
                <div className="hidden sm:block text-left">
                  <div className="text-xs font-semibold text-white leading-tight">
                    {session?.name || "Adv. Sahil Raut Gaddi"}
                  </div>
                  <div className="text-[10px] text-[#C7A56A] font-medium leading-none">
                    {session?.role || "Senior Advocate"}
                  </div>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="text-xs text-slate-400 hover:text-rose-400 p-2 rounded-sm hover:bg-[#17283F] transition-colors cursor-pointer flex items-center gap-1.5"
                title="Log Out of Chamber Session"
              >
                <LogOut className="w-4 h-4" />
                <span className="hidden md:inline">Sign Out</span>
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-white rounded-sm hover:bg-[#17283F]"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <div className="hidden lg:block bg-[#0C1522] border-t border-[#1C2C42]/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex space-x-1" aria-label="Dashboard Tabs">
              {navItems.map((item) => {
                const active = isActive(item.path);
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 py-3 px-4 text-xs font-medium border-b-2 transition-colors ${
                      active
                        ? "border-[#C7A56A] text-[#C7A56A] bg-[#142236]/50 font-semibold"
                        : "border-transparent text-slate-300 hover:text-white hover:bg-[#17283F]/30"
                    }`}
                  >
                    <Icon
                      className={`w-4 h-4 ${active ? "text-[#C7A56A]" : "text-slate-400"}`}
                    />
                    <span>{item.label}</span>
                    {item.badge !== null && (
                      <span
                        className={`ml-1.5 text-[10px] font-bold px-1.5 py-0.2 rounded-full border ${item.badgeColor || "bg-slate-700 text-slate-200"}`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0C1522] border-t border-[#1C2C42] px-4 pt-3 pb-4 space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.path);
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-2.5 rounded-sm text-xs font-medium ${
                    active
                      ? "bg-[#17283F] text-[#C7A56A] font-semibold"
                      : "text-slate-300 hover:bg-[#17283F]/50 hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== null && (
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${item.badgeColor || "bg-slate-700 text-slate-200"}`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <Link
                to="/"
                className="text-xs text-[#C7A56A] flex items-center gap-1.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Visit Client Site</span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-xs text-rose-400 flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Chamber Footer strip */}
      <footer className="bg-white border-t border-[#E2DBCD] py-4 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            <strong className="text-slate-700">{FIRM_DETAILS.name}</strong> ·
            Chamber Management System (Tokha, Kathmandu)
          </div>
          <div>
            Chamber Hours:{" "}
            <span className="text-slate-700 font-medium">
              {FIRM_DETAILS.officeHours}
            </span>{" "}
            · Direct: {FIRM_DETAILS.phoneDisplay}
          </div>
        </div>
      </footer>
    </div>
  );
};

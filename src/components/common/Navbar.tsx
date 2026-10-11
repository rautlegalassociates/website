import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { FIRM_DETAILS } from "../../data/firm";
import { useAppDispatch } from "../../app/hooks";
import { BrandLogo } from "./BrandLogo";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle ESC key for mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: "About Us", path: "/about" },
    { label: "Practice Areas", path: "/services" },
    { label: "Our Lawyers", path: "/team" },
    { label: "Resources", path: "/resources" },
    { label: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#101C2C]/95 backdrop-blur-md shadow-md border-b border-[#223A5C]/40 py-3.5"
          : "bg-[#101C2C] border-b border-[#223A5C]/30 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark / brand mark */}
          <Link
            to="/"
            className="flex items-center group whitespace-nowrap shrink-0 text-decoration-none"
            aria-label="Raut Legal Associates Homepage"
          >
            <BrandLogo variant="horizontal" theme="dark" />
          </Link>

          {/* Zone 2: 4-5 single-line nav links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-7 text-sm font-medium"
          >
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    active
                      ? "text-[#C7A56A] font-semibold"
                      : "text-[#E2DBCD] hover:text-white"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C7A56A] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/appointments"
              className="hidden sm:inline-flex items-center gap-2 px-4.5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#101C2C] bg-[#C7A56A] hover:bg-[#D8B983] active:bg-[#B38E51] rounded-sm transition-all shadow-xs hover:shadow-md whitespace-nowrap shrink-0"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#E2DBCD] hover:text-white hover:bg-[#17283F] rounded-md transition-colors"
              aria-label={
                isMobileMenuOpen
                  ? "Close Navigation Menu"
                  : "Open Navigation Menu"
              }
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(100%+1px)] bg-[#101C2C]/98 backdrop-blur-xl border-b border-[#223A5C] shadow-2xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            <div className="text-xs font-medium uppercase tracking-wider text-[#C7A56A] pb-1 border-b border-slate-800">
              Navigation
            </div>
            <Link
              to="/"
              className={`text-base py-2 transition-colors ${
                location.pathname === "/"
                  ? "text-[#C7A56A] font-medium"
                  : "text-[#E2DBCD]"
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base py-2 transition-colors ${
                  isActive(link.path)
                    ? "text-[#C7A56A] font-medium"
                    : "text-[#E2DBCD]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <div className="text-xs text-slate-400">
                Initial Legal Consultation Fee:{" "}
                <strong className="text-[#C7A56A]">NPR 500</strong>
              </div>
              <Link
                to="/appointments"
                className="w-full text-center py-3 text-xs uppercase tracking-wider font-semibold bg-[#C7A56A] text-[#101C2C] rounded-sm hover:bg-[#D8B983] transition-colors"
              >
                Book Appointment (NPR 500)
              </Link>
              <a
                href={`tel:${FIRM_DETAILS.phone}`}
                className="w-full text-center py-2.5 text-xs font-medium border border-slate-700 text-slate-300 rounded-sm hover:text-white"
              >
                Call: {FIRM_DETAILS.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

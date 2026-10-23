import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Lock,
  Mail,
  Scale,
  ShieldCheck,
  Eye,
  EyeOff,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import { BrandLogo } from "../components/common/BrandLogo";
import { SEOHead } from "../components/common/SEOHead";
import {
  loginStaff,
  getActiveSession,
  getActiveToken,
  StaffUser,
} from "../services/dashboardStorage";
import { useLoginStaffMutation } from "../services/authApi";
import { FIRM_DETAILS } from "../data/firm";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // If already logged in, redirect to dashboard
  useEffect(() => {
    const currentSession = getActiveSession();
    const currentToken = getActiveToken();
    if (currentSession && currentToken) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [loginStaffMutation, { isLoading }] = useLoginStaffMutation();

  const from =
    (location.state as { from?: { pathname: string } })?.from?.pathname ||
    "/dashboard";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await loginStaffMutation({
        email: email.trim(),
        password: password.trim(),
      }).unwrap();

      if (response.success && response.user) {
        const staffObj: StaffUser = {
          id: response.user.uid,
          uid: response.user.uid,
          name: response.user.displayName,
          email: response.user.email,
          role: response.user.role,
          chamber: response.user.chamber,
          customToken: response.user.customToken,
        };

        loginStaff(staffObj, response.token);
        navigate(from, { replace: true });
      } else {
        setError(
          response.error || "Authentication failed. Please verify credentials.",
        );
      }
    } catch (err: any) {
      console.error("Login failure:", err);
      const errMsg =
        err?.data?.error ||
        err?.error ||
        "Unable to authenticate with backend. Please make sure backend is running.";
      setError(errMsg);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A121E] text-slate-100 flex flex-col justify-between relative selection:bg-[#C7A56A]/30">
      <SEOHead
        title="Chamber Staff Portal | Raut Legal Associates"
        description="Secure advocate and chamber staff portal for Raut Legal Associates in Kathmandu, Nepal."
        canonicalPath="/login"
      />

      {/* Background ambient subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1C2C42] via-[#0A121E] to-[#060B12] opacity-70 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 flex items-center justify-between">
        <Link to="/" className="inline-block group">
          <BrandLogo variant="horizontal" theme="dark" />
        </Link>
        <Link
          to="/"
          className="text-xs text-slate-400 hover:text-[#C7A56A] transition-colors flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Website</span>
        </Link>
      </div>

      {/* Main Login Card */}
      <div className="relative z-10 w-full max-w-md mx-auto px-4 py-8">
        <div className="bg-[#101C2C] border border-[#223A5C]/60 rounded-sm shadow-2xl p-7 sm:p-9 backdrop-blur-md">
          {/* Header Title */}
          <div className="text-center mb-7">
            <div className="w-13 h-13 mx-auto mb-4 rounded-full bg-[#17283F] border border-[#C7A56A]/50 flex items-center justify-center text-[#C7A56A] shadow-inner">
              <Scale className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[#C7A56A] block mb-1">
              Chamber Staff &amp; Advocates
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Staff Portal Sign In
            </h1>
            <p className="text-xs text-slate-400 mt-2">
              Access appointment schedules, client legal inquiries, and chamber
              case records.
            </p>
          </div>

          {error && (
            <div className="mb-6 p-3.5 bg-rose-950/60 border border-rose-800/80 rounded-sm text-xs text-rose-200 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4.5">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Staff Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="e.g. rautlegalassociates@gmail.com"
                  className="w-full pl-10 pr-3.5 py-2.5 bg-[#0C1522] border border-[#223A5C] text-sm rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A56A] focus:ring-1 focus:ring-[#C7A56A]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </label>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 bg-[#0C1522] border border-[#223A5C] text-sm rounded-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C7A56A] focus:ring-1 focus:ring-[#C7A56A]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-200 transition-colors p-0.5 cursor-pointer"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-[#C7A56A] hover:bg-[#D8B983] active:bg-[#B38E51] text-[#101C2C] font-semibold text-xs uppercase tracking-wider rounded-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <span>Signing In...</span>
                ) : (
                  <>
                    <span>Enter Chamber Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-7 pt-6 border-t border-[#223A5C]/60 text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#C7A56A]" />
            <span>Encrypted internal advocate session · Tokha Chamber</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 py-5 text-center text-xs text-slate-400 border-t border-[#223A5C]/30">
        <span>
          &copy; {new Date().getFullYear()} {FIRM_DETAILS.name}. Basundhara-5,
          Tokha, Kathmandu, Nepal.
        </span>
      </div>
    </div>
  );
};

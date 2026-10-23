import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getActiveSession, getActiveToken } from "../../services/dashboardStorage";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const session = getActiveSession();
  const token = getActiveToken();
  const location = useLocation();

  if (!session || !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import apiService from "@/lib/apiService";

interface AuthContextType {
  user: any;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (access: string, refresh: string) => void;
  logout: () => void;
   refreshUser: () => Promise<void>  
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Save tokens & load user
  const login = (access: string, refresh: string) => {
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    setAccessToken(access);
    setRefreshToken(refresh);
    fetchUser(access);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setAccessToken(null);
    setRefreshToken(null);
    setUser(null);
  };

  // Fetch user info
  const fetchUser = async (token: string) => {
    try {
      const res = await apiService.get("/api/v1/core/users/me/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (error) {
      console.error("Error loading user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Load tokens on first page load
  useEffect(() => {
    const access = localStorage.getItem("accessToken");
    const refresh = localStorage.getItem("refreshToken");

    if (access) {
      setAccessToken(access);
      setRefreshToken(refresh);

      // Decode access token
      try {
        const decoded: any = jwtDecode(access);
        const exp = decoded.exp * 1000;
        const now = Date.now();

        // If expired → try refresh
        if (exp < now && refresh) {
          refreshAccessToken(refresh);
        } else {
          fetchUser(access);
        }
      } catch {
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  }, []);

  // Refresh token
  const refreshAccessToken = async (refresh: string) => {
    try {
      const res = await apiService.post("/api/token/refresh/", {
        refresh,
      });

      const newAccess = res.data.access;
      localStorage.setItem("accessToken", newAccess);
      setAccessToken(newAccess);

      fetchUser(newAccess);
    } catch (error) {
      console.error("Token refresh failed", error);
      logout();
      setIsLoading(false);
    }
  };

  //Refresh User

  const refreshUser = async () => {
  try {
    const response = await apiService.get("v1/core/users/me/");
    setUser(response.data);
  } catch (err) {
    console.error("Error refreshing user:", err);
  }
};

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        refreshToken,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};

// frontend/lib/apiService.js
import axiosInstance from './axiosInstance';
import axios from 'axios';

// Token key names (single source)
const ACCESS_KEY = 'access_token';
const REFRESH_KEY = 'refresh_token';

const getTokens = () => {
  if (typeof window === 'undefined') return { access: '', refresh: '' };
  return {
    access: localStorage.getItem(ACCESS_KEY) || '',
    refresh: localStorage.getItem(REFRESH_KEY) || '',
  };
};

const setTokens = (access, refresh) => {
  if (typeof window !== 'undefined') {
    if (access) localStorage.setItem(ACCESS_KEY, access);
    if (refresh) localStorage.setItem(REFRESH_KEY, refresh);
  }
};
const setAccessToken = (access) => {
  if (typeof window !== 'undefined' && access) localStorage.setItem(ACCESS_KEY, access);
};
const clearTokens = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(ACCESS_KEY);
    localStorage.removeItem(REFRESH_KEY);
  }
};

// PUBLIC endpoints that should NOT get Authorization header
const PUBLIC_ENDPOINTS = [
  '/v1/core/users/',    // Djoser registration path
  '/token/',            // login
  '/token/refresh/',    // refresh
];

axiosInstance.interceptors.request.use(config => {
  try {
    const url = config.url || '';
    const isPublic = PUBLIC_ENDPOINTS.some(ep => url.includes(ep));
    const { access } = getTokens();

    if (access && !isPublic) {
      config.headers = config.headers || {};
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${access}`;
      }
    }
    // If public endpoint, strip authorization header if present
    if (isPublic && config.headers?.Authorization) {
      delete config.headers.Authorization;
    }
    return config;
  } catch (err) {
    return config;
  }
});

// Response interceptor for automatic refresh on 401
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (!originalRequest) return Promise.reject(error);

    const status = error.response?.status;
    const isRefreshCall = originalRequest.url && originalRequest.url.includes('/token/refresh/');
    const isLoginCall = originalRequest.url && originalRequest.url.includes('/token/');
    // only attempt refresh for 401 on protected endpoints
    if (status === 401 && !originalRequest._retry && !isRefreshCall && !isLoginCall) {
      originalRequest._retry = true;
      const { refresh } = getTokens();
      if (!refresh) {
        clearTokens();
        return Promise.reject(error);
      }
      try {
        // Use axios (no interceptors) to avoid recursion
        const plain = axios.create({ baseURL: axiosInstance.defaults.baseURL });
        const resp = await plain.post('/token/refresh/', { refresh });
        const newAccess = resp.data.access;
        setAccessToken(newAccess);
        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers.Authorization = `Bearer ${newAccess}`;
        return axiosInstance(originalRequest);
      } catch (refreshErr) {
        clearTokens();
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(error);
  }
);

export { getTokens, setTokens, setAccessToken, clearTokens };
export default axiosInstance;

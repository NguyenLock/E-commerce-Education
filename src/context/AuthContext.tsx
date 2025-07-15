import React, { createContext, useContext, useState, useEffect } from 'react';
import  type { AuthUser, LoginCredentials, RegisterCredentials } from '../types/index';
import { authService } from '../service/authService';
import { useApp } from './AppContext';

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (credentials: RegisterCredentials) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { showToast } = useApp();

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await authService.getCurrentUser();
      if (response.success && response.data) {
        setUser(response.data);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    try {
      const response = await authService.login(credentials);
      
      if (response.success) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        showToast(response.message || 'Đăng nhập thành công!', 'success');
        return true;
      } else {
        showToast(response.message || 'Đăng nhập thất bại', 'error');
        return false;
      }
    } catch (error) {
      showToast('Có lỗi xảy ra khi đăng nhập', 'error');
      return false;
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<boolean> => {
    try {
      const response = await authService.register(credentials);
      
      if (response.success) {
        setUser(response.data);
        localStorage.setItem('user', JSON.stringify(response.data));
        showToast(response.message || 'Đăng ký thành công!', 'success');
        return true;
      } else {
        showToast(response.message || 'Đăng ký thất bại', 'error');
        return false;
      }
    } catch (error) {
      showToast('Có lỗi xảy ra khi đăng ký', 'error');
      return false;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await authService.logout();
      setUser(null);
      localStorage.removeItem('user');
      showToast('Đăng xuất thành công!', 'info');
    } catch (error) {
      showToast('Có lỗi xảy ra khi đăng xuất', 'error');
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        register,
        logout,
        isAuthenticated: !!user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
import React, { createContext, useContext, useState, useEffect } from 'react';
import  type { Product, ToastMessage } from '../types/index';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface AppContextType {
  favorites: string[];
  viewHistory: string[];
  toasts: ToastMessage[];
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  addToViewHistory: (productId: string) => void;
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
  removeToast: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage<string[]>('favorites', []);
  const [viewHistory, setViewHistory] = useLocalStorage<string[]>('viewHistory', []);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const addToFavorites = (productId: string) => {
    if (!favorites.includes(productId)) {
      setFavorites([...favorites, productId]);
      showToast('Đã thêm vào yêu thích!', 'success');
    }
  };

  const removeFromFavorites = (productId: string) => {
    setFavorites(favorites.filter(id => id !== productId));
    showToast('Đã xóa khỏi yêu thích!', 'info');
  };

  const addToViewHistory = (productId: string) => {
    const newHistory = [productId, ...viewHistory.filter(id => id !== productId)].slice(0, 10);
    setViewHistory(newHistory);
  };

  const showToast = (message: string, type: 'success' | 'error' | 'info') => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message, type }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        viewHistory,
        toasts,
        addToFavorites,
        removeFromFavorites,
        addToViewHistory,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
import React, { createContext, useContext, useState, useEffect } from 'react';
import  type { Product, ToastMessage } from '../types/index';
import { useLocalStorage } from '../hooks/useLocalStorage';

interface CartItem {
  productId: string;
  quantity: number;
}

interface AppContextType {
  favorites: string[];
  viewHistory: string[];
  cart: CartItem[];
  toasts: ToastMessage[];
  addToFavorites: (productId: string) => void;
  removeFromFavorites: (productId: string) => void;
  addToViewHistory: (productId: string) => void;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
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
  const [cart, setCart] = useLocalStorage<CartItem[]>('cart', []);
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

  const addToCart = (productId: string) => {
    const existingItem = cart.find(item => item.productId === productId);
    if (existingItem) {
      updateCartQuantity(productId, existingItem.quantity + 1);
    } else {
      setCart([...cart, { productId, quantity: 1 }]);
      showToast('Đã thêm vào giỏ hàng!', 'success');
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.productId !== productId));
    showToast('Đã xóa khỏi giỏ hàng!', 'info');
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item => 
      item.productId === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    showToast('Đã xóa tất cả sản phẩm khỏi giỏ hàng!', 'info');
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
        cart,
        toasts,
        addToFavorites,
        removeFromFavorites,
        addToViewHistory,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        showToast,
        removeToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
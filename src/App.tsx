import React, { useState } from 'react';
import { HomePage } from './components/pages/HomePage';
import { FavoritesPage } from './components/pages/FavoritesPage';
import { AuthPage } from './components/pages/AuthPage';
import { Footer } from './components/layout/Footer';
import { ToastContainer } from './components/UI/Toast';
import { AppProvider, useApp } from './context/AppContext';
import { AuthProvider } from './context/AuthContext';

type PageType = 'home' | 'favorites' | 'auth';

const AppContent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const { toasts, removeToast } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage 
            onShowFavorites={() => setCurrentPage('favorites')}
            onShowAuth={() => setCurrentPage('auth')}
          />
        );
      case 'favorites':
        return <FavoritesPage onBack={() => setCurrentPage('home')} />;
      case 'auth':
        return <AuthPage onBack={() => setCurrentPage('home')} />;
      default:
        return (
          <HomePage 
            onShowFavorites={() => setCurrentPage('favorites')}
            onShowAuth={() => setCurrentPage('auth')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {renderPage()}
      {currentPage !== 'auth' && <Footer />}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </AppProvider>
  );
}

export default App;
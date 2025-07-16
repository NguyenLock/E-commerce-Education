import React, { useState } from 'react';
import { Search, Heart, Menu, X, User, LogOut, History } from 'lucide-react';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { useAuth } from '../../context/AuthContext';

interface HeaderProps {
  onSearchChange: (query: string) => void;
  onFavoritesClick: () => void;
  onViewHistoryClick: () => void;
  onAuthClick: () => void;
  favoritesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onSearchChange,
  onFavoritesClick,
  onViewHistoryClick,
  onAuthClick,
  favoritesCount
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange(query);
  };

  const handleLogout = async () => {
    await logout();
    setShowUserMenu(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-500">
                EduMarket
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-2xl mx-8">
            <Input
              placeholder="Tìm kiếm khóa học, giáo trình..."
              value={searchQuery}
              onChange={handleSearchChange}
              icon={Search}
              fullWidth
            />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              icon={History}
              onClick={onViewHistoryClick}
              className="text-gray-600 hover:text-primary-500"
            >
              Lịch sử xem
            </Button>
            <Button
              variant="ghost"
              icon={Heart}
              onClick={onFavoritesClick}
              className="text-gray-600 hover:text-primary-500 relative"
            >
              Yêu thích
              {favoritesCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </Button>
            
            {isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-2 text-gray-600 hover:text-primary-500 transition-colors"
                >
                  {user?.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <span className="font-medium">{user?.name}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Đăng xuất</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="primary"
                onClick={onAuthClick}
              >
                Đăng nhập
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              icon={isMenuOpen ? X : Menu}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 pb-4">
            <div className="px-2 pt-4 pb-3 space-y-3">
              <Input
                placeholder="Tìm kiếm khóa học, giáo trình..."
                value={searchQuery}
                onChange={handleSearchChange}
                icon={Search}
                fullWidth
              />
              <Button
                variant="ghost"
                icon={Heart}
                onClick={onFavoritesClick}
                fullWidth
                className="justify-start relative"
              >
                Yêu thích
                {favoritesCount > 0 && (
                  <span className="absolute right-4 bg-primary-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                    {favoritesCount}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                icon={History}
                onClick={onViewHistoryClick}
                fullWidth
                className="justify-start"
              >
                Lịch sử xem
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
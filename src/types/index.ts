export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    image: string;
    description: string;
    fullDescription: string;
    category: string;
    rating: number;
    reviews: number;
    instructor: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    tags: string[];
    features: string[];
    isFavorite?: boolean;
  }
  
  export interface User {
    id: string;
    name: string;
    preferences: string[];
    viewHistory: string[];
    favorites: string[];
  }
  
  export interface ApiResponse<T> {
    data: T;
    success: boolean;
    message?: string;
  }
  
  export interface SearchFilters {
    query: string;
    priceRange: 'all' | 'under500' | '500to1000' | 'over1000';
    category: string;
    level: string;
  }
  
  export interface ToastMessage {
    id: string;
    message: string;
    type: 'success' | 'error' | 'info';
  }
  
  export interface AuthUser {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    preferences: string[];
    viewHistory: string[];
    favorites: string[];
    createdAt: Date;
  }
  
  export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  }
  export interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
  }
  
  export interface ChatbotProps {
    isOpen: boolean;
    onClose: () => void;
  }
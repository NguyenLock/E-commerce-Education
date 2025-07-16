import type { LucideIcon } from "lucide-react";

export interface HeaderProps {
  onSearchChange: (query: string) => void;
  onFavoritesClick: () => void;
  onViewHistoryClick: () => void;
  onCartClick: () => void;
  onAuthClick: () => void;
  favoritesCount: number;
}

export interface AuthPageProps {
  onBack: () => void;
  initialMode?: 'login' | 'register';
}
export interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (credentials: RegisterCredentials) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}
export interface HomePageProps {
  onShowFavorites: () => void;
  onShowHistory: () => void;
  onShowCart: () => void;
  onShowAuth: () => void;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'warning' | 'success' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent' | 'warning' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
  fullWidth?: boolean;
  rounded?: boolean;
}
export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  shadow?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  padding?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  border?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  showCloseButton?: boolean;
}
export interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}

export interface Instructor {
  name: string;
  title: string;
  avatar: string;
  bio?: string;
}

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
  instructor: Instructor;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  features: string[];
  reviewList?: Review[];
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
  export interface SuggestionsProps {
    onProductClick: (product: Product) => void;
  }
  export interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
  }
  export interface ProductCardProps {
    product: Product;
    onViewDetails: (product: Product) => void;
    compact?: boolean;
  }
  export interface CartItem {
    productId: string;
    quantity: number;
  }
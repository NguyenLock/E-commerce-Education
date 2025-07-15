import  type { AuthUser, LoginCredentials, RegisterCredentials, ApiResponse } from '../types/index';

// Mock users database
const mockUsers: AuthUser[] = [
  {
    id: '1',
    name: 'Nguyễn Văn An',
    email: 'an@example.com',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    preferences: ['Programming', 'Language Learning'],
    viewHistory: ['1', '2'],
    favorites: ['1'],
    createdAt: new Date('2024-01-15')
  }
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const authService = {
  // Login user
  login: async (credentials: LoginCredentials): Promise<ApiResponse<AuthUser>> => {
    await delay(1000);
    
    const { email, password } = credentials;
    
    // Simple validation
    if (!email || !password) {
      return {
        data: {} as AuthUser,
        success: false,
        message: 'Vui lòng nhập đầy đủ thông tin'
      };
    }
    
    // Check if user exists (mock authentication)
    const user = mockUsers.find(u => u.email === email);
    
    if (!user) {
      return {
        data: {} as AuthUser,
        success: false,
        message: 'Email không tồn tại trong hệ thống'
      };
    }
    
    // Mock password check (in real app, this would be hashed)
    if (password !== '123456') {
      return {
        data: {} as AuthUser,
        success: false,
        message: 'Mật khẩu không chính xác'
      };
    }
    
    return {
      data: user,
      success: true,
      message: 'Đăng nhập thành công!'
    };
  },

  // Register user
  register: async (credentials: RegisterCredentials): Promise<ApiResponse<AuthUser>> => {
    await delay(1200);
    
    const { name, email, password, confirmPassword } = credentials;
    
    // Validation
    if (!name || !email || !password || !confirmPassword) {
      return {
        data: {} as AuthUser,
        success: false,
        message: 'Vui lòng nhập đầy đủ thông tin'
      };
    }
    
    if (password !== confirmPassword) {
      return {
        data: {} as AuthUser,
        success: false,
        message: 'Mật khẩu xác nhận không khớp'
      };
    }
    
    if (password.length < 6) {
      return {
        data: {} as AuthUser,
        success: false,
        message: 'Mật khẩu phải có ít nhất 6 ký tự'
      };
    }
    
    // Check if email already exists
    const existingUser = mockUsers.find(u => u.email === email);
    if (existingUser) {
      return {
        data: {} as AuthUser,
        success: false,
        message: 'Email đã được sử dụng'
      };
    }
    
    // Create new user
    const newUser: AuthUser = {
      id: Date.now().toString(),
      name,
      email,
      preferences: [],
      viewHistory: [],
      favorites: [],
      createdAt: new Date()
    };
    
    mockUsers.push(newUser);
    
    return {
      data: newUser,
      success: true,
      message: 'Đăng ký thành công!'
    };
  },

  // Logout user
  logout: async (): Promise<ApiResponse<null>> => {
    await delay(300);
    return {
      data: null,
      success: true,
      message: 'Đăng xuất thành công!'
    };
  },

  // Get current user
  getCurrentUser: async (): Promise<ApiResponse<AuthUser | null>> => {
    await delay(500);
    
    // Check localStorage for user session
    const userSession = localStorage.getItem('user');
    if (userSession) {
      try {
        const user = JSON.parse(userSession);
        return {
          data: user,
          success: true
        };
      } catch {
        return {
          data: null,
          success: false,
          message: 'Session không hợp lệ'
        };
      }
    }
    
    return {
      data: null,
      success: true
    };
  }
};
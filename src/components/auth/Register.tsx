import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, UserPlus } from 'lucide-react';
import  type { RegisterCredentials } from '../../types/index';
import { Button } from '../UI/Button';
import { Input } from '../UI/Input';
import { Card } from '../UI/Card';

interface RegisterFormProps {
  onSubmit: (credentials: RegisterCredentials) => Promise<boolean>;
  onSwitchToLogin: () => void;
  loading: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  onSwitchToLogin,
  loading
}) => {
  const [credentials, setCredentials] = useState<RegisterCredentials>({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<RegisterCredentials>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterCredentials> = {};

    if (!credentials.name) {
      newErrors.name = 'Họ tên là bắt buộc';
    } else if (credentials.name.length < 2) {
      newErrors.name = 'Họ tên phải có ít nhất 2 ký tự';
    }

    if (!credentials.email) {
      newErrors.email = 'Email là bắt buộc';
    } else if (!/\S+@\S+\.\S+/.test(credentials.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    if (!credentials.password) {
      newErrors.password = 'Mật khẩu là bắt buộc';
    } else if (credentials.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
    }

    if (!credentials.confirmPassword) {
      newErrors.confirmPassword = 'Xác nhận mật khẩu là bắt buộc';
    } else if (credentials.password !== credentials.confirmPassword) {
      newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const success = await onSubmit(credentials);
    if (success) {
      setCredentials({ name: '', email: '', password: '', confirmPassword: '' });
    }
  };

  const handleInputChange = (field: keyof RegisterCredentials, value: string) => {
    setCredentials(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <UserPlus className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Đăng ký</h2>
        <p className="text-gray-600">Tạo tài khoản để bắt đầu học tập!</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          label="Họ và tên"
          type="text"
          value={credentials.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          error={errors.name}
          icon={User}
          placeholder="Nhập họ và tên"
          fullWidth
        />

        <Input
          label="Email"
          type="email"
          value={credentials.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          error={errors.email}
          icon={Mail}
          placeholder="Nhập email của bạn"
          fullWidth
        />

        <div className="relative">
          <Input
            label="Mật khẩu"
            type={showPassword ? 'text' : 'password'}
            value={credentials.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            error={errors.password}
            icon={Lock}
            placeholder="Nhập mật khẩu (ít nhất 6 ký tự)"
            fullWidth
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="relative">
          <Input
            label="Xác nhận mật khẩu"
            type={showConfirmPassword ? 'text' : 'password'}
            value={credentials.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            error={errors.confirmPassword}
            icon={Lock}
            placeholder="Nhập lại mật khẩu"
            fullWidth
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-9 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            required
            className="mt-1 rounded border-gray-300 text-primary-600 focus:ring-primary-500"
          />
          <span className="ml-2 text-sm text-gray-600">
            Tôi đồng ý với{' '}
            <a href="#" className="text-primary-600 hover:text-primary-500">
              Điều khoản sử dụng
            </a>{' '}
            và{' '}
            <a href="#" className="text-primary-600 hover:text-primary-500">
              Chính sách bảo mật
            </a>
          </span>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          loading={loading}
        >
          Đăng ký
        </Button>

        <div className="text-center">
          <span className="text-gray-600">Đã có tài khoản? </span>
          <button
            type="button"
            onClick={onSwitchToLogin}
            className="text-primary-600 hover:text-primary-500 font-medium"
          >
            Đăng nhập ngay
          </button>
        </div>
      </form>
    </Card>
  );
};
import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { LoginForm } from "../auth/LoginForm";
import { RegisterForm } from "../auth/Register";
import { Button } from "../UI/Button";
import { useAuth } from "../../context/AuthContext";
import type { AuthPageProps } from "../../types/index";

export const AuthPage: React.FC<AuthPageProps> = ({
  onBack,
  initialMode = "login",
}) => {
  const [mode, setMode] = useState<"login" | "register">(initialMode);
  const [loading, setLoading] = useState(false);
  const { login, register } = useAuth();

  const handleLogin = async (credentials: any) => {
    setLoading(true);
    const success = await login(credentials);
    setLoading(false);
    if (success) {
      onBack();
    }
    return success;
  };

  const handleRegister = async (credentials: any) => {
    setLoading(true);
    const success = await register(credentials);
    setLoading(false);
    if (success) {
      onBack();
    }
    return success;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center space-x-4 mb-8">
          <Button
            variant="ghost"
            icon={ArrowLeft}
            onClick={onBack}
            className="text-gray-600 hover:text-gray-900"
          >
            Quay lại
          </Button>
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-primary-500">EduMarket</h1>
          </div>
        </div>

        <div className="flex items-center justify-center min-h-[calc(100vh-200px)]">
          <div className="w-full max-w-md">
            {mode === "login" ? (
              <LoginForm
                onSubmit={handleLogin}
                onSwitchToRegister={() => setMode("register")}
                loading={loading}
              />
            ) : (
              <RegisterForm
                onSubmit={handleRegister}
                onSwitchToLogin={() => setMode("login")}
                loading={loading}
              />
            )}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              10,000+ Khóa học
            </h3>
            <p className="text-gray-600">
              Đa dạng chủ đề từ cơ bản đến nâng cao
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🤖</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              AI Thông minh
            </h3>
            <p className="text-gray-600">Gợi ý khóa học phù hợp với bạn</p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⭐</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Chất lượng cao
            </h3>
            <p className="text-gray-600">Được đánh giá 4.9/5 bởi học viên</p>
          </div>
        </div>
      </div>
    </div>
  );
};

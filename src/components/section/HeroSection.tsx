import React from "react";
import { Play, Star, Users, BookOpen, Award } from "lucide-react";
import { Button } from "../UI/Button";
import { Badge } from "../UI/Badget";

interface HeroSectionProps {
  onExploreClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 overflow-hidden">
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge
                variant="primary"
                className="inline-flex items-center space-x-2"
              >
                <Award className="w-4 h-4" />
                <span>Nền tảng giáo dục #1 Việt Nam</span>
              </Badge>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Khám phá khóa học
                <span className="text-primary-500 block">chất lượng cao</span>
                <span className="text-secondary-500">với AI</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Nền tảng giáo dục thương mại điện tử với công nghệ AI tiên tiến,
                giúp bạn tìm kiếm và học tập hiệu quả nhất. Hơn 10,000+ khóa học
                chất lượng từ các chuyên gia hàng đầu.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">10K+</div>
                <div className="text-sm text-gray-600">Khóa học</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600">
                  500K+
                </div>
                <div className="text-sm text-gray-600">Học viên</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent-600">98%</div>
                <div className="text-sm text-gray-600">Hài lòng</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onExploreClick}
                className="group"
              >
                <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Khám phá ngay
              </Button>
              <Button variant="outline" size="lg" icon={Play} className="group">
                <span className="group-hover:ml-1 transition-all">
                  Xem demo
                </span>
              </Button>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">
                  4.9/5 từ 50K+ đánh giá
                </span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Online Learning"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />

              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-in">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500K+</div>
                    <div className="text-sm text-gray-600">Học viên</div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg animate-bounce-in"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">10K+</div>
                    <div className="text-sm text-gray-600">Khóa học</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

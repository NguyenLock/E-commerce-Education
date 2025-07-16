import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../UI/Button";

interface CTASectionProps {
  onGetStarted: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onGetStarted }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"></div>
        <div
          className="absolute bottom-10 right-10 w-32 h-32 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sẵn sàng bắt đầu hành trình học tập?
          </h2>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Tham gia cùng hàng nghìn học viên đã thành công với EduMarket. Khám
            phá khóa học phù hợp với bạn ngay hôm nay!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="primary"
              size="xl"
              onClick={onGetStarted}
              className="group shadow-lg hover:shadow-xl"
            >
              Bắt đầu ngay
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex items-center space-x-2 text-gray-600">
              <span className="text-sm">✓ Miễn phí đăng ký</span>
              <span className="text-sm">✓ Không cam kết dài hạn</span>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="text-2xl font-bold text-primary-600 mb-2">
                7 ngày
              </div>
              <div className="text-gray-600">Dùng thử miễn phí</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-2xl font-bold text-secondary-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600">Hỗ trợ học tập</div>
            </div>
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-2xl font-bold text-accent-600 mb-2">
                100%
              </div>
              <div className="text-gray-600">Hoàn tiền nếu không hài lòng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">EduMarket</h3>
            <p className="text-gray-300 mb-4">
              Nền tảng giáo dục thương mại điện tử hàng đầu Việt Nam, cung cấp các khóa học chất lượng cao với công nghệ AI tiên tiến.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Khóa học</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Giảng viên</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>support@edumarket.vn</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span>123456789</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 EduMarket. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
};
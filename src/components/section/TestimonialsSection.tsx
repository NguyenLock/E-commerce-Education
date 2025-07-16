import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card } from '../UI/Card';
import { testimonials } from '../../data/mockDataTestimonials';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Học viên nói gì về chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hàng nghìn học viên đã tin tưởng và đạt được mục tiêu học tập cùng EduMarket
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className={`relative animate-slide-up delay-[${index * 200}ms]`}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200" />
              
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="text-sm text-primary-600 font-medium">
                Khóa học: {testimonial.course}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
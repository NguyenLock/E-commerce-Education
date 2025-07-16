import React from 'react';
import type { CardProps } from '../../types/index';

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  shadow = 'md',
  rounded = 'lg',
  padding = 'md',
  border = true,
  onClick
}) => {
  const baseClasses = [
    'bg-white',
    'transition-all duration-300',
    border ? 'border border-gray-200' : ''
  ].join(' ');
  
  const shadowClasses = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl'
  };

  const roundedClasses = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl'
  };

  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6',
    xl: 'p-8'
  };

  const hoverClasses = hover ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer' : '';
  const clickClasses = onClick ? 'cursor-pointer' : '';

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${shadowClasses[shadow]} ${roundedClasses[rounded]} ${paddingClasses[padding]} ${hoverClasses} ${clickClasses} ${className}`}
    >
      {children}
    </div>
  );
};
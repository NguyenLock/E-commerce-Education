import React from 'react';

interface SkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className = '',
  width = 'w-full',
  height = 'h-4',
  rounded = true
}) => {
  const roundedClass = rounded ? 'rounded' : '';
  
  return (
    <div className={`bg-gray-200 animate-pulse ${width} ${height} ${roundedClass} ${className}`} />
  );
};

export const ProductCardSkeleton: React.FC = () => (
  <div className="bg-white rounded-lg shadow-md p-4 animate-pulse">
    <Skeleton height="h-48" className="mb-4" />
    <Skeleton height="h-6" className="mb-2" />
    <Skeleton height="h-4" width="w-3/4" className="mb-2" />
    <Skeleton height="h-4" width="w-1/2" className="mb-4" />
    <div className="flex justify-between items-center">
      <Skeleton height="h-6" width="w-24" />
      <Skeleton height="h-10" width="w-28" />
    </div>
  </div>
);
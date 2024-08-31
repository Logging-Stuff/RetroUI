import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Button({ children, size = 'md' }: ButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-1 text-sm',
    md: 'px-6 py-2 text-md',
    lg: 'px-8 py-3 text-lg',
  };

  return (
    <button
      className={`font-head bg-primary-400 border-2 border-black shadow-md hover:shadow-xs transition-all ${sizeClasses[size]}`}
    >
      {children}
    </button>
  );
}

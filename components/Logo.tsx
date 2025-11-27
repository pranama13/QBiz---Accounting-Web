import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'text';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  textColor?: 'default' | 'white';
}

export default function Logo({ variant = 'full', className = '', size = 'md', textColor = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: { icon: 'h-8 w-8', text: 'text-xl', tagline: 'text-xs' },
    md: { icon: 'h-12 w-12', text: 'text-3xl', tagline: 'text-sm' },
    lg: { icon: 'h-16 w-16', text: 'text-5xl', tagline: 'text-base' },
  };

  const currentSize = sizeClasses[size];

  if (variant === 'icon') {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg
          className={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon with rounded corners */}
          <path
            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
            fill="#14b8a6"
            stroke="#14b8a6"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Q letter */}
          <text
            x="50"
            y="65"
            fontSize="50"
            fontWeight="bold"
            fill="#1f2937"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            Q
          </text>
        </svg>
      </div>
    );
  }

  if (variant === 'text') {
    const textColorClass = textColor === 'white' ? 'text-white' : 'text-teal-500';
    const taglineColorClass = textColor === 'white' ? 'text-white/90' : 'text-teal-600';
    
    return (
      <div className={`${className} flex flex-col`}>
        <span className={`${currentSize.text} font-bold ${textColorClass} leading-tight`}>
          QBIZ
        </span>
        <span className={`${currentSize.tagline} font-medium ${taglineColorClass} mt-1`}>
          WE SET UP, YOU GROW
        </span>
      </div>
    );
  }

  // Full logo (icon + text)
  return (
    <div className={`${className} flex items-center space-x-3`}>
      {/* Hexagon Icon */}
      <div className="flex-shrink-0">
        <svg
          className={currentSize.icon}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Hexagon with rounded corners */}
          <path
            d="M50 5 L90 25 L90 75 L50 95 L10 75 L10 25 Z"
            fill="#14b8a6"
            stroke="#14b8a6"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          {/* Q letter */}
          <text
            x="50"
            y="65"
            fontSize="50"
            fontWeight="bold"
            fill="#1f2937"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            Q
          </text>
        </svg>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span className={`${currentSize.text} font-bold ${textColor === 'white' ? 'text-white' : 'text-teal-500'} leading-tight`}>
          QBIZ
        </span>
        <span className={`${currentSize.tagline} font-medium ${textColor === 'white' ? 'text-white/90' : 'text-teal-600'} mt-0.5`}>
          WE SET UP, YOU GROW
        </span>
      </div>
    </div>
  );
}


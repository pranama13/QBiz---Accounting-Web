'use client';

import { useEffect, useState } from 'react';
import Logo from './Logo';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + 3;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-green-500/20 backdrop-blur-md">
      <div className="flex flex-col items-center space-y-6">
        {/* Spinning circle with logo */}
        <div className="relative">
          <div className="absolute inset-0 animate-spin rounded-full border-8 border-green-500/30 border-t-green-600"></div>
          <div className="relative flex h-24 w-24 items-center justify-center">
            <Logo variant="icon" size="lg" />
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-64 overflow-hidden rounded-full bg-white/20 backdrop-blur-sm">
          <div
            className="h-2 bg-green-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        {/* Percentage */}
        <p className="text-lg font-semibold text-green-700">{progress}%</p>
      </div>
    </div>
  );
}

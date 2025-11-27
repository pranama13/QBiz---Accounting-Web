'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      setDisplayChildren(children);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    setDisplayChildren(children);
  }, [children]);

  return (
    <>
      {loading && (
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
              <div className="h-2 w-1/2 animate-pulse bg-green-600"></div>
            </div>
            
            {/* Loading text */}
            <p className="text-lg font-semibold text-green-700">Loading...</p>
          </div>
        </div>
      )}
      <div className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}>
        {displayChildren}
      </div>
    </>
  );
}

import React, { useState, useEffect } from 'react';
import { NavBar } from "../components";

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`bg-[#00030A] min-h-screen flex flex-col items-center justify-center`}>
      <NavBar isMobile={isMobile} />
      <div className={`flex-1 w-full flex flex-col items-center justify-center px-6 sm:px-10 py-6 sm:py-12 ${isMobile ? 'mb-16' : 'max-w-6xl'}`}>
        {children}
      </div>
    </div>
  );
};

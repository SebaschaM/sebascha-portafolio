import React, { useState, useEffect } from "react";
import { NavBar } from "../components";

interface PublicLayoutProps {
  children: React.ReactNode;
  main?: boolean;
}

export const PublicLayout = ({ children, main }: PublicLayoutProps) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        theme === "dark" ? "bg-[#00030A]" : "bg-white"
      }`}
    >
      {main && <NavBar isMobile={isMobile} />}
      <div
        className={`flex-1 w-full flex flex-col items-center justify-center px-6 sm:px-10 py-6 sm:py-12 ${
          isMobile ? "mb-16" : main ? "max-w-6xl" : ""
        }`}
      >
        <div className="hidden mb-6 space-x-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 font-semibold text-gray-200 transition duration-300 ease-in-out transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
          >
            {theme === "dark" ? "Light Theme" : "Dark Theme"}
          </button>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 font-semibold text-gray-200 transition duration-300 ease-in-out transform bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50"
          >
            {language === "es" ? "English" : "Español"}
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface DataProfileCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  viewAllLink?: string; // Hacemos que este prop sea opcional
}

export const DataProfileCard: React.FC<DataProfileCardProps> = ({
  icon,
  title,
  children,
  viewAllLink,
}) => {
  return (
    <section className="relative z-10 w-full p-8 mb-8 rounded-lg shadow-lg bg-with-glow">
      <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl text-white">{icon}</span>
          <h2 className="font-bold text-white text-subtitle1">{title}</h2>
        </div>
        {viewAllLink && (
          <a
            href={viewAllLink}
            className="flex items-center mt-2 text-sm font-medium text-blue-500 transition-colors duration-300 hover:text-blue-400 lg:mt-0"
          >
            Ver todos los proyectos <FaArrowRight className="ml-1" />
          </a>
        )}
      </div>
      {children}
    </section>
  );
};

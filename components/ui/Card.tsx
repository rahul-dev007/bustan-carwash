import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`
        bg-white/10 backdrop-blur-md border border-white/20 rounded-xl
        shadow-md p-6
        transition-transform duration-300 hover:scale-105 hover:shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export const CardContent: React.FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;

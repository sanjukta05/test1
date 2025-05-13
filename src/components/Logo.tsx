
import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
}

const Logo = ({ className = "", variant = 'light' }: LogoProps) => {
  return (
    <Link to="/" className={`block ${className}`}>
      <img 
        src="/lovable-uploads/8655836f-effa-4e4c-b925-594228bce6c8.png" 
        alt="DecoPaints Logo" 
        className={`h-10 md:h-12 w-auto ${variant === 'light' ? 'brightness-100' : 'brightness-100'}`}
      />
    </Link>
  );
};

export default Logo;

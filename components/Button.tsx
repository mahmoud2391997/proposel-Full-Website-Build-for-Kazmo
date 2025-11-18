import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-heading font-semibold tracking-wider transition-all duration-300 uppercase disabled:opacity-50";
  
  const sizes = {
    sm: "px-6 py-2 text-xs",
    md: "px-8 py-3 text-sm",
    lg: "px-10 py-4 text-base"
  };

  const variants = {
    primary: "bg-kazmo-black text-white hover:bg-kazmo-olive border border-transparent",
    secondary: "bg-kazmo-olive text-white hover:bg-kazmo-black border border-transparent",
    outline: "bg-transparent border border-kazmo-black text-kazmo-black hover:bg-kazmo-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${sizes[size]} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
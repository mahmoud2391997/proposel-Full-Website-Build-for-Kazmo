import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-heading font-semibold text-sm tracking-wider transition-all duration-300 uppercase disabled:opacity-50";
  
  const variants = {
    primary: "bg-kazmo-black text-white hover:bg-kazmo-olive border border-transparent",
    secondary: "bg-kazmo-olive text-white hover:bg-kazmo-black border border-transparent",
    outline: "bg-transparent border border-kazmo-black text-kazmo-black hover:bg-kazmo-black hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
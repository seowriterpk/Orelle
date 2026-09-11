import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  as?: React.ElementType;
}

export function Button({ 
  className = '', 
  variant = 'primary', 
  size = 'md', 
  href,
  as,
  children,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-[0.1em] uppercase transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-[#D4AF37] text-black hover:bg-[#E7D7A5]',
    secondary: 'bg-white text-black hover:bg-gray-200',
    outline: 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black',
    ghost: 'text-[#D4AF37] hover:bg-[#1A1A1A]',
  };

  const sizes = {
    sm: 'px-6 py-3 text-[10px]',
    md: 'px-8 py-4 text-[11px]',
    lg: 'px-10 py-5 text-xs',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('sms:')) {
      return (
        <a href={href} target={props.target} rel={props.target === '_blank' ? 'noopener noreferrer' : undefined} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} target={props.target} className={classes}>
        {children}
      </Link>
    );
  }

  const Component = as || 'button';

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

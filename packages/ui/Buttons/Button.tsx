import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Button({
  children,
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <button
      className={`font-head bg-primary-400 text-primary-foreground border-2 border-black shadow-md hover:shadow-xs transition-all ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

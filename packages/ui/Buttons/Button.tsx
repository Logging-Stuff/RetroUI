import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  className?: string;
  variant?: "primary" | "outline" | "link";
}

export function Button({
  children,
  size = "md",
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-primary-400 text-black border-2 border-black hover:bg-primary-500",
    outline: "bg-transparent text-black border-2 border-black",
    link: "bg-transparent text-primary-400 hover:underline",
  };

  return (
    <button
      className={`font-head border-2 border-black shadow-md hover:shadow-xs transition-all ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

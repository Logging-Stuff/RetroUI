import React, { HTMLAttributes } from "react";

const variants = {
  default: "border-black text-black",
  error: "border-red-600 text-red-600",
  success: "border-green-600 text-green-600",
};

interface ButtonProps extends HTMLAttributes<HTMLSpanElement> {
  size?: "sm" | "md" | "lg";
  variant?: keyof typeof variants;
  className?: string;
}

export function Badge({
  children,
  size = "md",
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-2 py-1 text-sm",
    lg: "px-8 py-3 text-lg",
  };

  return (
    <span
      className={`text-primary-foreground border-2 ${variants[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}

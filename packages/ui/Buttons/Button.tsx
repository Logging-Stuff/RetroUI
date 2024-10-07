import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes } from "react";

const buttonVariants = cva(
  "font-head border-2 border-black shadow-md hover:shadow-xs transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-primary-400 text-black border-2 border-black hover:bg-primary-500",
        outline: "bg-transparent text-black border-2 border-black",
        link: "bg-transparent text-primary-400 hover:underline",
      },
      size: {
        sm: "px-4 py-1 text-sm",
        md: "px-6 py-2 text-base",
        lg: "px-8 py-3 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  children,
  size = "md",
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}

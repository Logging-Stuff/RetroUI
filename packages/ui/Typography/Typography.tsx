import type { HTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("font-head", {
  variants: {
    variant: {
      h1: "text-5xl lg:text-6xl font-bold",
      h2: "text-3xl lg:text-4xl font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-medium",
      h5: "text-lg font-medium",
      h6: "",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

interface TypographyProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof typographyVariants> {
  className?: string;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Typography = ({
  className,
  component,
  variant,
  ...props
}: TypographyProps) => {
  const Component = component || "h1";
  return (
    <Component
      className={cn(typographyVariants({ variant }), className)}
      {...props}
    />
  );
};

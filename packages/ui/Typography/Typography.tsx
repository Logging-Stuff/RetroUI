import type { ElementType, HTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const typographyVariants = cva("font-head", {
  variants: {
    variant: {
      p: "font-sans text-base",
      h1: "text-5xl lg:text-6xl font-bold",
      h2: "text-3xl lg:text-4xl font-semibold",
      h3: "text-2xl font-medium",
      h4: "text-xl font-medium",
      h5: "text-lg font-medium",
      h6: "",
    },
  },
  defaultVariants: {
    variant: "p",
  },
});

type ComponentsMap = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
interface TypographyProps<T extends ComponentsMap = "p">
  extends Omit<HTMLAttributes<HTMLElement>, "className">,
    VariantProps<typeof typographyVariants> {
  className?: string;
  component?: T;
}

export const Typography = (props: TypographyProps) => {
  const { className, component = "p", variant, ...otherProps } = props;
  const Tag: ElementType = component;

  return (
    <Tag
      className={cn(typographyVariants({ variant }), className)}
      {...otherProps}
    />
  );
};

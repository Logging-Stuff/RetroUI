import type { ElementType, HTMLAttributes } from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("font-head", {
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

type TagsMap = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";

interface TextProps<T extends TagsMap = "p">
  extends Omit<HTMLAttributes<HTMLElement>, "className">,
    VariantProps<typeof textVariants> {
  className?: string;
  tag?: T;
}

export const Text = <T extends TagsMap>(props: TextProps<T>) => {
  const { className, tag = "p" as T, variant, ...otherProps } = props;
  const Tag: ElementType = tag;

  return (
    <Tag className={cn(textVariants({ variant }), className)} {...otherProps} />
  );
};

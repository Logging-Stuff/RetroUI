import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const dialogFooterVariants = cva(
  "flex items-center justify-end border-t-2 border-black min-h-12 gap-4 px-4 py-2",
  {
    variants: {
      variant: {
        default: "bg-white text-black",
      },
      position: {
        fixed: "sticky bottom-0",
        static: "static",
      },
    },
    defaultVariants: {
      position: "fixed",
    },
  }
);

export interface IDialogFooterProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dialogFooterVariants> {}

export function DialogFooter({
  children,
  className,
  position,
  variant,
  ...props
}: IDialogFooterProps) {
  return (
    <div
      className={cn(dialogFooterVariants({ position, variant }), className)}
      {...props}
    >
      {children}
    </div>
  );
}

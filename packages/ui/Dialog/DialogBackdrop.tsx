import { cn } from "@/lib/utils";
import * as ReactDialog from "@radix-ui/react-dialog";
import { cva, VariantProps } from "class-variance-authority";
import React, { HTMLAttributes } from "react";

const overlayVariants = cva(
  ` fixed bg-black/80 font-head
    data-[state=open]:fade-in-0
    data-[state=open]:animate-in 
    data-[state=closed]:animate-out 
    data-[state=closed]:fade-out-0 
  `,
  {
    variants: {
      variant: {
        default: "inset-0 z-50 bg-black/80",
        none: "fixed bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface IDialogBackgroupProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof overlayVariants> {}

export const DialogBackdrop = React.forwardRef<
  HTMLDivElement,
  IDialogBackgroupProps
>((inputProps: IDialogBackgroupProps, forwardedRef) => {
  const { variant = "default", className, ...props } = inputProps;

  return (
    <ReactDialog.Overlay
      className={cn(overlayVariants({ variant }), className)}
      {...props}
    />
  );
});
